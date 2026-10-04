"use client";
import { ArrowRight, Bot, BrainCircuit, Cog, Navigation, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { technology } from "@/data/site";

const icons: Record<string, LucideIcon> = { Bot, BrainCircuit, Navigation, Cog };

export default function Technology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section id="technology" className="rule py-20">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="eyebrow">{technology.eyebrow}</p>
            <h2 className="h2 mt-4">{technology.title}</h2>
            <p className="lead mt-4">{technology.body}</p>
          </div>
          <a href={technology.cta.href} className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[var(--accent)] transition-colors">
            {technology.cta.label} <ArrowRight size={13} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {technology.items.map((t) => {
            const Icon = icons[t.icon] ?? Bot;
            return (
              <motion.div
                key={t.title}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative bg-[var(--bg)] p-7 transition-colors duration-300 hover:bg-[#0c0d10]"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-[var(--accent)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" size={30} strokeWidth={1.2} />
                </div>
                <h3 className="mt-6 text-lg font-medium group-hover:text-white transition-colors">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t.text}</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-[var(--accent)]/30 pointer-events-none transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
