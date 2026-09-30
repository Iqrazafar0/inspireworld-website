import Image from "next/image";
import { about, company, commitments } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function AboutStory() {
  const facts = [
    { k: "Company", v: company.legalName },
    { k: "Established", v: `${company.established}, Dubai` },
    { k: "Owner", v: `${company.owner}, ${company.ownerRole}` },
  ];

  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <figure className="about__media reveal">
          <div className="about__image">
            <Image src="/images/dubai-creek.webp" alt="Traditional wooden dhows moored on Dubai Creek with Deira behind" fill sizes="(min-width: 1024px) 46vw, 92vw" className="cover" />
          </div>
          <figcaption>{about.imageCaption}</figcaption>
        </figure>

        <div className="about__copy">
          <SectionHead id="about-title" eyebrow="Our story" title={about.title} />
          <div className="prose reveal">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="facts reveal">
            {facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Commitments() {
  return (
    <section className="section commitments" aria-labelledby="commit-title">
      <div className="container commitments__grid">
        <div>
          <SectionHead
            id="commit-title"
            eyebrow="How we do business"
            title="Straightforward, documented, compliant."
          />
          <figure className="commitments__image reveal">
            <Image src="/images/warehouse.webp" alt="Cartons and packing materials stacked on pallets, ready for dispatch" fill sizes="(min-width: 1024px) 40vw, 92vw" className="cover" />
          </figure>
        </div>
        <ul className="commitments__list">
          {commitments.map((c) => (
            <li key={c.title} className="reveal">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
