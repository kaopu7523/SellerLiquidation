import { useLocale } from "next-intl";
import type { Metadata } from "next";

const EMAIL = "contact@sellerliquidation.site";

const copy = {
  en: {
    title: "Contact",
    metaDescription: "Get in touch with SellerLiquidation.",
    intro:
      "Have a correction, a question about a page, or something we got wrong? Email us and we'll get back to you.",
    cta: "Email us",
  },
  zh: {
    title: "联系我们",
    metaDescription: "联系 SellerLiquidation。",
    intro: "发现内容有错误、对某篇文章有疑问,或者有别的想跟我们说的?给我们发邮件,我们会回复。",
    cta: "发邮件给我们",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === "zh" ? copy.zh : copy.en;
  return { title: t.title, description: t.metaDescription };
}

export default function ContactPage() {
  const locale = useLocale();
  const t = locale === "zh" ? copy.zh : copy.en;

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{t.title}</h1>
      <p className="mt-4 text-ink-muted">{t.intro}</p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-cream hover:bg-accent-hover"
      >
        {t.cta}: {EMAIL}
      </a>
    </div>
  );
}
