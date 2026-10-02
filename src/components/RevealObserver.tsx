"use client";
import { useEffect } from "react";

// Fades/slides in anything marked data-reveal, and every child of data-stagger (one after another).
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((e) => els.push(e));
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((p) =>
      Array.from(p.children).forEach((c, i) => {
        (c as HTMLElement).style.transitionDelay = `${i * 90}ms`;
        els.push(c as HTMLElement);
      })
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("is-in");
          io.unobserve(el);
          setTimeout(() => { el.classList.remove("reveal", "is-in"); el.style.transitionDelay = ""; }, 1300);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => { el.classList.add("reveal"); void el.offsetHeight; io.observe(el); });
    return () => io.disconnect();
  }, []);
  return null;
}