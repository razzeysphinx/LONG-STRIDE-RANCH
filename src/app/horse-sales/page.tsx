import { SalesFeature } from "@/components/horses/SalesFeature";
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
  const availableHorses = horses.filter(
    (horse) => horse.status === "available",
  );

  return (
    <main id="main">
      {/* 01 HERO */}
      <PageHero
        eyebrow="Horse Sales"
        title="A considered offering."
        image={{
          ...media.manukaHoney,
          focalDesktop: media.manukaHoney.focal.desktop,
          focalMobile: media.manukaHoney.focal.mobile,
        }}
      >
        Long Stride represents a limited number of horses. Each horse is
        represented with clear knowledge of their character, development and the
        rider partnership that suits them best.
      </PageHero>

      {/* 02 CURATED FEATURED HORSES */}
      <section className="py-20 md:py-28">
        <div className="ls-container">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
            <p className="ls-eyebrow">Curated offering</p>
            <p className="max-w-xl text-[17px] leading-8 text-[var(--ls-muted)]">
              Long Stride offers a limited number of quality horses and ponies.
              Start with verified availability and a qualified purchase
              conversation.
            </p>
          </div>
          <div className="space-y-16">
            {availableHorses.map((horse) => (
              <SalesFeature key={horse.id} horse={horse} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 FINDING A FIT */}
      <section className="bg-[var(--ls-cream)] py-28 md:py-40">
        <div className="ls-container grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <p className="ls-eyebrow">Finding a fit</p>
          <div>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              The right horse is only half the match.
            </h2>
            <div className="mt-12 grid border-t border-[var(--ls-line)] sm:grid-cols-2">
              {["Horse", "Rider", "Temperament", "Goals"].map((item, index) => (
                <div
                  key={item}
                  className="border-b border-[var(--ls-line)] py-6"
                >
                  <span className="mr-5 text-xs text-[var(--ls-brass)]">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 BUYER INQUIRY */}
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
