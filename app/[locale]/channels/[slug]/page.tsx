import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, getArticleSlugs } from "@/lib/articles";
import { ArticlePage } from "@/components/ArticlePage";

const CATEGORY = "channels" as const;

export function generateStaticParams() {
  return getArticleSlugs("en", CATEGORY).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!getArticleSlugs(locale, CATEGORY).includes(slug)) return {};
  const { frontmatter } = getArticle(locale, CATEGORY, slug);
  return { title: frontmatter.title, description: frontmatter.description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!getArticleSlugs(locale, CATEGORY).includes(slug)) notFound();
  const { frontmatter, content } = getArticle(locale, CATEGORY, slug);
  return (
    <ArticlePage
      frontmatter={frontmatter}
      content={content}
      category={CATEGORY}
      slug={slug}
      locale={locale}
    />
  );
}
