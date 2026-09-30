import { company } from "@/content/site";

/** Arch (Gulf architecture) framing a globe's meridians: "Inspire World", traded from Dubai. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="logo-mark">
      <path d="M9 34V18a11 11 0 0 1 22 0v16" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 7.5c-4.6 5.4-4.6 21.2 0 26.5M20 7.5c4.6 5.4 4.6 21.2 0 26.5M9 22h22" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <path d="M5 34h30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`logo logo--${tone}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">{company.shortName}</span>
        <span className="logo__sub">Readymade Garments Trading</span>
      </span>
    </span>
  );
}
