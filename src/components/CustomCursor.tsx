"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Strictly disable on touch devices or when prefers-reduced-motion is active
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target &&
          (target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("a") ||
            target.closest("button") ||
            target.getAttribute("role") === "button" ||
            target.getAttribute("role") === "tab")
      );

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!enabled || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform transform-gpu"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? 48 : 22,
        height: isHovered ? 48 : 22,
        backgroundColor: isHovered ? "rgba(34, 197, 94, 0.18)" : "rgba(16, 185, 129, 0.35)",
        border: isHovered ? "1.5px solid rgba(34, 197, 94, 0.9)" : "1px solid rgba(16, 185, 129, 0.6)",
        boxShadow: isHovered
          ? "0 0 24px rgba(34, 197, 94, 0.5), inset 0 0 10px rgba(34, 197, 94, 0.3)"
          : "0 0 12px rgba(16, 185, 129, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    />
  );
}
