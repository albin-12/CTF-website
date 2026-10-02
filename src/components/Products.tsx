"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import Lines from "./Lines";

export default function Products() {
  const [i, setI] = useState(0);
  const p = products.items[i];
  return (
    <section id="products" className="rule py-20 lg:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_2.3fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">{products.eyebrow}</p>
          <h2 className="h2 mt-5"><Lines lines={products.title} /></h2>
          <p className="lead mt-5">{products.body}</p>
          <a href={products.cta.href} className="mt-8 inline-flex items-center gap-4 text-sm">
            <span className="btn-circle"><ArrowRight size={18} /></span> {products.cta.label}
          </a>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-[var(--line)] bg-[#0b0f12]">
          <Image key={p.id} src={p.image} alt={p.name} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover object-[80%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f12] via-[#0b0f12]/80 to-transparent sm:via-[#0b0f12]/50" />
          <div className="relative flex h-full min-h-[420px] max-w-xs flex-col justify-center p-7 sm:p-10">
            <h3 className="text-3xl font-light">{p.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/70">{p.type}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{p.text}</p>
            <ul className="mt-5 space-y-1.5 text-xs text-white/80">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a href={p.href} className="mt-6 inline-flex items-center gap-2 text-xs text-[var(--accent)]">Explore {p.short} <ArrowRight size={13} /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1" role="tablist" aria-label="Products">
          {products.items.map((x, n) => (
            <button key={x.id} role="tab" aria-selected={n === i} onClick={() => setI(n)}
              className={`relative flex items-center gap-3 overflow-hidden rounded-lg border p-2 text-left transition ${n === i ? "border-[var(--accent)]/60 bg-white/5" : "border-[var(--line)] hover:border-white/30"}`}>
              <Image src={x.thumb} alt="" width={72} height={56} className="h-14 w-[72px] shrink-0 rounded object-cover" />
              <span className="text-xs"><b className="block font-medium">{x.short}</b><span className="text-white/60">{x.shortType}</span></span>
              {n === i && <span className="absolute inset-y-0 right-0 w-0.5 bg-[var(--accent)]" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
