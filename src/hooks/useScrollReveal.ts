import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Reveal children with stagger classes too
            entry.target.querySelectorAll(".section-reveal").forEach((child) => {
              child.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    // Also observe children
    el.querySelectorAll(".section-reveal").forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
