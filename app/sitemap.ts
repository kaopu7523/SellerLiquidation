import type { MetadataRoute } from "next";
import { getArticleSlugs, type ArticleCategory } from "@/lib/articles";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://sellerliquidation.site";
const CATEGORIES: ArticleCategory[] = ["storage-fees", "clearing-methods", "channels"];
const STATIC_PATHS = ["", "about", "contact", "privacy", "storage-fees", "clearing-methods", "channels"];

function localizedUrl(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const suffix = path ? `/${path}` : "";
  return `${BASE_URL}${prefix}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      entries.push({ url: localizedUrl(locale, path), lastModified });
    }

    for (const category of CATEGORIES) {
      for (const slug of getArticleSlugs(locale, category)) {
        entries.push({ url: localizedUrl(locale, `${category}/${slug}`), lastModified });
      }
    }
  }

  return entries;
}
