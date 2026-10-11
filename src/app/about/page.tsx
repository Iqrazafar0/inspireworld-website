import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutStory, Commitments } from "@/components/About";
import { Supply } from "@/components/Supply";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About us",
  description: "Inspire World Readymade Garments Trading L.L.C. is a Dubai trading company in Al Garhoud supplying merchants with bags, luggage, gifts and garments.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About us" title="Wholesale supply, done properly." intro="Who we are, what we trade and how we work with merchants in Dubai." />
      <AboutStory />
      <Commitments />
      <Supply />
      <CtaBand />
    </>
  );
}
