import Link from "next/link";
export function CTA({
  eyebrow,
  title,
  children,
  href = "/contact",
  label = "Start an inquiry",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  label?: string;
}) {
  return (
    <section className="ls-section">
      <div className="ls-container">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:flex-row md:items-end md:p-14">
          <div>
            <p className="ls-eyebrow">{eyebrow}</p>
            <h2 className="ls-display max-w-3xl text-[clamp(3.3rem,5.6vw,6rem)]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {children}
            </p>
          </div>
          <Link
            className="rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
            href={href}
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
