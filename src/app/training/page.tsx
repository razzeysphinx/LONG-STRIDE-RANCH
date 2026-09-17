import Image from "next/image";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Training",
  description: "Thoughtful horse and rider development at Long Stride Ranch.",
  path: "/training",
  image: "/images/team/danielle-harrity.webp",
});
export default function TrainingPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Training" title="Development with a longer view.">
        Thoughtful development for horse and rider, grounded in experience,
        communication and the needs of the individual horse.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[24px]">
              <Image
                src="/images/team/danielle-harrity.webp"
                alt="Danielle Harrity riding at Long Stride Ranch"
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="image-treatment object-cover"
              />
            </div>
            <div className="flex flex-col justify-end bg-[var(--ls-cream)] p-8 md:p-12">
              <p className="ls-eyebrow">Training philosophy</p>
              <h2 className="ls-display text-[clamp(3.6rem,5.5vw,6rem)]">
                The work begins with attention.
              </h2>
              <p className="mt-6 text-sm leading-7 text-[var(--ls-muted)]">
                Long Stride’s approach centers on individual horses and riders,
                with clear communication and steady progress over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="relative h-[min(58vw,620px)] min-h-[360px]">
          <Image
            src="/images/training/show-jumping.webp"
            alt="Horse and rider jumping in competition"
            fill
            sizes="100vw"
            className="image-treatment object-cover"
          />
        </div>
      </section>
      <section className="ls-section bg-[var(--ls-cream)]">
        <div className="ls-container">
          <SectionHeading
            eyebrow="What to expect"
            title="A program shaped around the partnership."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Horse development",
                "Work with consideration for the horse’s current stage, strengths and long-term wellbeing.",
              ],
              [
                "02",
                "Rider development",
                "Guidance that supports confident, thoughtful riders and their relationship with the horse.",
              ],
              [
                "03",
                "Clear communication",
                "Start with an inquiry so Long Stride can understand the horse, rider and goals in front of you.",
              ],
            ].map(([number, title, copy]) => (
              <article
                key={number}
                className="border-t border-[var(--ls-line)] pt-5"
              >
                <span className="font-display text-2xl text-[var(--ls-brass)]">
                  {number}
                </span>
                <h3 className="mt-4 font-display text-4xl leading-none">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ls-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
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
