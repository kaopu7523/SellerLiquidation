import { useLocale } from "next-intl";
import { Hero } from "@/components/home/Hero";
import { TrustBlock } from "@/components/home/TrustBlock";
import { PillarSection } from "@/components/home/PillarSection";
import { ScopeSourcing } from "@/components/home/ScopeSourcing";
import { CalculatorBanner } from "@/components/home/CalculatorBanner";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  const locale = useLocale();
  const home = getHomeContent(locale);

  return (
    <>
      <Hero />
      <TrustBlock />
      {home.pillars.map((pillar) => (
        <PillarSection key={pillar.id} pillar={pillar} />
      ))}
      <ScopeSourcing />
      <CalculatorBanner />
    </>
  );
}
