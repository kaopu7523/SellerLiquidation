import { useLocale } from "next-intl";
import { HubPage } from "@/components/HubPage";
import { getHomeContent } from "@/lib/content";

export default function StorageFeesHub() {
  const locale = useLocale();
  const home = getHomeContent(locale);
  const pillar = home.pillars.find((p) => p.id === "storage-fees")!;
  return <HubPage pillar={pillar} />;
}
