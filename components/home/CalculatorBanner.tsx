import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getHomeContent } from "@/lib/content";

export function CalculatorBanner() {
  const locale = useLocale();
  const { calculatorBanner } = getHomeContent(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-accent px-6 py-6 text-cream">
          <p className="max-w-2xl font-medium">{calculatorBanner.text}</p>
          <Link
            href={calculatorBanner.href}
            className="shrink-0 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-accent hover:bg-white"
          >
            {calculatorBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
