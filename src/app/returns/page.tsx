import type { Metadata } from "next";
import { returns } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy",
  description: returns.intro,
  alternates: { canonical: "/returns" },
};

export default function Page() {
  return <LegalPage doc={returns} />;
}
