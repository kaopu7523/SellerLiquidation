import { home as homeEn } from "@/content/en/home";
import { home as homeZh } from "@/content/zh/home";

export function getHomeContent(locale: string) {
  return locale === "zh" ? homeZh : homeEn;
}
