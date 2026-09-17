import Link from "next/link";
import { HorseMedia } from "@/components/media/HorseMedia";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { horses } from "@/data/horses";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Horse Sales",
  description: "Explore the current horse sales offering at Long Stride Ranch.",
  path: "/horse-sales",
  image: media.manukaHoney.src,
});
export default function HorseSalesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Horse Sales"
        title="A considered offering."
        image={{
          ...media.manukaHoney,
          focalDesktop: media.manukaHoney.focal.desktop,
          focalMobile: media.manukaHoney.focal.mobile,
        }}
      >
        Long Stride offers a limited number of quality horses and ponies. Start
        with verified availability and a qualified purchase conversation.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
            <p className="ls-eyebrow">Currently offered</p>
            <p className="max-w-xl text-[17px] leading-8 text-[var(--ls-muted)]">
              Each horse deserves a considered conversation about their
              strengths, the rider, and the next partnership.
            </p>
          </div>
          {horses
            .filter((horse) => horse.status === "available")
            .map((horse) => (
              <article
                key={horse.id}
                className="grid gap-8 border-t border-[var(--ls-line)] pt-5 lg:grid-cols-[1fr_.8fr]"
              >
                <HorseMedia
                  src={horse.images[0].src}
                  alt={horse.images[0].alt}
                  ratio="horse"
                  focalDesktop={media.manukaHoney.focal.desktop}
                  focalMobile={media.manukaHoney.focal.mobile}
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
                <div className="flex flex-col justify-end pb-7">
                  <p className="ls-eyebrow">
                    Available · {horse.disciplines[0]}
                  </p>
                  <h2 className="ls-display text-[clamp(4rem,6vw,6.7rem)]">
                    {horse.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                    {horse.summary}
                  </p>
                  <Link
                    className="mt-7 inline-flex w-fit rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
                    href={`/horse-sales/${horse.slug}`}
                  >
                    View profile
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
      <CTA
        eyebrow="Buyer inquiry"
        title="Tell us about the rider."
        href="/contact?interest=Horse%20Purchase"
        label="Start a purchase inquiry"
      >
        Start with experience, discipline and what you hope to find in your next
        horse.
      </CTA>
    </main>
  );
}
