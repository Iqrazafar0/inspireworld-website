"use client";

import { useEffect } from "react";

/**
 * Gentle reveal-on-scroll. Content is visible by default (no JS, crawlers, screenshots):
 * only `.reveal` elements that start below the fold are hidden, then eased in as they arrive.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("is-pending");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    const seen = new WeakSet<Element>();
    const prepare = () =>
      document.querySelectorAll(".reveal").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("is-pending");
          io.observe(el);
        }
      });
    prepare();
    // Filtering product lines mounts new cards; pick them up too.
    const mo = new MutationObserver(prepare);
    mo.observe(document.getElementById("main") ?? document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
