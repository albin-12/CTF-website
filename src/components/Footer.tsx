"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { footer, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="rule py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="wrap grid gap-10 lg:grid-cols-[1fr_2fr_1fr]"
      >
        <div>
          <Image
            src="/images/LOGO.png"
            alt="CTF Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain mb-2"
          />
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-8 gap-y-3 text-xs text-white/70">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[var(--accent)] transition-colors duration-200">{l.label}</a>
          ))}
        </nav>
        <div className="space-y-3 text-xs text-white/70 lg:text-right">
          <p className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-[var(--accent)] transition-colors duration-200">{s.label}</a>
            ))}
          </p>
          <p>{site.location}</p>
          <p>{footer.note}</p>
        </div>
      </motion.div>
      <p className="wrap mt-12 text-xs text-white/50">© {site.year} {site.name}. All rights reserved.</p>
    </footer>
  );
}