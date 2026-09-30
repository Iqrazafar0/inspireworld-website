export function SectionHead({
  index,
  eyebrow,
  title,
  intro,
  id,
  tone = "dark",
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
  tone?: "dark" | "light";
}) {
  return (
    <header className={`section-head section-head--${tone} reveal`}>
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-head__intro">{intro}</p> : null}
    </header>
  );
}
