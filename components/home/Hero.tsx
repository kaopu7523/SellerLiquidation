import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getHomeContent } from "@/lib/content";

export function Hero() {
  const locale = useLocale();
  const { hero } = getHomeContent(locale);

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <Image
        src="/hero-banner.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">{hero.subhead}</p>
        </div>

        <div className="rounded-2xl bg-cream p-5 text-ink shadow-xl">
          <p className="mb-4 font-display text-lg font-semibold">
            {hero.diagnosticIntro}
          </p>
          <ul className="flex flex-col gap-2">
            {hero.diagnostics.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border-soft bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <span>{item.label}</span>
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
