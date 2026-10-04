"use client";
import { motion } from "framer-motion";
import { approach } from "@/data/site";
import Lines from "./Lines";

export default function Approach() {
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
    <section className="rule py-20 lg:py-24">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">{approach.eyebrow} — {approach.eyebrowSub}</p>
          <h2 className="h2 mt-5"><Lines lines={approach.title} /></h2>
          <p className="lead mt-5">{approach.body}</p>
        </motion.div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {approach.steps.map((s, n) => (
            <motion.li
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="group bg-[var(--bg)] p-6 transition-colors duration-300 hover:bg-[#0c0d10]"
            >
              <span className="text-xs text-[var(--accent)] font-mono font-semibold transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">0{n + 1}</span>
              <h3 className="mt-4 text-lg font-medium text-white group-hover:text-[var(--accent)] transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
