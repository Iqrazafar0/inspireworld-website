import type { Metadata } from "next";
import { privacy } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalPage doc={privacy} />;
}
