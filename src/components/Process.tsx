import { process } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Process() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          eyebrow="How an order works"
          title="From first message to signed delivery note."
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
      </div>
    </section>
  );
}
