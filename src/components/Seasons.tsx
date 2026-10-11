import { seasons } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Seasons() {
  return (
    <section className="section seasons" aria-labelledby="seasons-title">
      <div className="container">
        <SectionHead
          id="seasons-title"
          eyebrow="Plan ahead"
          tone="light"
          title="Stocked for Dubai's retail calendar."
          intro="Most of our range sells around four moments in the year. Order early to secure designs and quantities before each season."
        />
        <ol className="seasons__list">
          {seasons.map((s) => (
            <li key={s.title} className="reveal">
              <span className="seasons__when mono">{s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
