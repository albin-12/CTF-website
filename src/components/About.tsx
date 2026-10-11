"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/data/site";
import Lines from "./Lines";
import DogScroll from "./DogScroll";

export default function About() {
  return (
    <section id="about" className="rule relative">
      <DogScroll>
        <div className="wrap flex h-full items-center py-12">
          <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_1fr_0.5fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                </span>
                <p className="eyebrow">{about.eyebrow}</p>
              </div>
              <h2 className="h2 mt-5"><Lines lines={about.title} /></h2>
              <div className="mt-6 space-y-4 rounded-xl border border-white/5 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]">
                {about.body.map((p) => <p key={p} className="lead">{p}</p>)}
              </div>
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
      </DogScroll>
    </section>
  );
}
