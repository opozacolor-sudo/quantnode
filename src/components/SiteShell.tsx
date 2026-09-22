import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { MarketsTicker } from "@/components/MarketsTicker";
import { Navbar } from "@/components/Navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col pb-20">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MarketsTicker />
    </div>
  );
}
