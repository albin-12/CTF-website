import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/data/site";
import Lines from "./Lines";

export default function About() {
  return (
    <section id="about" className="rule relative overflow-hidden py-24 lg:py-32">
      <Image src={about.image} alt="" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="wrap relative grid gap-12 lg:grid-cols-[1.1fr_1fr_0.5fr]">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h2 mt-5"><Lines lines={about.title} /></h2>
          <div className="mt-6 space-y-4">{about.body.map((p) => <p key={p} className="lead">{p}</p>)}</div>
          <a href={about.cta.href} className="btn-outline mt-8">{about.cta.label} <ArrowRight size={14} /></a>
        </div>
        <div className="hidden lg:block" />
        <div className="flex flex-col justify-between gap-12 lg:items-end lg:text-right">
          <p className="text-[11px] uppercase leading-6 tracking-[0.25em] text-white/70">
            {about.side.map((s) => <span key={s} className="block">{s}</span>)}
          </p>
          <p className="border-l border-[var(--accent)] pl-4 text-[11px] uppercase tracking-[0.25em] text-white/80 lg:text-left">{about.badge}</p>
        </div>
      </div>
    </section>
  );
}
