import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { finalCta } from "@/data/site";
import Lines from "./Lines";

export default function FinalCta() {
  return (
    <section className="rule relative overflow-hidden py-28 lg:py-40">
      <Image src={finalCta.image} alt="" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="wrap relative flex flex-wrap items-start justify-between gap-10">
        <div>
          <p className="eyebrow">{finalCta.eyebrow}</p>
          <h2 className="h1 mt-5"><Lines lines={finalCta.title} /></h2>
          <p className="mt-6 text-xl font-light text-white/90">{finalCta.lines}</p>
          <p className="lead mt-3 text-white/80">{finalCta.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={finalCta.cta.href} className="btn-outline bg-black/30">{finalCta.cta.label} <ArrowRight size={14} /></a>
            <a href={finalCta.cta2.href} className="btn-outline border-transparent bg-black/30">{finalCta.cta2.label}</a>
          </div>
        </div>
        <p className="hidden text-[11px] uppercase leading-6 tracking-[0.25em] text-white/80 lg:block">
          {finalCta.side.map((s) => <span key={s} className="block">{s}</span>)}
        </p>
      </div>
    </section>
  );
}
