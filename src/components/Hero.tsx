"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { hero } from "@/data/site";
import Lines from "./Lines";

export default function Hero() {
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(rawMouseX, springConfig);
  const springY = useSpring(rawMouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const offsetY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      // Move ~18px opposite to cursor
      rawMouseX.set(offsetX * -18);
      rawMouseY.set(offsetY * -18);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: springX, y: springY }}
        className="absolute inset-0"
      >
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover object-[75%_center] lg:object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent lg:via-black/20" />
      </motion.div>

      <div className="wrap relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p variants={itemVariants} className="eyebrow">{hero.eyebrow}</motion.p>
          <motion.h1 variants={itemVariants} className="h1 mt-6"><Lines lines={hero.title} /></motion.h1>
          <motion.p variants={itemVariants} className="lead mt-8 text-white/80">{hero.body}</motion.p>
          <motion.div variants={itemVariants}>
            <a href={hero.cta.href} className="mt-10 inline-flex items-center gap-4 text-sm group">
              <span className="btn-circle group-hover:scale-105 transition-transform duration-300"><ArrowRight size={18} /></span> {hero.cta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="wrap absolute inset-x-0 bottom-8 hidden items-end justify-between lg:flex pointer-events-none"
      >
        <p className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/60">
          <span>01</span><span className="h-px w-14 bg-white/40" /><span>Scroll to explore</span>
        </p>
        <p className="absolute right-8 bottom-36 hidden lg:block text-[11px] uppercase leading-5 tracking-[0.25em] text-white/70">
          {hero.side.map((s) => <span key={s} className="block">{s}</span>)}
        </p>
      </motion.div>
    </section>
  );
}
