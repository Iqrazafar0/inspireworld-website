import type { Metadata } from "next";
import { terms } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: terms.intro,
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <LegalPage doc={terms} />;
}
