import { audiences } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Supply() {
  return (
    <section id="supply" className="section supply" aria-labelledby="supply-title">
      <div className="container supply__grid">
        <SectionHead
          id="supply-title"
          index="04"
          eyebrow="Who we supply"
          title="Trade buyers, in the UAE and beyond."
          intro="We sell business to business. If you buy for a shop, a distribution network, a hotel or a corporate programme, we would like to hear from you."
        />
        <ul className="supply__list">
          {audiences.map((a, i) => (
            <li key={a.title} className="reveal">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
