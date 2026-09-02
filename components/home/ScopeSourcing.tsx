import { useLocale } from "next-intl";
import { getHomeContent } from "@/lib/content";

export function ScopeSourcing() {
  const locale = useLocale();
  const { scopeSourcing } = getHomeContent(locale);

  return (
    <section className="border-b border-border-soft bg-ink-2 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {scopeSourcing.label}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
          {scopeSourcing.title}
        </h2>
        <p className="mt-4 max-w-3xl text-cream/85">{scopeSourcing.body}</p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {scopeSourcing.sources.map((source) => (
            <li
              key={source}
              className="rounded-full border border-cream/25 px-4 py-2 text-sm text-cream/90"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
