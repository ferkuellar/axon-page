import { useCanvasFlow } from "../../hooks/useCanvasFlow";
import type { CanvasFlowDensity } from "./canvasFlowConfig";

interface IntelligentFlowCanvasProps {
  density?: CanvasFlowDensity;
  className?: string;
}

export function IntelligentFlowCanvas({ density = "hero", className = "" }: IntelligentFlowCanvasProps) {
  const interactive = density === "hero";
  const canvasRef = useCanvasFlow({ density, interactive });

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
