import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Renewables",
  description:
    "Long Stride Ranch Renewables explores a pyrolysis-based approach to upcycling equine waste.",
  path: "/renewables",
  image: "/images/horses/horse-portrait.webp",
});
export default function RenewablesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Long Stride Ranch Renewables"
        title="Upcycling equine waste."
      >
        A distinct conversation for municipalities, facilities and
        sustainability partners seeking a more useful path for stable waste.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="ls-eyebrow">The approach</p>
            <h2 className="ls-display text-[clamp(3.7rem,5.5vw,6.2rem)]">
              From stable waste to useful products.
            </h2>
            <p className="mt-7 text-sm leading-7 text-[var(--ls-muted)]">
              Long Stride says it is expanding operations to upcycle manure and
              used equine bedding into organic fertilizer and renewable fuels
              using pyrolysis technology, including the production of BioChar.
            </p>
          </div>
          <div className="grid place-items-center rounded-[24px] bg-[var(--ls-sage)] p-8 text-center text-[var(--ls-forest)]">
            <div className="w-full max-w-md">
              <p className="ls-eyebrow">Process</p>
              <div className="font-display text-5xl">Stable waste</div>
              <div className="my-5 text-2xl">↓</div>
              <div className="font-display text-5xl">Pyrolysis</div>
              <div className="my-5 text-2xl">↓</div>
              <div className="font-display text-5xl">
                Biochar / renewable outputs
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Partnership inquiry"
        title="Start the renewables conversation."
        href="/contact?interest=Renewables"
        label="Discuss a renewables partnership"
      >
        Get in touch to discuss the opportunity, current expansion plans and a
        potential fit.
      </CTA>
    </main>
  );
}
