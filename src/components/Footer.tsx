import { footer, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="rule py-14">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr_1fr]">
        <div>
          <p className="text-3xl font-semibold tracking-wider">{site.name}</p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-8 gap-y-3 text-xs text-white/70">
          {footer.links.map((l) => <a key={l.label} href={l.href} className="hover:text-white">{l.label}</a>)}
        </nav>
        <div className="space-y-3 text-xs text-white/70 lg:text-right">
          <p className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            {footer.social.map((s) => <a key={s.label} href={s.href} className="hover:text-white">{s.label}</a>)}
          </p>
          <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
          <p>{site.location}</p>
          <p>{footer.note}</p>
        </div>
      </div>
      <p className="wrap mt-12 text-xs text-white/50">© {site.year} {site.name}. All rights reserved.</p>
    </footer>
  );
}
