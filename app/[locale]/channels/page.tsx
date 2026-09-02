import { useLocale } from "next-intl";
import { HubPage } from "@/components/HubPage";
import { getHomeContent } from "@/lib/content";

export default function ChannelsHub() {
  const locale = useLocale();
  const home = getHomeContent(locale);
  const pillar = home.pillars.find((p) => p.id === "channels")!;
  return <HubPage pillar={pillar} />;
}
