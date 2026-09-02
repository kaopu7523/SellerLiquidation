import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border-soft bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-muted">
        <p className="max-w-3xl">{t("disclaimer")}</p>
        <p className="mt-2 max-w-3xl">{t("updated")}</p>
        <nav className="mt-6 flex gap-6 font-medium text-ink">
          <Link href="/about" className="hover:text-accent">
            {t("about")}
          </Link>
          <Link href="/contact" className="hover:text-accent">
            {t("contact")}
          </Link>
          <Link href="/privacy" className="hover:text-accent">
            {t("privacy")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
