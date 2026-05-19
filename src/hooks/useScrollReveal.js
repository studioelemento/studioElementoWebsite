import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches IntersectionObserver to add 'visible' class
 * to any element with the 'reveal', 'reveal-left', or 'reveal-right' class.
 *
 * @param {string} selector - CSS selector for elements to observe (default: '.reveal, .reveal-left, .reveal-right')
 * @param {number} threshold - 0–1, how much of the element must be in view (default: 0.15)
 */
export default function useScrollReveal(selector = ".reveal, .reveal-left, .reveal-right", threshold = 0.15) {
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [selector, threshold]);
}
