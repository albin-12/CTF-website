"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { offices, officesHeader } from "@/data/site";

export default function Offices() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="offices" className="rule py-20 lg:py-24">
      <div className="wrap">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="eyebrow">{officesHeader.eyebrow}</p>
          <h2 className="h2 mt-4">{officesHeader.title}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {offices.map((office, idx) => (
            <motion.div
              key={office.city}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }
              }
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg)] p-8 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              {/* Subtle cursor-following spotlight effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.08), transparent 70%)",
                }}
              />

              {/* Detail at the top: thin green accent line and small green dot */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent transition-opacity duration-300 group-hover:via-[var(--accent)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[var(--accent)] font-semibold">
                      {office.country}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-3xl font-light text-white tracking-tight">
                    {office.city}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    {office.name}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
                  {office.address}
                </p>
              </div>

              <div className="relative z-10 mt-8 border-t border-[var(--line)] pt-6 space-y-2.5">
                {office.phones.map((phone) => (
                  <div key={phone.number} className="flex items-center gap-2 text-xs">
                    <span className="text-white/40">{phone.label}:</span>
                    <a
                      href={`tel:${phone.number.replace(/[\s()]/g, "")}`}
                      className="text-white/80 transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
