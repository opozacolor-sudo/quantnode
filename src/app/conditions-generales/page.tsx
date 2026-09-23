import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation — AlgorithmNode",
  description:
    "Conditions générales du service AlgorithmNode : accès, exécution algorithmique, risques, responsabilité et droit applicable.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <TermsContent />
    </SiteShell>
  );
}
