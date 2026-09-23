import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact — AlgorithmNode",
  description:
    "Contact technique pour l’accès à la plateforme, l’intégration API et les questions sur les permissions et le risque.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactContent />
    </SiteShell>
  );
}
