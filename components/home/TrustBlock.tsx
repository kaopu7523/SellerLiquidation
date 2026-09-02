import { useLocale } from "next-intl";
import { getHomeContent } from "@/lib/content";

export function TrustBlock() {
  const locale = useLocale();
  const { trust } = getHomeContent(locale);

  return (
    <section className="border-b border-border-soft bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {trust.label1}
          </p>
          <p className="mt-3 text-ink-muted">{trust.body1}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {trust.label2}
          </p>
          <p className="mt-3 text-ink-muted">{trust.body2}</p>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-6 pb-8 text-sm text-ink-muted">
        {trust.byline}
      </p>
    </section>
  );
}
