import Link from "next/link";
import type { LegalDoc, Block } from "@/content/legal";
import { policy } from "@/content/legal";
import { legalNav } from "@/content/site";
import { PageHero } from "./PageHero";

function renderBlock(b: Block, i: number) {
  if (typeof b === "string") return <p key={i}>{b}</p>;
  if ("list" in b)
    return (
      <ul key={i}>
        {b.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  return (
    <p key={i} className="legal__note" role="note">
      {b.note}
    </p>
  );
}

/** Shared layout for Terms, Privacy, Returns and Delivery pages. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow="Policies" crumb={doc.title} title={doc.title} intro={doc.intro} />
      <section className="section legal">
        <div className="container legal__grid">
          <aside className="legal__aside">
            <p className="legal__updated mono">Last updated: {policy.lastUpdated}</p>
            <nav aria-label="On this page" className="legal__toc">
              <p className="legal__label">On this page</p>
              <ol>
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading.replace(/^\d+\.\s*/, "")}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <nav aria-label="Other policies" className="legal__others">
              <p className="legal__label">Policies</p>
              <ul>
                {legalNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} aria-current={n.href === `/${doc.slug}` ? "page" : undefined}>
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="legal__body">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`}>{s.heading}</h2>
                {s.blocks.map(renderBlock)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
