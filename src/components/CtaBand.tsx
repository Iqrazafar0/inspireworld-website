import Link from "next/link";
import { enquiryHref, links, company } from "@/content/site";
import { Icon } from "./Icon";

export function CtaBand({ title = "Ready to stock up for the next season?" }: { title?: string }) {
  return (
    <section className="cta-band" aria-label="Request a quotation">
      <div className="container cta-band__inner reveal">
        <h2>{title}</h2>
        <div className="cta-band__actions">
          <Link href={enquiryHref} className="btn btn--light">
            Request a quotation <Icon name="arrow" size={18} />
          </Link>
          <a href={links.whatsapp()} className="btn btn--ghost-light" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> {company.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
