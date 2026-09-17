export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-12 grid gap-3 md:grid-cols-[minmax(150px,.45fr)_minmax(0,1.55fr)] md:gap-10">
      <p className="ls-eyebrow pt-2">{eyebrow}</p>
      <div>
        <h2 className="ls-display text-[clamp(3.3rem,6vw,6.8rem)]">{title}</h2>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--ls-muted)]">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
