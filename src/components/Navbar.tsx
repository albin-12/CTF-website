"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, navCta } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-white/10 bg-black/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : "border-white/5 bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="leading-none flex items-center group">
          <Image 
            src="/images/LOGO.png" 
            alt="CTF Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            priority
          />
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
               className={`relative py-5 text-xs transition-colors duration-300 hover:text-white ${active === n.href ? "text-white" : "text-white/70"}`}>
              {n.label}
              {active === n.href && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-0 bottom-3 h-[2px] bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
        <a href={navCta.href} className="hidden items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] md:inline-flex">
          {navCta.label} <ArrowRight size={13} />
        </a>
        <button className="md:hidden text-white/80 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-black/95 px-6 pb-6 md:hidden"
            aria-label="Mobile"
          >
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm hover:text-[var(--accent)] transition-colors">{n.label}</a>
            ))}
            <a href={navCta.href} onClick={() => setOpen(false)} className="btn-outline mt-5 w-full justify-center">{navCta.label} <ArrowRight size={14} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}