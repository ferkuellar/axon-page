import { useEffect } from "react";

export function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observedElements = new Set<HTMLElement>();

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const observeElement = (element: HTMLElement) => {
      if (observedElements.has(element) || element.classList.contains("is-visible")) {
        return;
      }

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("is-visible");
        return;
      }

      observedElements.add(element);
      observer.observe(element);
    };

    const observeCurrentElements = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach(observeElement);
    };

    observeCurrentElements();

    const mutationObserver = new MutationObserver(() => {
      observeCurrentElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      observedElements.clear();
    };
  }, [selector]);
}
