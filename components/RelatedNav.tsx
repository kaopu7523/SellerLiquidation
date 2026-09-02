import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { home } from "@/content/en/home";

export function RelatedNav({
  title,
  items,
  hubHref,
}: {
  title: string;
  items: (typeof home)["pillars"][number]["cards"];
  hubHref: string;
}) {
  const t = useTranslations("common");

  return (
    <div className="rounded-xl border border-border-soft bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
        {t("moreIn", { title })}
      </p>
      <ul className="mt-3 flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-accent"
            >
              <span>{item.title}</span>
              <span aria-hidden className="text-accent">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={hubHref}
        className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
      >
        {t("viewAll")}
      </Link>
    </div>
  );
}
