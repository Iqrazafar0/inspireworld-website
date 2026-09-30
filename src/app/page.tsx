import type { Metadata } from "next";
import Link from "next/link";
import { lines } from "@/content/site";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { ProductGrid } from "@/components/ProductGrid";
import { Seasons } from "@/components/Seasons";
import { TermsGlance } from "@/components/TermsGlance";
import { Process } from "@/components/Process";
import { Supply } from "@/components/Supply";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const featured = lines.filter((l) => l.featured);
  return (
    <>
      <Hero />
      <section className="section lines" aria-labelledby="lines-title">
        <div className="container">
          <div className="lines__top">
            <SectionHead
              id="lines-title"
              eyebrow="Main product lines"
              title="What merchants order from us most."
              intro="School and travel bags, gifts and garments make up most of our orders. Five more licensed lines are available on request."
            />
            <Link href="/products" className="btn btn--outline reveal">
              All {lines.length} product lines <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ProductGrid items={featured} />
        </div>
      </section>
      <Seasons />
      <TermsGlance />
      <Process />
      <Supply />
      <CtaBand />
    </>
  );
}
