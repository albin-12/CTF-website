import { impact } from "@/data/site";

export default function Impact() {
  return (
    <section className="rule py-16">
      <div className="wrap">
        <p className="eyebrow">{impact.eyebrow}</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impact.items.map((x) => (
            <div key={x.title}>
              <h3 className="text-2xl font-light">{x.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
