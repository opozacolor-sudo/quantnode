import type { Metadata } from "next";
import { HistoryContent } from "@/components/HistoryContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Historique des transactions — AlgorithmNode",
  description: "Calendrier d’exécution algorithmique de 2021 à aujourd’hui, sur Binance, XTB et Plus500.",
};

export default function HistoryPage() {
  return (
    <SiteShell>
      <HistoryContent />
    </SiteShell>
  );
}
