"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { careers } from "@/data/site";
import Lines from "./Lines";

export default function Careers() {
  return (
    <section id="careers" className="rule py-20 lg:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">{careers.eyebrow}</p>
          <h2 className="h2 mt-5"><Lines lines={careers.title} /></h2>
          <p className="mt-6 text-lg text-white/90">{careers.lead}</p>
          <p className="lead mt-3">{careers.body}</p>
          <p className="mt-6 text-sm leading-6 text-white/70">
            {careers.values.map((v) => <span key={v} className="block">{v}</span>)}
          </p>
          <a href={careers.cta.href} className="btn-outline mt-8">{careers.cta.label} <ArrowRight size={14} /></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="eyebrow">{careers.rolesTitle}</h3>
          <ul className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {careers.roles.map((r) => (
              <li key={r}>
                <a
                  href={careers.cta.href}
                  className="group flex items-center justify-between py-4 text-sm transition-all duration-300 hover:text-[var(--accent)] hover:pl-2"
                >
                  <span>{r}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
