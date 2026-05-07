import { useEffect, useRef } from "react";

interface IntelligentFlowCanvasProps {
  density?: "hero" | "ambient";
  className?: string;
}

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

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function IntelligentFlowCanvas({ density = "hero", className = "" }: IntelligentFlowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const interactive = density === "hero";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let points: FlowPoint[] = [];
    let pulses: Pulse[] = [];
    let animationId = 0;

    const buildScene = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = width < 720;
      const pointCount = density === "ambient" ? (mobile ? 10 : 18) : mobile ? 18 : 34;
      const columns = density === "ambient" ? (mobile ? 4 : 6) : mobile ? 5 : 8;
      const rows = Math.ceil(pointCount / columns);
      const marginX = width * (mobile ? 0.1 : 0.08);
      const marginY = height * (mobile ? 0.18 : 0.12);

      points = Array.from({ length: pointCount }, (_, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        const normalizedCol = col / (columns - 1);
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
          radius: density === "ambient" ? (mobile ? 0.8 : 1) : mobile ? 1.1 : 1.35,
          phase: index * 0.77,
        };
      });

      pulses = Array.from({ length: density === "ambient" ? (mobile ? 3 : 6) : mobile ? 8 : 14 }, (_, index) => ({
        from: index % pointCount,
        to: (index * 5 + 7) % pointCount,
        progress: 0,
        speed: (density === "ambient" ? 0.0009 : 0.0012) + (index % 5) * 0.0002,
        delay: index * 120,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      frame += 1;

      const pointer = pointerRef.current;
      const time = frame * 0.008;
      const maxDistance = density === "ambient" ? (width < 720 ? 130 : 185) : width < 720 ? 150 : 210;
      const interactionRadius = width < 720 ? 120 : 190;

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

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * (density === "ambient" ? 0.09 : 0.14);
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
        glow.addColorStop(0, density === "ambient" ? "rgba(130, 180, 255, 0.22)" : "rgba(130, 180, 255, 0.35)");
        glow.addColorStop(1, "rgba(43, 127, 255, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, 14, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = density === "ambient" ? "rgba(210, 229, 255, 0.48)" : "rgba(210, 229, 255, 0.7)";
        context.beginPath();
        context.arc(x, y, 1.4, 0, Math.PI * 2);
        context.fill();
      }

      for (const point of points) {
        context.fillStyle = density === "ambient" ? "rgba(151, 190, 255, 0.24)" : "rgba(151, 190, 255, 0.38)";
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(draw);
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
    draw();

    if (interactive) {
      canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={[
        interactive ? "pointer-events-auto" : "pointer-events-none",
        "absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]",
        density === "ambient" ? "opacity-55" : "opacity-90",
        className,
      ].join(" ")}
      aria-hidden="true"
    />
  );
}
