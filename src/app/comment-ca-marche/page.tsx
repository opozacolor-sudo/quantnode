import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/HowItWorksContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Comment ça marche — AlgorithmNode",
  description:
    "Bots de trading automatisé sur Binance, XTB et Plus500, sur données de marché à la microseconde, avec tableau de bord et retrait sous 24 heures.",
};

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <HowItWorksContent />
    </SiteShell>
  );
}
