import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { home } from "@/content/en/home";

export function PillarSection({ pillar }: { pillar: (typeof home)["pillars"][number] }) {
  const t = useTranslations("common");

  return (
    <section className="border-b border-border-soft py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {pillar.title}
          </h2>
          <Link href={pillar.href} className="text-sm font-semibold text-accent hover:underline">
            {t("viewAll")}
          </Link>
        </div>
        <p className="mt-3 max-w-3xl text-ink-muted">{pillar.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillar.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="flex flex-col rounded-xl border border-border-soft bg-white p-5 transition-colors hover:border-accent"
            >
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gold/20 text-sm font-bold text-ink">
                →
              </span>
              <h3 className="font-display text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
