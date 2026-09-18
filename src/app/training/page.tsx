import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { HorseMedia } from "@/components/media/HorseMedia";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Training",
  description: "Thoughtful horse and rider development at Long Stride Ranch.",
  path: "/training",
  image: media.showJumping.src,
});

const rhythm = [
  {
    number: "01",
    title: "Observe",
    copy: "Start with the horse and rider in front of you.",
  },
  {
    number: "02",
    title: "Understand",
    copy: "Pay attention to what the partnership is communicating.",
  },
  {
    number: "03",
    title: "Develop",
    copy: "Build steady progress around the individual horse and rider.",
  },
  {
    number: "04",
    title: "Refine",
    copy: "Let repetition, clarity and experience shape the next step.",
  },
];

const principles = [
  {
    number: "01",
    title: "Horse development",
    copy: "Work with consideration for the horse's current stage, strengths and long-term wellbeing.",
  },
  {
    number: "02",
    title: "Rider development",
    copy: "Guidance that supports thoughtful riders and the relationship they build with the horse.",
  },
  {
    number: "03",
    title: "Communication",
    copy: "Begin with context so the team can understand the horse, rider and goals in front of them.",
  },
];

export default function TrainingPage() {
  return (
    <main id="main">
      {/* 01 HERO */}
      <PageHero
        eyebrow="Training"
        title="Development with a longer view."
        image={{
          ...media.showJumping,
          focalDesktop: media.showJumping.focal.desktop,
          focalMobile: media.showJumping.focal.mobile,
        }}
      >
        Thoughtful development for horse and rider, grounded in experience,
        communication and the needs of the individual horse.
      </PageHero>

      {/* 02 PHILOSOPHY */}
      <section className="py-24 md:py-36">
        <div className="ls-container grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <HorseMedia
            {...media.danielleRiding}
            ratio="portrait"
            focalDesktop={media.danielleRiding.focal.desktop}
            focalMobile={media.danielleRiding.focal.mobile}
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <div>
            <p className="ls-eyebrow">Training philosophy</p>
            <h2 className="ls-display text-[clamp(3.6rem,5.5vw,6rem)]">
              The first skill is paying attention.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
              Long Stride&apos;s work centers on individual horses and riders,
              with clear communication and steady progress over time.
            </p>
          </div>
        </div>
      </section>

      {/* 03 TRAINING RHYTHM */}
      <section className="bg-[var(--ls-cream)] py-24 md:py-36">
        <div className="ls-container">
          <p className="ls-eyebrow">A training rhythm</p>
          <div className="mt-8">
            <div className="equestrian-rule" />
            {rhythm.map(({ number, title, copy }) => (
              <article
                key={number}
                className="grid gap-4 border-b border-[var(--ls-line)] py-9 md:grid-cols-[100px_280px_1fr] md:items-baseline md:py-11"
              >
                <span className="font-display text-2xl text-[var(--ls-brass)]">
                  {number}
                </span>
                <h3 className="font-display text-3xl leading-none md:text-4xl">
                  {title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 EDITORIAL ACTION MOMENT */}
      <section className="relative min-h-[520px] overflow-hidden md:min-h-[680px]">
        <FullBleedMedia
          {...media.competition}
          focalDesktop={media.competition.focal.desktop}
          focalMobile={media.competition.focal.mobile}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,9,.1)_0%,rgba(6,14,9,.65)_100%)]" />
        <div className="ls-container relative z-10 flex min-h-[520px] items-end py-12 text-white md:min-h-[680px] md:py-16">
          <div>
            <p className="ls-eyebrow text-white/60">The work</p>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              Progress is built one ride at a time.
            </h2>
          </div>
        </div>
      </section>

      {/* 05 HORSE / RIDER / COMMUNICATION (EDITORIAL ROWS) */}
      <section className="py-24 md:py-36">
        <div className="ls-container">
          <p className="ls-eyebrow">Principles</p>
          <div className="mt-8 border-t border-[var(--ls-line)]">
            {principles.map(({ number, title, copy }) => (
              <article
                key={number}
                className="grid gap-4 border-b border-[var(--ls-line)] py-9 md:grid-cols-[100px_280px_1fr] md:items-baseline md:py-11"
              >
                <span className="font-display text-2xl text-[var(--ls-brass)]">
                  {number}
                </span>
                <h2 className="font-display text-3xl leading-none md:text-4xl">
                  {title}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CTA */}
      <CTA
        eyebrow="Training inquiry"
        title="Start with your horse and your goals."
        href="/contact?interest=Training"
        label="Ask about training"
      >
        Share a little context and Long Stride can help determine the most
        useful next conversation.
      </CTA>
    </main>
  );
}
