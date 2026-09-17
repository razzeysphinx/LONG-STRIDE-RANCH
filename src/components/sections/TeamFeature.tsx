import Image from "next/image";
import Link from "next/link";

export function TeamFeature() {
  return (
    <section className="ls-section">
      <div className="ls-container grid gap-4 md:grid-cols-[1.1fr_.9fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/team/sam-harrity.webp"
            alt="Sam Harrity with a horse at Long Stride Ranch"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="image-treatment object-cover"
          />
        </div>
        <div className="flex flex-col justify-between rounded-[24px] bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:p-12">
          <div>
            <p className="ls-eyebrow text-white/60">The people</p>
            <h2 className="ls-display text-[clamp(3.8rem,5.5vw,6rem)]">
              Experience feels personal here.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-7 text-white/70">
              Danielle and Sam Harrity bring horse knowledge, operational care
              and a thoughtful standard to the work around each client and
              horse.
            </p>
            <Link
              className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
              href="/about"
            >
              Meet Long Stride
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
