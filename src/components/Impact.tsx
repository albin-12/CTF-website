"use client";
import { motion } from "framer-motion";
import { impact } from "@/data/site";

export default function Impact() {
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
    <section className="rule py-16">
      <div className="wrap">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          {impact.eyebrow}
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impact.items.map((x) => (
            <motion.div key={x.title} variants={itemVariants} className="group">
              <h3 className="text-2xl font-light text-white group-hover:text-[var(--accent)] transition-colors duration-300">{x.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{x.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
