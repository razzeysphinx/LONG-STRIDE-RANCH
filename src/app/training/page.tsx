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
  ["01", "Observe", "Start with the horse and rider in front of you."],
  [
    "02",
    "Understand",
    "Pay attention to what the partnership is communicating.",
  ],
  [
    "03",
    "Develop",
    "Build steady progress around the individual horse and rider.",
  ],
  [
    "04",
    "Refine",
    "Let repetition, clarity and experience shape the next step.",
  ],
];
export default function TrainingPage() {
  return (
    <main id="main">
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
      <section className="ls-section">
        <div className="ls-container grid gap-12 lg:grid-cols-2">
          <HorseMedia
            {...media.danielleRiding}
            ratio="portrait"
            focalDesktop={media.danielleRiding.focal.desktop}
            focalMobile={media.danielleRiding.focal.mobile}
          />
          <div className="flex flex-col justify-end">
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
      <section className="bg-[var(--ls-cream)]">
        <div className="ls-container ls-section">
          <p className="ls-eyebrow">A training rhythm</p>
          <div className="mt-8">
            <div className="equestrian-rule" />
            {rhythm.map(([number, title, copy]) => (
              <article
                key={number}
                className="grid gap-4 border-b border-[var(--ls-line)] py-7 md:grid-cols-[.15fr_.35fr_1fr]"
              >
                <span className="font-display text-3xl text-[var(--ls-brass)]">
                  {number}
                </span>
                <h3 className="font-display text-4xl leading-none">{title}</h3>
                <p className="max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HorseMedia
        {...media.showJumping}
        ratio="cinematic"
        focalDesktop={media.showJumping.focal.desktop}
        focalMobile={media.showJumping.focal.mobile}
        sizes="100vw"
        className="w-full"
      />
      <section className="ls-section">
        <div className="ls-container grid gap-8 md:grid-cols-3">
          {[
            [
              "Horse development",
              "Work with consideration for the horse’s current stage, strengths and long-term wellbeing.",
            ],
            [
              "Rider development",
              "Guidance that supports confident, thoughtful riders and their relationship with the horse.",
            ],
            [
              "Communication",
              "Start with an inquiry so Long Stride can understand the horse, rider and goals in front of you.",
            ],
          ].map(([title, copy]) => (
            <div key={title} className="border-t border-[var(--ls-line)] pt-5">
              <h2 className="font-display text-4xl leading-none">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ls-muted)]">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTA
        eyebrow="Training inquiry"
        title="Start with your horse and your goals."
        href="/contact?interest=Training%20%26%20Lessons"
        label="Ask about training"
      >
        Share a little context and Long Stride can help determine the most
        useful next conversation.
      </CTA>
    </main>
  );
}
