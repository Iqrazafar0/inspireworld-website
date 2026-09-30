import { process, enquiryHref } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { Icon } from "./Icon";

export function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          index="03"
          eyebrow="How we work"
          tone="light"
          title="From first message to handover, in four steps."
          intro="One contact handles your order across every line, so a mixed order of garments, footwear and oud is quoted, invoiced and packed together."
        />
        <ol className="process__list">
          {process.map((step, i) => (
            <li key={step.title} className="process__step reveal" style={{ "--i": i } as React.CSSProperties}>
              <span className="process__num mono">Step {String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="process__cta reveal">
          <a href={enquiryHref} className="btn btn--light">
            Start with step one <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
