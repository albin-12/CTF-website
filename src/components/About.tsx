"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/data/site";
import Lines from "./Lines";

export default function About() {
  return (
    <section id="about" className="rule relative overflow-hidden py-24 lg:py-32">
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image src={about.image} alt="" fill sizes="100vw" className="object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      </motion.div>

      <div className="wrap relative grid gap-12 lg:grid-cols-[1.1fr_1fr_0.5fr]">
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
    </section>
  );
}
