"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { industries } from "@/data/site";
import Lines from "./Lines";

export default function Industries() {
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
    <section id="solutions" className="rule py-20">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="eyebrow">{industries.eyebrow}</p>
            <h2 className="h2 mt-4"><Lines lines={industries.title} /></h2>
            <p className="lead mt-4">{industries.body}</p>
          </div>
          <a href={industries.cta.href} className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[var(--accent)] transition-colors">
            {industries.cta.label} <ArrowRight size={13} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {industries.items.map((x) => (
            <motion.article
              key={x.title}
              variants={itemVariants}
              tabIndex={0}
              className="group relative aspect-[3/4] overflow-hidden rounded-md border border-[var(--line)] transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none"
            >
              <Image src={x.image} alt={x.title} fill sizes="(min-width:1024px) 16vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">{x.title}</h3>
                <p className="mt-2 text-[11px] leading-snug text-white/70 transition-all duration-300 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100 lg:group-focus:max-h-32 lg:group-focus:opacity-100">{x.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
