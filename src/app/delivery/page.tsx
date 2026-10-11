import type { Metadata } from "next";
import { delivery } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delivery & Shipping Policy",
  description: delivery.intro,
  alternates: { canonical: "/delivery" },
};

export default function Page() {
  return <LegalPage doc={delivery} />;
}
