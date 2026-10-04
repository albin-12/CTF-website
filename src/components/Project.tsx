"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { project } from "@/data/site";
import Lines from "./Lines";

export default function Project() {
  return (
    <section className="rule py-20 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">{project.eyebrow}</p>
          <h2 className="h2 mt-5"><Lines lines={project.title} /></h2>
          <p className="lead mt-5">{project.body}</p>
          <p className="mt-8 text-sm text-white/70">{project.lead}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-white/80 transition-colors duration-300 hover:border-[var(--accent)]/50 hover:text-white">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={project.cta.href} className="btn-outline">{project.cta.label} <ArrowRight size={14} /></a>
            <a href={project.cta2.href} className="btn-outline border-transparent text-white/70 hover:text-white">{project.cta2.label} <ArrowRight size={14} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--line)] shadow-2xl group"
        >
          <Image src={project.image} alt="Autonomous terrain rover" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
