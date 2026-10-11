"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type DogScrollProps = {
  frameCount?: number;
  folder?: string;
  extension?: string;
  scrollHeightVh?: number;
  children?: React.ReactNode;
};

export default function DogScroll({
  frameCount = 150,
  folder = "/dog-frames",
  extension = "webp",
  scrollHeightVh = 350,
  children,
}: DogScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetProgressRef = useRef(0);
  const displayedFrameRef = useRef(0);
  const visibleRef = useRef(false);
  const sizeRef = useRef({ w: 0, h: 0 });
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  // Preload all frames with milestone prioritization so frames never get stuck
  useEffect(() => {
    let cancelled = false;
    const imgs: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    imagesRef.current = imgs;

    const loadFrame = (index: number) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        imgs[index] = img;
        if (index === 0 && !ready) {
          setReady(true);
        }
        // If current frame being displayed matches this newly loaded image, re-render immediately
        if (Math.round(displayedFrameRef.current) === index) {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d", { alpha: false });
            if (ctx && sizeRef.current.w > 0) {
              const { w, h } = sizeRef.current;
              const nw = img.naturalWidth || 16;
              const nh = img.naturalHeight || 9;
              const scale = Math.max(w / nw, h / nh);
              const dw = nw * scale;
              const dh = nh * scale;
              ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
            }
          }
        }
      };
      img.src = `${folder}/frame_${String(index + 1).padStart(4, "0")}.${extension}`;
    };

    // 1. First frame immediately
    loadFrame(0);

    // 2. Load milestone frames (every 5th frame) to ensure full scrub coverage rapidly
    const milestones = new Set<number>();
    for (let i = 0; i < frameCount; i += 5) {
      milestones.add(i);
      loadFrame(i);
    }

    // 3. Load all remaining frames
    for (let i = 0; i < frameCount; i++) {
      if (!milestones.has(i)) {
        loadFrame(i);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [frameCount, folder, extension]);

  // Canvas drawing & precision scroll loop
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const getFrame = (index: number) => {
      const imgs = imagesRef.current;
      const target = Math.max(0, Math.min(index, imgs.length - 1));
      if (imgs[target]) return imgs[target];
      // Search nearest loaded frame in both directions
      for (let offset = 1; offset < frameCount; offset++) {
        if (target - offset >= 0 && imgs[target - offset]) return imgs[target - offset];
        if (target + offset < frameCount && imgs[target + offset]) return imgs[target + offset];
      }
      return imgs[0] || null;
    };

    const drawFrame = (index: number) => {
      const { w, h } = sizeRef.current;
      if (!w || !h) return;
      const img = getFrame(index);
      if (!img) return;

      const nw = img.naturalWidth || 16;
      const nh = img.naturalHeight || 9;
      const scale = Math.max(w / nw, h / nh);
      const dw = nw * scale;
      const dh = nh * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const getScrollProgress = () => {
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return 0;
      const currentScroll = -rect.top;
      return Math.min(Math.max(currentScroll / totalScroll, 0), 1);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (w === 0 || h === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;

      sizeRef.current = { w, h };
      drawFrame(Math.round(displayedFrameRef.current));
    };

    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 80);
    });
    ro.observe(canvas);

    let rafId: number | null = null;
    const renderOnScroll = () => {
      rafId = null;
      if (!visibleRef.current) return;

      const p = reduceMotion ? 0 : targetProgressRef.current;
      const targetFrame = Math.round(p * (frameCount - 1));

      if (targetFrame !== displayedFrameRef.current) {
        displayedFrameRef.current = targetFrame;
        drawFrame(targetFrame);
      }
    };

    const handleScroll = () => {
      if (!visibleRef.current) return;
      targetProgressRef.current = getScrollProgress();
      if (rafId === null) {
        rafId = requestAnimationFrame(renderOnScroll);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          handleScroll();
        }
      },
      { rootMargin: "250px 0px" }
    );
    io.observe(wrapper);

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial render
    targetProgressRef.current = getScrollProgress();
    displayedFrameRef.current = targetProgressRef.current * (frameCount - 1);
    drawFrame(Math.round(displayedFrameRef.current));

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ready, frameCount, reduceMotion]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: reduceMotion ? "100svh" : `${scrollHeightVh}vh` }}
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#050505] will-change-transform transform-gpu"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full will-change-transform transform-gpu"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}