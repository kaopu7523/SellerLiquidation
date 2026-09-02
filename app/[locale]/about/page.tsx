import { useLocale } from "next-intl";
import type { Metadata } from "next";

const copy = {
  en: {
    title: "About SellerLiquidation",
    metaDescription:
      "SellerLiquidation is an independent guide for Amazon sellers dealing with excess, aged, or slow-moving FBA inventory.",
    paragraphs: [
      "SellerLiquidation is an independent guide for Amazon sellers dealing with excess, aged, or slow-moving FBA inventory. We explain how Amazon's storage fees, aged inventory surcharge, and IPI score actually work, compare your options for clearing stock — liquidation, disposal, donation — and show where liquidated inventory goes once it leaves Amazon's hands.",
      "This site is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. or its affiliates. We link back to Amazon's official Seller Central documentation wherever it exists — our goal is to make those rules usable, not to replace them.",
      "Our editorial approach: every page is built from Amazon's official help pages, seller forum reports, and other verifiable sources. We don't publish figures we can't trace back to a source, and where sources disagree or a behavior looks unstable, we say so instead of inventing a clean answer.",
    ],
  },
  zh: {
    title: "关于 SellerLiquidation",
    metaDescription:
      "SellerLiquidation 是一个独立的攻略站,写给正在处理亚马逊 FBA 滞销、超龄或积压库存的卖家。",
    paragraphs: [
      "SellerLiquidation 是一个独立的攻略站,写给正在处理亚马逊 FBA 滞销、超龄或积压库存的卖家。我们讲清楚亚马逊仓储费、超龄库存附加费、IPI 分数到底是怎么运作的,对比清算、处置、捐赠这几种清库存方式的差异,并说明库存被清算之后实际流向了哪里。",
      "本站与 Amazon.com, Inc. 及其关联公司没有任何隶属、认可或赞助关系。我们会在有对应官方文档的地方链接回亚马逊 Seller Central——我们的目标是让这些规则更好用,而不是取代它们。",
      "我们的编辑原则:每一篇内容都基于亚马逊官方帮助页面、卖家论坛真实反馈以及其他可核实的信源来撰写。没有查证到出处的数字我们不会写;当不同信源之间存在分歧、或某个现象本身还不稳定时,我们会如实说明,而不是编造一个看起来完美的答案。",
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

export default function AboutPage() {
  const locale = useLocale();
  const t = locale === "zh" ? copy.zh : copy.en;

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{t.title}</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink-muted">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
