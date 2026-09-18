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
  {
    title: "Care",
    copy: "Ask Long Stride about the individual care considerations relevant to your horse.",
  },
  {
    title: "Environment",
    copy: "See the barn and horse lifestyle through the ranch’s own imagery and a personal conversation.",
  },
  {
    title: "Communication",
    copy: "Discuss how boarding connects with training and the practical needs of your horse.",
  },
  {
    title: "Training connection",
    copy: "Discuss the support that makes sense for the horse and rider in front of you.",
  },
];

export default function BoardingPage() {
  return (
    <main id="main">
      {/* 01 HERO */}
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

      {/* 02 CARE PHILOSOPHY */}
      <section className="bg-[var(--ls-cream)] py-24 md:py-36">
        <div className="ls-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <p className="ls-eyebrow">Care philosophy</p>
          <div>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              The details are part of the care.
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              Long Stride puts a personal standard around the daily environment
              of each horse. Current care arrangements and availability can be
              discussed directly with the team.
            </p>
          </div>
        </div>
      </section>

      {/* 03 AROUND THE EVERYDAY */}
      <section className="py-24 md:py-36">
        <div className="ls-container">
          <p className="ls-eyebrow">Around the everyday</p>
          <div className="mt-8 border-t border-[var(--ls-line)]">
            {rows.map(({ title, copy }, index) => (
              <article
                key={title}
                className="grid gap-4 border-b border-[var(--ls-line)] py-9 md:grid-cols-[100px_280px_1fr] md:items-baseline md:py-11"
              >
                <span className="font-display text-2xl text-[var(--ls-brass)]">
                  0{index + 1}
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

      {/* 04 AVAILABILITY CTA */}
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
