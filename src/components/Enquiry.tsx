import { company, links } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { EnquiryForm } from "./EnquiryForm";
import { Icon } from "./Icon";

export function Enquiry() {
  return (
    <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-title">
      <div className="container enquiry__grid">
        <div className="enquiry__intro">
          <SectionHead
            id="enquiry-title"
            index="05"
            eyebrow="Request a quotation"
            title="Tell us what you need."
            intro="Share the product line, quantity and destination. We reply with pricing, availability and lead time."
          />
          <ul className="enquiry__points reveal">
            <li>
              <Icon name="check" size={18} /> One quotation can cover several product lines
            </li>
            <li>
              <Icon name="check" size={18} /> Prices quoted in AED, with UAE VAT shown where it applies
            </li>
            <li>
              <Icon name="check" size={18} /> Delivery in the UAE or handover to your freight forwarder
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
