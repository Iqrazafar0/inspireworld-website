import Image from "next/image";
import { hero, enquiryHref, links, lines, company } from "@/content/site";
import { Icon } from "./Icon";

const [lead, second, third] = [lines[0], lines[4], lines[7]]; // garments · handbags · oud

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__sub">{hero.subtitle}</p>
          <div className="hero__actions">
            <a href={enquiryHref} className="btn btn--primary">
              Request a quotation <Icon name="arrow" size={18} />
            </a>
            <a href={links.whatsapp(`Hello ${company.shortName}, I'd like to enquire about your products.`)} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="A selection of our product lines">
          <figure className="hero__main">
            <Image src={lead.image} alt={lead.alt} fill priority sizes="(min-width: 1024px) 34vw, 70vw" className="cover" />
            <figcaption className="tag">
              <span className="mono">01</span> {lead.name}
            </figcaption>
          </figure>
          <figure className="hero__side hero__side--a">
            <Image src={second.image} alt={second.alt} fill priority sizes="(min-width: 1024px) 18vw, 40vw" className="cover" />
            <figcaption className="tag tag--sm">
              <span className="mono">05</span> Leather
            </figcaption>
          </figure>
          <figure className="hero__side hero__side--b">
            <Image src={third.image} alt={third.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="cover" />
            <figcaption className="tag tag--sm">
              <span className="mono">08</span> Oud
            </figcaption>
          </figure>
          <p className="hero__stamp" aria-hidden="true">
            <span>Est.</span>
            <strong>{company.established}</strong>
            <span>Dubai</span>
          </p>
        </div>
      </div>
    </section>
  );
}
