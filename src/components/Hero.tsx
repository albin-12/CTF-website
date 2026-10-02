import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero } from "@/data/site";
import Lines from "./Lines";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover object-[75%_center] lg:object-right" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent lg:via-black/20" />
      <div className="wrap relative">
        <div className="hero-in max-w-xl">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="h1 mt-6"><Lines lines={hero.title} /></h1>
          <p className="lead mt-8 text-white/80">{hero.body}</p>
          <a href={hero.cta.href} className="mt-10 inline-flex items-center gap-4 text-sm">
            <span className="btn-circle"><ArrowRight size={18} /></span> {hero.cta.label}
          </a>
        </div>
      </div>
      <div className="wrap absolute inset-x-0 bottom-8 hidden items-end justify-between lg:flex">
        <p className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/60">
          <span>01</span><span className="h-px w-14 bg-white/40" /><span>Scroll to explore</span>
        </p>
     <p className="absolute right-8 bottom-36 hidden lg:block text-[11px] uppercase leading-5 tracking-[0.25em] text-white/70">
  {hero.side.map((s) => <span key={s} className="block">{s}</span>)}
</p>
      </div>
    </section>
  );
}
