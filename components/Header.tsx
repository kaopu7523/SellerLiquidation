import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  const t = useTranslations("nav");

  const navItems = [
    { href: "/storage-fees", label: t("storageFees") },
    { href: "/clearing-methods", label: t("clearingMethods") },
    { href: "/channels", label: t("channels") },
    { href: "/about", label: t("about") },
  ];

  return (
    <header className="relative bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-cream">
            SL
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            SellerLiquidation
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
