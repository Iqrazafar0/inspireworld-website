import type { Metadata } from "next";
import { lines } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description: "School bags, backpacks, trolley bags, luggage, gift sets, garments, textiles, footwear, oud and personal care: the nine product lines Inspire World supplies to Dubai merchants.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Product lines"
        title="Nine product lines, supplied wholesale."
        intro="Each line below matches an activity on our Dubai trade licence. Designs and stock change with the season, so ask for the current range and prices."
      />
      <section className="section lines lines--page" aria-label="All product lines">
        <div className="container">
          <ProductGrid items={lines} filters />
          <p className="lines__note reveal">
            Photos show the type of goods in each line, not specific stock. Exact designs, sizes, packing and prices are confirmed on your quotation.
          </p>
        </div>
      </section>
      <CtaBand title="Need a price list for the coming season?" />
    </>
  );
}
