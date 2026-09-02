"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-cream/25 p-1 text-xs font-semibold">
      {LOCALES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => router.replace(pathname, { locale: item.code })}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === item.code
              ? "bg-accent text-cream"
              : "text-cream/70 hover:text-cream"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
