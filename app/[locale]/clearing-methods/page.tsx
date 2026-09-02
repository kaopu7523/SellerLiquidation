import { useLocale } from "next-intl";
import { HubPage } from "@/components/HubPage";
import { getHomeContent } from "@/lib/content";

export default function ClearingMethodsHub() {
  const locale = useLocale();
  const home = getHomeContent(locale);
  const pillar = home.pillars.find((p) => p.id === "clearing-methods")!;
  return <HubPage pillar={pillar} />;
}
