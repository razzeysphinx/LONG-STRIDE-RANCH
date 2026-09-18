import Link from "next/link";
import { HorseMedia } from "@/components/media/HorseMedia";
import { media } from "@/data/media";

export function TeamFeature() {
  return (
    <section className="py-28 md:py-40">
      <div className="ls-container grid gap-4 lg:grid-cols-12">
        <HorseMedia
          {...media.danielleRiding}
          ratio="portrait"
          focalDesktop={media.danielleRiding.focal.desktop}
          focalMobile={media.danielleRiding.focal.mobile}
          className="lg:col-span-5"
        />
        <div className="flex flex-col justify-between bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:p-12 lg:col-span-4">
          <div>
            <p className="ls-eyebrow text-white/55">The people</p>
            <h2 className="ls-display text-[var(--type-editorial)]">
              Experience feels personal here.
            </h2>
          </div>
          <div>
            <p className="max-w-md text-[15px] leading-7 text-white/68">
              Danielle and Sam Harrity bring horse knowledge, operational care
              and a thoughtful standard to the work around every client and
              horse.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
            >
              Meet Long Stride
            </Link>
          </div>
        </div>
        <HorseMedia
          {...media.samHorse}
          ratio="portrait"
          focalDesktop={media.samHorse.focal.desktop}
          focalMobile={media.samHorse.focal.mobile}
          className="lg:col-span-3 lg:mt-24"
        />
      </div>
    </section>
  );
}
