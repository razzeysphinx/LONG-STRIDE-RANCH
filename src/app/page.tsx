import Link from "next/link";
import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { CTA } from "@/components/sections/CTA";
import { HorseMoments } from "@/components/sections/HorseMoments";
import { HorsesTeaser } from "@/components/sections/HorsesTeaser";
import { SeasonalStory } from "@/components/sections/SeasonalStory";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { TeamFeature } from "@/components/sections/TeamFeature";
import { media } from "@/data/media";

export default function HomePage() {
  return (
    <main id="main">
      {/* 01 HORSE HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#102018] text-white">
        <FullBleedMedia
          {...media.heroJumping}
          focalDesktop={media.heroJumping.focal.desktop}
          focalMobile={media.heroJumping.focal.mobile}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,12,.24),rgba(8,17,12,.08)_38%,rgba(8,17,12,.8)),linear-gradient(90deg,rgba(8,17,12,.5),transparent_65%)]" />
        <div className="ls-container relative z-10 flex min-h-[100svh] items-end pb-12 pt-36 md:pb-16 md:pt-40">
          <div className="grid w-full items-end gap-8 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="ls-eyebrow">Wellington · Jackson Hole</p>
              <h1 className="ls-display max-w-5xl text-[var(--type-home-hero)]">
                Built for the <em className="font-normal">long stride.</em>
              </h1>
            </div>
            <div className="max-w-md text-[15px] leading-7 text-white/80">
              <p>
                Thoughtful horsemanship, quality horses and a personal standard
                of care.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
                  href="/horse-sales"
                >
                  View available horses
                </Link>
                <Link
                  className="rounded-full border border-white/45 px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
                  href="/about"
                >
                  Meet Long Stride
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 POSITIONING */}
      <section className="bg-[var(--ls-forest)] py-12 text-[var(--ls-cream)] md:py-14">
        <div className="ls-container grid gap-3 md:grid-cols-[.4fr_1fr_.8fr]">
          <p className="ls-eyebrow mb-0">Long Stride Ranch</p>
          <p className="font-display text-3xl leading-tight">
            Serious horsemanship, held to a personal standard.
          </p>
          <p className="text-sm text-white/70">
            A boutique English equestrian program for horses, riders and
            personal client relationships.
          </p>
        </div>
      </section>

      {/* 03 TRAINING / BOARDING / SALES */}
      <ServicePaths />

      {/* 04 MANUKA HONEY FEATURED HORSE */}
      <section className="relative min-h-[660px] overflow-hidden text-white">
        <FullBleedMedia
          {...media.manukaHoney}
          focalDesktop={media.manukaHoney.focal.desktop}
          focalMobile={media.manukaHoney.focal.mobile}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,20,13,.65),transparent_70%)]" />
        <div className="ls-container relative z-10 py-36">
          <p className="ls-eyebrow">Featured horse</p>
          <h2 className="ls-display max-w-3xl text-[clamp(4rem,7vw,7.5rem)]">
            Manuka Honey
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            A Children&apos;s Hunter Pony described by Long Stride as fancy,
            brave and kind.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              className="inline-flex rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
              href="/horse-sales/manuka-honey"
            >
              View horse
            </Link>
            <Link
              className="inline-flex rounded-full border border-white/40 px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
              href="/contact?interest=Horse%20Purchase&horse=Manuka%20Honey"
            >
              Ask about Manuka
            </Link>
          </div>
        </div>
      </section>

      {/* 05 HORSE MOMENTS */}
      <HorseMoments />

      {/* 06 HORSEMANSHIP */}
      <section className="bg-[var(--ls-cream)] py-28 md:py-40">
        <div className="ls-container grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <p className="ls-eyebrow">Horsemanship</p>
          <div>
            <h2 className="ls-display max-w-5xl text-[var(--type-editorial)]">
              The work nobody sees is often the work that matters most.
            </h2>
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[var(--ls-muted)]">
              Before the round, before the lesson and before the result, there
              is attention, repetition, care and trust.
            </p>
          </div>
        </div>
      </section>

      {/* 07 PEOPLE */}
      <TeamFeature />

      {/* 08 OUR HORSES */}
      <HorsesTeaser />

      {/* 09 SEASONAL STORY */}
      <SeasonalStory />

      {/* 10 INQUIRY */}
      <CTA eyebrow="Start a conversation" title="Tell us what you need.">
        Whether you are looking for a horse, training, boarding or a renewables
        conversation, we will help route you to the right next step.
      </CTA>

      {/* 11 RENEWABLES */}
      <section className="pb-20">
        <div className="ls-container border-t border-[var(--ls-line)] pt-7 md:flex md:items-start md:justify-between">
          <div>
            <p className="ls-eyebrow">Long Stride Ranch Renewables</p>
            <p className="max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
              A separate, practical conversation about stable waste and useful
              outputs.
            </p>
          </div>
          <Link
            href="/renewables"
            className="mt-5 inline-block text-[11px] font-bold uppercase tracking-[.11em] md:mt-0"
          >
            Explore renewables →
          </Link>
        </div>
      </section>
    </main>
  );
}
