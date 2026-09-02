import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { useTranslations } from "next-intl";
import type { ArticleCategory, ArticleFrontmatter } from "@/lib/articles";
import { mdxComponents } from "@/components/mdxComponents";
import { RelatedNav } from "@/components/RelatedNav";
import { getHomeContent } from "@/lib/content";

export function ArticlePage({
  frontmatter,
  content,
  category,
  slug,
  locale,
}: {
  frontmatter: ArticleFrontmatter;
  content: string;
  category: ArticleCategory;
  slug: string;
  locale: string;
}) {
  const t = useTranslations("article");
  const home = getHomeContent(locale);
  const pillar = home.pillars.find((p) => p.id === category);
  const currentHref = `/${category}/${slug}`;
  const relatedItems = pillar?.cards.filter((card) => card.href !== currentHref) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {frontmatter.keyword}
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            {frontmatter.title}
          </h1>

          <div className="mt-6 rounded-xl border border-border-soft bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t("quickAnswer")}
            </p>
            <p className="mt-2 text-ink">{frontmatter.quickAnswer}</p>
          </div>

          <div className="mt-2">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          <div className="mt-12 border-t border-border-soft pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              {t("sources")}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {frontmatter.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-muted">
              {t("updated")} {frontmatter.updated}
            </p>
          </div>
        </article>

        {pillar && (
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <RelatedNav title={pillar.title} items={relatedItems} hubHref={pillar.href} />
          </aside>
        )}
      </div>
    </div>
  );
}
