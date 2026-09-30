import Image from "next/image";
import { about, company } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function About() {
  const facts = [
    { k: "Company", v: company.legalName },
    { k: "Established", v: `${company.established}, Dubai` },
    { k: "Owner", v: `${company.owner}, ${company.ownerRole}` },
  ];

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <figure className="about__media reveal">
          <div className="about__image">
            <Image src="/images/dubai-creek.webp" alt="Traditional wooden dhows moored on Dubai Creek with Deira behind" fill sizes="(min-width: 1024px) 46vw, 92vw" className="cover" />
          </div>
          <figcaption>
            <span className="mono">25.27° N, 55.30° E</span> {about.imageCaption}
          </figcaption>
        </figure>

        <div className="about__copy">
          <SectionHead id="about-title" index="02" eyebrow="About us" title={about.title} />
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
