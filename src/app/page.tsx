import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { HomeCards } from "@/components/HomeCards";
import { LivePrices } from "@/components/LivePrices";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <LivePrices />
      <HomeCards />
      <About />
    </SiteShell>
  );
}
