import { describe, expect, it } from "vitest";
import { canvasFlowConfigs } from "./canvasFlowConfig";

describe("canvasFlowConfigs", () => {
  it("define estrategias hero y ambient con menor carga en ambient", () => {
    expect(canvasFlowConfigs.hero.desktop.pointCount).toBeGreaterThan(canvasFlowConfigs.ambient.desktop.pointCount);
    expect(canvasFlowConfigs.hero.mobile.pointCount).toBeGreaterThan(canvasFlowConfigs.ambient.mobile.pointCount);
    expect(canvasFlowConfigs.ambient.desktop.pulseCount).toBeLessThan(canvasFlowConfigs.hero.desktop.pulseCount);
  });
});
