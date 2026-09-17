import Image from "next/image";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Boarding",
  description:
    "Learn about the care philosophy, environment and communication behind boarding at Long Stride Ranch.",
  path: "/boarding",
  image: "/images/boarding/horse-care.webp",
});
export default function BoardingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Boarding"
        title="Care you can understand before you arrive."
      >
        A clear look at the environment, communication and day-to-day care
        surrounding horses based with Long Stride.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
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
          <div className="relative min-h-[580px] overflow-hidden rounded-[24px]">
            <Image
              src="/images/boarding/horse-care.webp"
              alt="Rider with a Long Stride Ranch horse"
              fill
              sizes="(max-width:1024px) 100vw, 60vw"
              className="image-treatment object-cover"
            />
          </div>
        </div>
      </section>
      <section className="ls-section bg-[var(--ls-cream)]">
        <div className="ls-container grid gap-8 md:grid-cols-3">
          {[
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
          ].map(([title, copy]) => (
            <article
              key={title}
              className="border-t border-[var(--ls-line)] pt-5"
            >
              <h2 className="font-display text-4xl leading-none">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ls-muted)]">
                {copy}
              </p>
            </article>
          ))}
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
