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
            <motion.div
              key={x.title}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]/40 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_8px_var(--accent)]" />
                <h3 className="text-2xl font-light text-white group-hover:text-[var(--accent)] transition-colors duration-300">{x.title}</h3>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{x.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
