import { audiences } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Supply() {
  return (
    <section className="section supply" aria-labelledby="supply-title">
      <div className="container supply__grid">
        <SectionHead
          id="supply-title"
          eyebrow="Who we supply"
          title="Merchants and trade buyers in Dubai."
          intro="We sell business to business. If you buy for a shop, a wholesale business, a school or a corporate programme, we would like to hear from you."
        />
        <ul className="supply__list">
          {audiences.map((a) => (
            <li key={a.title} className="reveal">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
