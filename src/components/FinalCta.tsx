"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { finalCta } from "@/data/site";
import Lines from "./Lines";

export default function FinalCta() {
  return (
    <section className="rule relative overflow-hidden py-28 lg:py-40">
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image src={finalCta.image} alt="" fill sizes="100vw" className="object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      </motion.div>

      <div className="wrap relative flex flex-wrap items-start justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">{finalCta.eyebrow}</p>
          <h2 className="h1 mt-5"><Lines lines={finalCta.title} /></h2>
          <p className="mt-6 text-xl font-light text-white/90">{finalCta.lines}</p>
          <p className="lead mt-3 text-white/80">{finalCta.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={finalCta.cta.href} className="btn-outline bg-black/30 backdrop-blur-sm">{finalCta.cta.label} <ArrowRight size={14} /></a>
            <a href={finalCta.cta2.href} className="btn-outline border-transparent bg-black/30 backdrop-blur-sm hover:text-white">{finalCta.cta2.label}</a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden text-[11px] uppercase leading-6 tracking-[0.25em] text-white/80 lg:block"
        >
          {finalCta.side.map((s) => <span key={s} className="block">{s}</span>)}
        </motion.p>
      </div>
    </section>
  );
}
