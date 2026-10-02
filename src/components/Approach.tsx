import { approach } from "@/data/site";
import Lines from "./Lines";

export default function Approach() {
  return (
    <section className="rule py-20 lg:py-24">
      <div className="wrap">
        <p className="eyebrow">{approach.eyebrow} — {approach.eyebrowSub}</p>
        <h2 className="h2 mt-5"><Lines lines={approach.title} /></h2>
        <p className="lead mt-5">{approach.body}</p>
        <ol className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
          {approach.steps.map((s, n) => (
            <li key={s.title} className="bg-[var(--bg)] p-6">
              <span className="text-xs text-[var(--accent)]">0{n + 1}</span>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
