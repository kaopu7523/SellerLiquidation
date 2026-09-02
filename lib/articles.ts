import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleCategory = "storage-fees" | "clearing-methods" | "channels";

export type ArticleSource = { label: string; url: string };

export type ArticleFrontmatter = {
  keyword: string;
  title: string;
  description: string;
  quickAnswer: string;
  updated: string;
  sources: ArticleSource[];
};

function contentRoot(locale: string) {
  return path.join(process.cwd(), "content", locale);
}

export function getArticleSlugs(locale: string, category: ArticleCategory): string[] {
  const dir = path.join(contentRoot(locale), category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticle(locale: string, category: ArticleCategory, slug: string) {
  const filePath = path.join(contentRoot(locale), category, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ArticleFrontmatter, content };
}
