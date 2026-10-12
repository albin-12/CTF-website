"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { approach } from "@/data/site";
import Lines from "./Lines";

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="approach" className="rule py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-[120px]" />

      <div className="wrap">
        {/* Top Header & Drone Visual Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.25fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">{approach.eyebrow} — {approach.eyebrowSub}</p>
            <h2 className="h2 mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.06] tracking-tight">
              <Lines lines={approach.title} />
            </h2>
            <p className="lead mt-6 text-white/70 max-w-lg">{approach.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Ambient green underglow */}
            <div className="absolute inset-0 bg-radial-glow opacity-80 filter blur-3xl pointer-events-none" />
            <div className="relative w-full max-w-xl lg:max-w-2xl aspect-[614/232]">
              <Image
                src="/images/approach-drone.webp"
                alt="CTF Autonomous Aerial Craft"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.18)] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom 5-Step Process Bar */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {approach.steps.map((s, n) => {
            const isActive = activeStep === n;
            return (
              <motion.li
                key={s.title}
                variants={itemVariants}
                onClick={() => setActiveStep(n)}
                onMouseEnter={() => setActiveStep(n)}
                className={`group relative cursor-pointer p-6 lg:p-7 transition-all duration-300 ${
                  isActive
                    ? "bg-[#0c1210] shadow-[inset_0_0_25px_rgba(16,185,129,0.06)]"
                    : "bg-[var(--bg)] hover:bg-[#0c0d10]"
                }`}
              >
                {/* Active or hover top accent line */}
                <div
                  className={`absolute top-0 inset-x-0 h-[1.5px] transition-opacity duration-300 ${
                    isActive
                      ? "bg-[var(--accent)] opacity-100 shadow-[0_0_10px_var(--accent)]"
                      : "bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Step number and status indicator */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--accent)] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        : "text-white/60 group-hover:text-[var(--accent)]"
                    }`}
                  >
                    0{n + 1}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                        : n === 1
                        ? "bg-[var(--accent)]/80 shadow-[0_0_6px_var(--accent)]"
                        : "bg-white/20 group-hover:bg-[var(--accent)]/60"
                    }`}
                  />
                </div>

                {/* Step Title & Glowing Orb */}
                <div className="mt-5 flex items-center gap-3">
                  <h3
                    className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-white group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {s.title}
                  </h3>
                  {isActive && (
                    <motion.div
                      layoutId="activeStepOrb"
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)]/20 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />
                    </motion.div>
                  )}
                </div>

                {/* Step Description */}
                <p className="mt-3 text-xs lg:text-[13px] leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {s.text}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
