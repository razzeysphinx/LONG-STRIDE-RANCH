import Link from "next/link";
import { HorseMedia } from "@/components/media/HorseMedia";
import { media } from "@/data/media";

export function HorsesTeaser() {
  return (
    <section className="py-28 md:py-40">
      <div className="ls-container">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <p className="ls-eyebrow">Our Horses</p>
          <div>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              They are the reason for everything else.
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              Meet the horses, partnerships and everyday work behind Long
              Stride.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-12">
          <HorseMedia
            {...media.horsePortrait}
            ratio="portrait"
            focalDesktop={media.horsePortrait.focal.desktop}
            focalMobile={media.horsePortrait.focal.mobile}
            className="md:col-span-5"
          />
          <HorseMedia
            {...media.competition}
            ratio="action"
            focalDesktop={media.competition.focal.desktop}
            focalMobile={media.competition.focal.mobile}
            className="md:col-span-7 md:mt-20"
          />
        </div>
        <Link
          href="/horses"
          className="mt-8 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
        >
          Meet the Horses
        </Link>
      </div>
    </section>
  );
}
