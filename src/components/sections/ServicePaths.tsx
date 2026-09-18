import Link from "next/link";
import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { HorseMedia } from "@/components/media/HorseMedia";
import { media } from "@/data/media";
import { services } from "@/data/services";

export function ServicePaths() {
  const [training, boarding, sales] = services;
  return (
    <section className="ls-section">
      <div className="ls-container">
        <div className="mb-10 grid gap-7 lg:grid-cols-[.7fr_1.3fr]">
          <p className="ls-eyebrow">Program paths</p>
          <p className="max-w-xl text-[17px] leading-8 text-[var(--ls-muted)]">
            Different needs, one personal standard: every conversation begins
            with the horse and rider in front of us.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <Link
            href={training.href}
            className="group relative min-h-[620px] overflow-hidden text-white"
          >
            <FullBleedMedia
              {...media.danielleRiding}
              focalDesktop={media.danielleRiding.focal.desktop}
              focalMobile={media.danielleRiding.focal.mobile}
              sizes="(max-width: 1024px) 100vw, 55vw"
              imageClassName="premium-hover-image"
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
              className="group grid overflow-hidden bg-[var(--ls-cream)] sm:grid-cols-[.82fr_1.18fr]"
            >
              <HorseMedia
                {...media.horseCare}
                ratio="portrait"
                focalDesktop={media.horseCare.focal.desktop}
                focalMobile={media.horseCare.focal.mobile}
                sizes="(max-width: 640px) 100vw, 40vw"
                className="min-h-[330px]"
              />
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
              className="group grid overflow-hidden bg-[var(--ls-forest)] text-[var(--ls-cream)] sm:grid-cols-[1.18fr_.82fr]"
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
              <HorseMedia
                {...media.manukaHoney}
                ratio="portrait"
                focalDesktop={media.manukaHoney.focal.desktop}
                focalMobile={media.manukaHoney.focal.mobile}
                sizes="(max-width: 640px) 100vw, 40vw"
                className="min-h-[330px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
