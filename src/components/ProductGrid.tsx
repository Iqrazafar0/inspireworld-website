"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { groups, enquiryFor, type GroupId, type Line } from "@/content/site";
import { Icon } from "./Icon";

type Filter = "all" | GroupId;

/** Product-line cards. With `filters`, shows group filter buttons (Products page). */
export function ProductGrid({ items, filters = false }: { items: Line[]; filters?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((l) => l.group === filter);
  const usedGroups = groups.filter((g) => items.some((l) => l.group === g.id));

  return (
    <>
      {filters ? (
        <div className="filters reveal" role="group" aria-label="Filter product lines">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
            All <span className="mono">{items.length}</span>
          </button>
          {usedGroups.map((g) => (
            <button key={g.id} type="button" aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
              {g.label} <span className="mono">{items.filter((l) => l.group === g.id).length}</span>
            </button>
          ))}
        </div>
      ) : null}

      {filters ? (
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} of {items.length} product lines
        </p>
      ) : null}

      <ul className={`lines__grid${items.length === 4 ? " lines__grid--4" : ""}`}>
        {visible.map((line) => {
          const group = groups.find((g) => g.id === line.group)!;
          return (
            <li key={line.id} className="line-card reveal" id={`line-${line.id}`}>
              <div className="line-card__media">
                <Image src={line.image} alt={line.alt} fill sizes="(min-width: 1200px) 380px, (min-width: 700px) 45vw, 92vw" className="cover" />
                <span className="tag tag--sm">{group.label}</span>
              </div>
              <div className="line-card__body">
                <h3>{line.headline}</h3>
                <p className="line-card__licence">
                  Licensed activity: <span>{line.name}</span>
                </p>
                <p>{line.summary}</p>
                <ul className="line-card__examples" aria-label={`Typical ${line.headline.toLowerCase()} we supply`}>
                  {line.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <Link href={enquiryFor(line.id)} className="line-card__link">
                  Request a quotation <Icon name="arrow" size={16} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
