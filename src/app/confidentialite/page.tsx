import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD) — AlgorithmNode",
  description:
    "Politique de confidentialité AlgorithmNode : traitements RGPD, bases légales, durées, destinataires, cookies et droits des personnes.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PrivacyContent />
    </SiteShell>
  );
}
