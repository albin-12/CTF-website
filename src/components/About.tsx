"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { about } from "@/data/site";
import Lines from "./Lines";

const TOTAL_FRAMES = 150;

const getFramePath = (index: number) => {
  const frameNum = String(Math.min(TOTAL_FRAMES, Math.max(1, index + 1))).padStart(4, "0");
  return `/dog-frames/frame_${frameNum}.webp`;
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    const imgRatio = (img.naturalWidth || 16) / (img.naturalHeight || 9);
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const currentIndex = Math.round(frameIndex.get());
    drawFrame(currentIndex);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsReducedMotion(reduced);

    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      handleResize();
      drawFrame(0);
    };

    // Preload all frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        images[i] = img;
        const currentIdx = Math.round(frameIndex.get());
        if (currentIdx === i) {
          drawFrame(i);
        }
      };
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isReducedMotion) return;
    const index = Math.round(latest);
    drawFrame(index);
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`rule relative ${isReducedMotion ? "py-24 lg:py-32 overflow-hidden" : "h-[300vh]"}`}
    >
      <div className={`${isReducedMotion ? "relative w-full min-h-[600px] flex items-center" : "sticky top-0 h-screen w-full overflow-hidden flex items-center"}`}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Soft gradient edge overlays for seamless page integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90 pointer-events-none z-[1]" />

        <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[1.1fr_1fr_0.5fr] w-full py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="h2 mt-5"><Lines lines={about.title} /></h2>
            <div className="mt-6 space-y-4">{about.body.map((p) => <p key={p} className="lead">{p}</p>)}</div>
            <a href={about.cta.href} className="btn-outline mt-8">{about.cta.label} <ArrowRight size={14} /></a>
          </motion.div>
          <div className="hidden lg:block" />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-12 lg:items-end lg:text-right"
          >
            <p className="text-[11px] uppercase leading-6 tracking-[0.25em] text-white/70">
              {about.side.map((s) => <span key={s} className="block">{s}</span>)}
            </p>
            <p className="border-l border-[var(--accent)] pl-4 text-[11px] uppercase tracking-[0.25em] text-white/80 lg:text-left shadow-[0_0_12px_rgba(16,185,129,0.2)]">{about.badge}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
