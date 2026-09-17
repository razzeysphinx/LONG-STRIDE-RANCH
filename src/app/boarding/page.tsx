import { HorseMedia } from "@/components/media/HorseMedia";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Boarding",
  description:
    "Learn about the care philosophy, environment and communication behind boarding at Long Stride Ranch.",
  path: "/boarding",
  image: media.horseCare.src,
});
const rows = [
  [
    "Care",
    "Ask Long Stride about the individual care considerations relevant to your horse.",
  ],
  [
    "Environment",
    "See the barn and horse lifestyle through the ranch’s own imagery and a personal conversation.",
  ],
  [
    "Communication",
    "Discuss how boarding connects with training and the practical needs of your horse.",
  ],
  [
    "Training connection",
    "Discuss the support that makes sense for the horse and rider in front of you.",
  ],
];
export default function BoardingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Boarding"
        title="Your horse is noticed here."
        image={{
          ...media.horseCare,
          focalDesktop: media.horseCare.focal.desktop,
          focalMobile: media.horseCare.focal.mobile,
        }}
      >
        Care is not simply where a horse stays. It is the attention around the
        everyday.
      </PageHero>
      <section className="ls-section bg-[var(--ls-cream)]">
        <div className="ls-container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="ls-eyebrow">Care philosophy</p>
            <h2 className="ls-display text-[clamp(3.7rem,5.5vw,6rem)]">
              The details are part of the care.
            </h2>
            <p className="mt-7 text-sm leading-7 text-[var(--ls-muted)]">
              Long Stride puts a personal standard around the daily environment
              of each horse. The team can share current program details and
              availability directly with owners.
            </p>
          </div>
          <HorseMedia
            {...media.horseCare}
            ratio="portrait"
            focalDesktop={media.horseCare.focal.desktop}
            focalMobile={media.horseCare.focal.mobile}
          />
        </div>
      </section>
      <section className="ls-section">
        <div className="ls-container">
          <p className="ls-eyebrow">Around the everyday</p>
          <div className="mt-5 border-t border-[var(--ls-line)]">
            {rows.map(([title, copy], index) => (
              <article
                key={title}
                className="grid gap-4 border-b border-[var(--ls-line)] py-8 md:grid-cols-[.15fr_.45fr_1fr]"
              >
                <span className="font-display text-2xl text-[var(--ls-brass)]">
                  0{index + 1}
                </span>
                <h2 className="font-display text-4xl leading-none">{title}</h2>
                <p className="max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Availability"
        title="Ask about a place at Long Stride."
        href="/contact?interest=Boarding"
        label="Boarding inquiry"
      >
        Share a little about your horse and what you are looking for.
      </CTA>
    </main>
  );
}
