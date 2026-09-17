import type { ReactNode } from "react";
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-[var(--ls-cream)] pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="ls-container grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="ls-eyebrow">{eyebrow}</p>
          <h1 className="ls-display max-w-4xl text-[clamp(4rem,8.2vw,8.6rem)]">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
          {children}
        </p>
      </div>
    </section>
  );
}
