import { Link } from "@/i18n/navigation";
import type { home } from "@/content/en/home";

export function HubPage({ pillar }: { pillar: (typeof home)["pillars"][number] }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{pillar.title}</h1>
      <p className="mt-3 max-w-3xl text-ink-muted">{pillar.intro}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillar.cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="flex flex-col rounded-xl border border-border-soft bg-white p-5 transition-colors hover:border-accent"
          >
            <h2 className="font-display text-base font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
