import { act, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useRevealOnScroll } from "./useRevealOnScroll";

function RevealProbe() {
  useRevealOnScroll();
  return <div className="reveal">Contenido</div>;
}

function DynamicRevealProbe() {
  const [visible, setVisible] = useState(false);
  useRevealOnScroll();

  return (
    <>
      <button type="button" onClick={() => setVisible(true)}>
        Mostrar
      </button>
      {visible ? <div className="reveal">Lazy content</div> : null}
    </>
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useRevealOnScroll", () => {
  it("registra observer y limpia correctamente", () => {
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();
    let callback: IntersectionObserverCallback | undefined;

    class IntersectionObserverMock {
      constructor(cb: IntersectionObserverCallback) {
        callback = cb;
      }
      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    }

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

    const { container, unmount } = render(<RevealProbe />);
    const element = container.querySelector(".reveal") as HTMLElement;

    expect(observe).toHaveBeenCalledWith(element);

    act(() => {
      callback?.([{ isIntersecting: true, target: element } as unknown as IntersectionObserverEntry], {} as IntersectionObserver);
    });

    expect(element).toHaveClass("is-visible");
    expect(unobserve).toHaveBeenCalledWith(element);

    unmount();
    expect(disconnect).toHaveBeenCalled();
  });

  it("registra elementos reveal agregados despues del montaje", async () => {
    const observe = vi.fn();
    const disconnect = vi.fn();

    class IntersectionObserverMock {
      observe = observe;
      unobserve = vi.fn();
      disconnect = disconnect;
    }

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

    render(<DynamicRevealProbe />);

    act(() => {
      screen.getByRole("button", { name: "Mostrar" }).click();
    });

    await waitFor(() => expect(observe).toHaveBeenCalledWith(screen.getByText("Lazy content")));
  });
});
