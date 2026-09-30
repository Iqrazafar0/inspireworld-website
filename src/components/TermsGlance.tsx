import Link from "next/link";
import { termsAtGlance } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { Icon } from "./Icon";

export function TermsGlance() {
  return (
    <section className="section glance" aria-labelledby="glance-title">
      <div className="container">
        <div className="glance__top">
          <SectionHead
            id="glance-title"
            eyebrow="Trade terms"
            title="Clear terms on every order."
            intro="Our customers deal with banks, auditors and the tax authority. So every sale is documented the same way, and our terms are written down in full."
          />
          <Link href="/terms" className="btn btn--outline reveal">
            Read the full terms <Icon name="arrow" size={18} />
          </Link>
        </div>
        <ul className="glance__grid">
          {termsAtGlance.map((t) => (
            <li key={t.title} className="reveal">
              <Icon name="check" size={20} />
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
