"use client";

import Image from "next/image";
import { useState } from "react";
import { lines, groups, enquiryHref, type GroupId } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { Icon } from "./Icon";
import { SELECT_LINE_EVENT } from "@/lib/events";

type Filter = "all" | GroupId;


export function ProductLines() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? lines : lines.filter((l) => l.group === filter);

  const selectLine = (id: string) => {
    window.dispatchEvent(new CustomEvent(SELECT_LINE_EVENT, { detail: id }));
  };

  return (
    <section id="lines" className="section lines" aria-labelledby="lines-title">
      <div className="container">
        <div className="lines__top">
          <SectionHead
            id="lines-title"
            index="01"
            eyebrow="Product lines"
            title="Nine product lines, one trading partner."
            intro="Order from a single line, or combine several into one consignment with one quotation and one invoice."
          />
          <div className="filters reveal" role="group" aria-label="Filter product lines">
            <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
              All <span className="mono">{lines.length}</span>
            </button>
            {groups.map((g) => (
              <button key={g.id} type="button" aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
                {g.label} <span className="mono">{lines.filter((l) => l.group === g.id).length}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} of {lines.length} product lines
        </p>

        <ul className="lines__grid">
          {visible.map((line) => {
            const n = String(lines.indexOf(line) + 1).padStart(2, "0");
            const group = groups.find((g) => g.id === line.group)!;
            return (
              <li key={line.id} className="line-card reveal" id={`line-${line.id}`}>
                <div className="line-card__media">
                  <Image
                    src={line.image}
                    alt={line.alt}
                    fill
                    sizes="(min-width: 1200px) 380px, (min-width: 700px) 45vw, 92vw"
                    className="cover"
                  />
                  <span className="tag tag--sm">
                    <span className="mono">{n}</span> {group.label}
                  </span>
                </div>
                <div className="line-card__body">
                  <h3>{line.name}</h3>
                  <p>{line.summary}</p>
                  <ul className="line-card__examples" aria-label={`Typical ${line.name.toLowerCase()} we supply`}>
                    {line.examples.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <a href={enquiryHref} className="line-card__link" onClick={() => selectLine(line.id)}>
                    Enquire about {line.name.toLowerCase()} <Icon name="arrow" size={16} />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
