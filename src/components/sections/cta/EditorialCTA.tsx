import Link from "next/link";
import type { ReactNode } from "react";

type EditorialCTAProps = {
  eyebrow: string;
  title: string;
  href: string;
  label: string;
  children?: ReactNode;
};

export function EditorialCTA({
  eyebrow,
  title,
  href,
  label,
  children,
}: EditorialCTAProps) {
  return (
    <section className="py-24 md:py-36">
      <div className="ls-container grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div>
          <p className="ls-eyebrow">{eyebrow}</p>
          <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
            {title}
          </h2>
          {children && (
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              {children}
            </p>
          )}
        </div>
        <div className="lg:text-right">
          <Link
            href={href}
            className="inline-flex items-center border-b border-current pb-1 text-[12px] font-bold uppercase tracking-[.12em] transition-opacity hover:opacity-75"
          >
            {label} &nbsp;→
          </Link>
        </div>
      </div>
    </section>
  );
}
