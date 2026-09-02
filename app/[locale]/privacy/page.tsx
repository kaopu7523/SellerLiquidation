import { useLocale } from "next-intl";
import type { Metadata } from "next";

const copy = {
  en: {
    title: "Privacy Policy",
    metaDescription: "How SellerLiquidation handles data when you visit this site.",
    updated: "Last updated: September 2026",
    paragraphs: [
      "You don't need to create an account to read anything on this site — all guide content is publicly accessible.",
      "We don't collect personal information through this site beyond what you choose to share if you contact us directly. Our hosting provider may automatically log standard web server data (such as IP address, browser type, and pages visited) for security and performance purposes, as is standard for most websites.",
      "We do not sell personal data to third parties.",
      "If we launch features that require creating an account in the future, this policy will be updated to describe exactly what's collected and how it's used before that feature goes live.",
      "Questions about this policy can be sent through our Contact page.",
    ],
  },
  zh: {
    title: "隐私政策",
    metaDescription: "你访问 SellerLiquidation 时,我们如何处理相关数据。",
    updated: "最后更新:2026 年 9 月",
    paragraphs: [
      "阅读本站任何内容都不需要注册账号——所有攻略内容都是公开可访问的。",
      "除非你主动通过联系方式向我们提供信息,本站不会通过其他方式收集你的个人信息。我们的托管服务商可能会像大多数网站一样,出于安全和性能目的自动记录标准的服务器日志(例如 IP 地址、浏览器类型、访问的页面)。",
      "我们不会把个人数据出售给第三方。",
      "如果未来上线需要注册账号的功能,我们会在该功能正式上线之前更新本政策,说明具体会收集哪些信息、如何使用。",
      "对本政策有任何疑问,可以通过「联系我们」页面联系我们。",
    ],
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

export default function PrivacyPage() {
  const locale = useLocale();
  const t = locale === "zh" ? copy.zh : copy.en;

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{t.title}</h1>
      <p className="mt-2 text-sm text-ink-muted">{t.updated}</p>
      <div className="mt-6 flex flex-col gap-4 text-ink-muted">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
