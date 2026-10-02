"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, navCta, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="leading-none">
          <span className="block text-2xl font-semibold tracking-wider">{site.name}</span>
          <span className="block text-[8px] uppercase tracking-[0.3em] text-white/60">{site.tagline}</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
               className={`relative py-5 text-xs transition hover:text-white ${active === n.href ? "text-white" : "text-white/70"}`}>
              {n.label}
              {active === n.href && <span className="absolute inset-x-0 bottom-3 h-px bg-[var(--accent)]" />}
            </a>
          ))}
        </nav>
        <a href={navCta.href} className="hidden items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs transition hover:border-[var(--accent)] md:inline-flex">
          {navCta.label} <ArrowRight size={13} />
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-black/95 px-6 pb-6 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm">{n.label}</a>
          ))}
          <a href={navCta.href} className="btn-outline mt-5">{navCta.label} <ArrowRight size={14} /></a>
        </nav>
      )}
    </header>
  );
}
