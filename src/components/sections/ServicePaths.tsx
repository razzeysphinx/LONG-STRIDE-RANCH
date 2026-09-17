import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicePaths() {
  const [training, boarding, sales] = services;
  return (
    <section className="ls-section">
      <div className="ls-container">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <Link
            href={training.href}
            className="group relative min-h-[620px] overflow-hidden rounded-[24px] text-white"
          >
            <Image
              src={training.image}
              alt={training.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="image-treatment premium-hover-image object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(8,17,12,.82))]" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="ls-eyebrow text-white/65">{training.eyebrow}</p>
              <h3 className="ls-display text-6xl">{training.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                {training.copy}
              </p>
              <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[.11em]">
                Explore training →
              </span>
            </div>
          </Link>
          <div className="grid gap-4">
            <Link
              href={boarding.href}
              className="group grid overflow-hidden rounded-[24px] bg-[var(--ls-cream)] sm:grid-cols-[.82fr_1.18fr]"
            >
              <div className="relative min-h-[330px]">
                <Image
                  src={boarding.image}
                  alt={boarding.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="image-treatment premium-hover-image object-cover"
                />
              </div>
              <div className="flex flex-col justify-end p-7">
                <p className="ls-eyebrow">{boarding.eyebrow}</p>
                <h3 className="ls-display text-5xl">{boarding.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ls-muted)]">
                  {boarding.copy}
                </p>
                <span className="mt-6 text-[11px] font-bold uppercase tracking-[.11em]">
                  Explore boarding →
                </span>
              </div>
            </Link>
            <Link
              href={sales.href}
              className="group grid overflow-hidden rounded-[24px] bg-[var(--ls-forest)] text-[var(--ls-cream)] sm:grid-cols-[1.18fr_.82fr]"
            >
              <div className="flex flex-col justify-end p-7">
                <p className="ls-eyebrow text-white/65">{sales.eyebrow}</p>
                <h3 className="ls-display text-5xl">{sales.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {sales.copy}
                </p>
                <span className="mt-6 text-[11px] font-bold uppercase tracking-[.11em]">
                  View available horses →
                </span>
              </div>
              <div className="relative min-h-[330px]">
                <Image
                  src={sales.image}
                  alt={sales.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="image-treatment premium-hover-image object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
