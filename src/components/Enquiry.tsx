import { company, links } from "@/content/site";
import { EnquiryForm } from "./EnquiryForm";
import { Icon } from "./Icon";
import Link from "next/link";

export function Enquiry() {
  return (
    <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-title">
      <div className="container enquiry__grid">
        <div className="enquiry__intro">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span className="eyebrow__rule" aria-hidden="true" />
              Request a quotation
            </p>
            <h2 id="enquiry-title">Tell us what you need.</h2>
            <p className="section-head__intro">
              Share the product line, quantity and delivery location. We reply by email or WhatsApp with prices, availability and lead time.
            </p>
          </header>
          <ul className="enquiry__points reveal">
            <li>
              <Icon name="check" size={18} /> One quotation can cover several product lines
            </li>
            <li>
              <Icon name="check" size={18} /> Prices in AED, with VAT shown separately where it applies
            </li>
            <li>
              <Icon name="check" size={18} /> Orders are governed by our <Link href="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
          <div className="enquiry__direct reveal">
            <p>Prefer to talk?</p>
            <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> WhatsApp {company.phoneDisplay}
            </a>
            <a href={links.mail}>
              <Icon name="mail" size={18} /> {company.email}
            </a>
          </div>
        </div>
        <div className="enquiry__card reveal">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
