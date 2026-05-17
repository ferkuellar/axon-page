import { useEffect, useRef } from "react";
import { canvasFlowConfigs, type CanvasFlowDensity } from "../components/ui/canvasFlowConfig";

interface FlowPoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  delay: number;
}

interface UseCanvasFlowOptions {
  density: CanvasFlowDensity;
  interactive: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function useCanvasFlow({ density, interactive }: UseCanvasFlowOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let points: FlowPoint[] = [];
    let pulses: Pulse[] = [];
    let animationId: number | null = null;
    let isVisible = false;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stopAnimation = () => {
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const buildScene = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = width < 720;
      const config = mobile ? canvasFlowConfigs[density].mobile : canvasFlowConfigs[density].desktop;
      const rows = Math.ceil(config.pointCount / config.columns);
      const marginX = width * (mobile ? 0.1 : 0.08);
      const marginY = height * (mobile ? 0.18 : 0.12);

      points = Array.from({ length: config.pointCount }, (_, index) => {
        const col = index % config.columns;
        const row = Math.floor(index / config.columns);
        const normalizedCol = col / (config.columns - 1);
        const normalizedRow = rows === 1 ? 0.5 : row / (rows - 1);
        const jitterX = Math.sin(index * 12.9898) * (mobile ? 18 : 34);
        const jitterY = Math.cos(index * 7.233) * (mobile ? 14 : 28);
        const baseX = marginX + normalizedCol * (width - marginX * 2) + jitterX;
        const baseY = marginY + normalizedRow * (height - marginY * 1.8) + jitterY;

        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          radius: config.pointRadius,
          phase: index * 0.77,
        };
      });

      pulses = Array.from({ length: config.pulseCount }, (_, index) => ({
        from: index % config.pointCount,
        to: (index * 5 + 7) % config.pointCount,
        progress: 0,
        speed: config.pulseBaseSpeed + (index % 5) * 0.0002,
        delay: index * 120,
      }));
    };

    const draw = () => {
      const mobile = width < 720;
      const config = mobile ? canvasFlowConfigs[density].mobile : canvasFlowConfigs[density].desktop;

      context.clearRect(0, 0, width, height);
      frame += 1;

      const pointer = pointerRef.current;
      const time = frame * 0.008;
      const interactionRadius = mobile ? 120 : 190;

      context.save();
      context.globalCompositeOperation = "lighter";

      for (const point of points) {
        const driftX = Math.sin(time + point.phase) * 8;
        const driftY = Math.cos(time * 0.82 + point.phase) * 7;
        let targetX = point.baseX + driftX;
        let targetY = point.baseY + driftY;

        if (interactive && pointer.active) {
          const dx = targetX - pointer.x;
          const dy = targetY - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = clamp(1 - distance / interactionRadius, 0, 1) * 16;
          targetX += (dx / distance) * force;
          targetY += (dy / distance) * force;
        }

        point.vx += (targetX - point.x) * 0.018;
        point.vy += (targetY - point.y) * 0.018;
        point.vx *= 0.88;
        point.vy *= 0.88;
        point.x += point.vx;
        point.y += point.vy;
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const alpha = (1 - distance / config.maxDistance) * config.lineAlpha;
            context.strokeStyle = `rgba(91, 139, 216, ${alpha})`;
            context.lineWidth = 0.65;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const pulse of pulses) {
        if (frame < pulse.delay) continue;
        pulse.progress += pulse.speed;
        if (pulse.progress > 1.18) {
          pulse.progress = -0.08;
          pulse.from = (pulse.from + 3) % points.length;
          pulse.to = (pulse.to + 7) % points.length;
        }

        const a = points[pulse.from];
        const b = points[pulse.to];
        const t = clamp(pulse.progress, 0, 1);
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;
        const glow = context.createRadialGradient(x, y, 0, x, y, 14);
        glow.addColorStop(0, config.glowColor);
        glow.addColorStop(1, "rgba(43, 127, 255, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, 14, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = config.pulseColor;
        context.beginPath();
        context.arc(x, y, 1.4, 0, Math.PI * 2);
        context.fill();
      }

      for (const point of points) {
        context.fillStyle = config.pointColor;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      if (!reducedMotion && isVisible) {
        animationId = window.requestAnimationFrame(draw);
      } else {
        animationId = null;
      }
    };

    const startAnimation = () => {
      if (animationId === null) {
        draw();
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const resizeObserver = new ResizeObserver(buildScene);
    resizeObserver.observe(canvas);
    buildScene();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        stopAnimation();
        draw();
        return;
      }
      if (isVisible) startAnimation();
    };

    let intersectionObserver: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !reducedMotion) {
            startAnimation();
          } else {
            stopAnimation();
            if (reducedMotion) draw();
          }
        },
        { threshold: 0.05 },
      );
      intersectionObserver.observe(canvas);
    } else {
      isVisible = true;
      startAnimation();
    }

    if (reducedMotion) {
      draw();
    }

    motionQuery.addEventListener("change", handleMotionChange);

    if (interactive) {
      canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [density, interactive]);

  return canvasRef;
}
