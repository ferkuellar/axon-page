export type CanvasFlowDensity = "hero" | "ambient";

interface CanvasFlowRuntimeConfig {
  columns: number;
  pointCount: number;
  pointRadius: number;
  pulseCount: number;
  pulseBaseSpeed: number;
  maxDistance: number;
  lineAlpha: number;
  glowColor: string;
  pointColor: string;
  pulseColor: string;
}

interface CanvasFlowConfig {
  desktop: CanvasFlowRuntimeConfig;
  mobile: CanvasFlowRuntimeConfig;
}

export const canvasFlowConfigs: Record<CanvasFlowDensity, CanvasFlowConfig> = {
  hero: {
    desktop: {
      columns: 8,
      pointCount: 34,
      pointRadius: 1.35,
      pulseCount: 14,
      pulseBaseSpeed: 0.0012,
      maxDistance: 210,
      lineAlpha: 0.14,
      glowColor: "rgba(130, 180, 255, 0.35)",
      pointColor: "rgba(151, 190, 255, 0.38)",
      pulseColor: "rgba(210, 229, 255, 0.7)",
    },
    mobile: {
      columns: 5,
      pointCount: 18,
      pointRadius: 1.1,
      pulseCount: 8,
      pulseBaseSpeed: 0.0012,
      maxDistance: 150,
      lineAlpha: 0.14,
      glowColor: "rgba(130, 180, 255, 0.35)",
      pointColor: "rgba(151, 190, 255, 0.38)",
      pulseColor: "rgba(210, 229, 255, 0.7)",
    },
  },
  ambient: {
    desktop: {
      columns: 6,
      pointCount: 18,
      pointRadius: 1,
      pulseCount: 6,
      pulseBaseSpeed: 0.0009,
      maxDistance: 185,
      lineAlpha: 0.09,
      glowColor: "rgba(130, 180, 255, 0.22)",
      pointColor: "rgba(151, 190, 255, 0.24)",
      pulseColor: "rgba(210, 229, 255, 0.48)",
    },
    mobile: {
      columns: 4,
      pointCount: 10,
      pointRadius: 0.8,
      pulseCount: 3,
      pulseBaseSpeed: 0.0009,
      maxDistance: 130,
      lineAlpha: 0.09,
      glowColor: "rgba(130, 180, 255, 0.22)",
      pointColor: "rgba(151, 190, 255, 0.24)",
      pulseColor: "rgba(210, 229, 255, 0.48)",
    },
  },
};
