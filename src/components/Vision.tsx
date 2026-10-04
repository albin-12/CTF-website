"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { vision } from "@/data/site";
import Lines from "./Lines";

export default function Vision() {
  return (
    <section id="vision" className="rule relative overflow-hidden py-24 lg:py-32">
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image src={vision.image} alt="" fill sizes="100vw" className="object-cover object-[60%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      </motion.div>

      <div className="wrap relative grid gap-12 lg:grid-cols-[1fr_1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">{vision.eyebrow}</p>
          <h2 className="h2 mt-5"><Lines lines={vision.title} /></h2>
          <div className="mt-6 space-y-4">{vision.body.map((p) => <p key={p} className="lead">{p}</p>)}</div>
          <a href={vision.cta.href} className="btn-outline mt-8">{vision.cta.label} <ArrowRight size={14} /></a>
        </motion.div>
        <div className="hidden lg:block" />
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5 self-end"
        >
          {vision.pillars.map((v) => (
            <li key={v.title} className="border-l border-white/20 pl-4 transition-all duration-300 hover:border-[var(--accent)] hover:translate-x-1">
              <h3 className="text-sm font-medium text-white">{v.title}</h3>
              <p className="mt-1 text-xs text-white/60">{v.text}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
