import { company, links, addressLines } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { Icon } from "./Icon";

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead id="contact-title" index="06" eyebrow="Contact" title="Visit or call our Al Garhoud office." />
        <div className="contact__grid">
          <address className="contact__card reveal">
            <p className="contact__label">
              <Icon name="pin" size={18} /> Office
            </p>
            <p className="contact__company">{company.legalName}</p>
            <p>
              {addressLines.map((l) => (
                <span key={l} className="contact__line">
                  {l}
                </span>
              ))}
            </p>
            <a href={links.map} target="_blank" rel="noopener noreferrer" className="text-link">
              Open in Google Maps <Icon name="arrowUpRight" size={16} />
            </a>
          </address>

          <div className="contact__card reveal">
            <p className="contact__label">
              <Icon name="phone" size={18} /> Phone & WhatsApp
            </p>
            <a href={links.tel} className="contact__big">
              {company.phoneDisplay}
            </a>
            <p className="contact__muted">Within the UAE: {company.phoneLocal}</p>
            <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer" className="text-link">
              Message on WhatsApp <Icon name="arrowUpRight" size={16} />
            </a>
          </div>

          <div className="contact__card reveal">
            <p className="contact__label">
              <Icon name="mail" size={18} /> Email
            </p>
            <a href={links.mail} className="contact__big contact__email">
              {company.email}
            </a>
            <p className="contact__muted">
              {company.owner}, {company.ownerRole}
            </p>
            <a href="#enquiry" className="text-link">
              Or use the enquiry form <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
