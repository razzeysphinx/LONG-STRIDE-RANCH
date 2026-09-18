import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { HorseMedia } from "@/components/media/HorseMedia";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Horses",
  description: "Meet the horses and partnerships behind Long Stride Ranch.",
  path: "/horses",
  image: media.horsePortrait.src,
});

export default function HorsesPage() {
  return (
    <main id="main">
      {/* 01 HERO */}
      <PageHero
        eyebrow="Our Horses"
        title="They are the reason for everything else."
        image={{
          ...media.horsePortrait,
          focalDesktop: media.horsePortrait.focal.desktop,
          focalMobile: media.horsePortrait.focal.mobile,
        }}
      >
        A visual introduction to the horses in the program, the rider
        partnerships and the work that happens in and out of the show ring.
      </PageHero>

      {/* 02 THE INDIVIDUAL */}
      <section className="py-28 md:py-40">
        <div className="ls-container grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="ls-eyebrow">The individual</p>
            <h2 className="ls-display text-[var(--type-editorial)]">
              No two horses ask the same question.
            </h2>
          </div>
          <div>
            <HorseMedia
              {...media.showJumping}
              ratio="action"
              focalDesktop={media.showJumping.focal.desktop}
              focalMobile={media.showJumping.focal.mobile}
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <p className="mt-7 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              Every horse brings a different history, way of learning and
              relationship with the rider.
            </p>
          </div>
        </div>
      </section>

      {/* 03 THE PARTNERSHIP */}
      <section className="bg-[var(--ls-cream)] py-28 md:py-40">
        <div className="ls-container grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <HorseMedia
              {...media.horseCare}
              ratio="portrait"
              focalDesktop={media.horseCare.focal.desktop}
              focalMobile={media.horseCare.focal.mobile}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="ls-eyebrow">The partnership</p>
            <h2 className="ls-display text-[var(--type-editorial)]">
              Good riding begins with listening.
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              Trust develops through the everyday work around horse and rider.
            </p>
          </div>
        </div>
      </section>

      {/* 04 THE RING */}
      <section className="relative min-h-[600px] overflow-hidden md:min-h-[760px]">
        <FullBleedMedia
          {...media.competition}
          focalDesktop={media.competition.focal.desktop}
          focalMobile={media.competition.focal.mobile}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="ls-container relative z-10 flex min-h-[600px] items-end py-14 text-white md:min-h-[760px]">
          <div>
            <p className="ls-eyebrow text-white/60">The ring</p>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              The result is only one part of the story.
            </h2>
          </div>
        </div>
      </section>

      {/* 05 CTA */}
      <CTA
        eyebrow="Looking for a partner?"
        title="Meet the horses offered at Long Stride."
        href="/horse-sales"
        label="View horse sales"
      >
        Explore currently available horses and ponies, or discuss what you hope
        to find in your next partnership.
      </CTA>
    </main>
  );
}
