import Link from "next/link";
import { company, links, addressLines } from "@/content/site";
import { Icon } from "./Icon";

export function ContactCards() {
  return (
    <section className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="sr-only">
          Contact details
        </h2>
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
            <Link href="/terms" className="text-link">
              Our trade terms <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
