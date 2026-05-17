import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useScrollState } from "./useScrollState";

function ScrollProbe() {
  const scrolled = useScrollState(50);
  return <span>{scrolled ? "scrolled" : "top"}</span>;
}

const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value,
  });
};

describe("useScrollState", () => {
  it("cambia estado al pasar threshold", () => {
    setScrollY(0);
    render(<ScrollProbe />);

    expect(screen.getByText("top")).toBeInTheDocument();

    act(() => {
      setScrollY(80);
      window.dispatchEvent(new Event("scroll"));
    });

    expect(screen.getByText("scrolled")).toBeInTheDocument();
  });
});
