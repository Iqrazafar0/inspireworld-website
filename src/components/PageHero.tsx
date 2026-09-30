import Link from "next/link";

/** Heading band for inner pages, with a breadcrumb back to Home. */
export function PageHero({ eyebrow, title, intro, crumb }: { eyebrow: string; title: string; intro?: string; crumb: string }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow">
          <span className="eyebrow__rule" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 id="page-title">{title}</h1>
        {intro ? <p className="page-hero__intro">{intro}</p> : null}
      </div>
    </section>
  );
}
