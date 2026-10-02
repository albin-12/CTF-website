import { ArrowRight, Bot, BrainCircuit, Cog, Navigation, type LucideIcon } from "lucide-react";
import { technology } from "@/data/site";

const icons: Record<string, LucideIcon> = { Bot, BrainCircuit, Navigation, Cog };

export default function Technology() {
  return (
    <section id="technology" className="rule py-20">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{technology.eyebrow}</p>
            <h2 className="h2 mt-4">{technology.title}</h2>
            <p className="lead mt-4">{technology.body}</p>
          </div>
          <a href={technology.cta.href} className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[var(--accent)]">
            {technology.cta.label} <ArrowRight size={13} />
          </a>
        </div>
        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {technology.items.map((t) => {
            const Icon = icons[t.icon] ?? Bot;
            return (
              <div key={t.title} className="bg-[var(--bg)] p-7">
                <Icon className="text-[var(--accent)]" size={30} strokeWidth={1.2} />
                <h3 className="mt-6 text-lg font-medium">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
