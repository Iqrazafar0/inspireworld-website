import Image from "next/image";
import Link from "next/link";
import { hero, enquiryHref, links, lines, company } from "@/content/site";
import { Icon } from "./Icon";

const byId = (id: string) => lines.find((l) => l.id === id)!;
const main = byId("handbags-leather");
const sideA = byId("suitcases-travel");
const sideB = byId("gifts");

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
            <Link href={enquiryHref} className="btn btn--primary">
              Request a quotation <Icon name="arrow" size={18} />
            </Link>
            <Link href="/products" className="btn btn--outline">
              View product lines
            </Link>
          </div>
          <p className="hero__contact">
            <a href={links.whatsapp(`Hello ${company.shortName}, I'd like to enquire about your products.`)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={16} /> WhatsApp {company.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="hero__visual" aria-label="A selection of our product lines">
          <figure className="hero__main">
            <Image src="/images/backpacks.webp" alt="Pale grey backpack and pencil case on a white table" fill priority sizes="(min-width: 1024px) 34vw, 70vw" className="cover" />
            <figcaption className="tag">{main.headline}</figcaption>
          </figure>
          <figure className="hero__side hero__side--a">
            <Image src={sideA.image} alt={sideA.alt} fill priority sizes="(min-width: 1024px) 18vw, 40vw" className="cover" />
            <figcaption className="tag tag--sm">Trolley & travel</figcaption>
          </figure>
          <figure className="hero__side hero__side--b">
            <Image src={sideB.image} alt={sideB.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="cover" />
            <figcaption className="tag tag--sm">Gifts</figcaption>
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
