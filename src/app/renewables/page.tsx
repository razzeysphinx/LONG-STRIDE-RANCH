import { ProcessDiagram } from "@/components/renewables/ProcessDiagram";
import { DarkCTA } from "@/components/sections/cta/DarkCTA";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Renewables",
  description:
    "Long Stride Ranch Renewables explores a pyrolysis-based approach to upcycling equine waste.",
  path: "/renewables",
  image: "/images/hero/hero-jumping.webp",
});

export default function RenewablesPage() {
  return (
    <main id="main">
      {/* 01 B2B HERO */}
      <PageHero
        eyebrow="Long Stride Ranch Renewables"
        title="Upcycling equine waste."
        variant="quiet"
      >
        A distinct, technical conversation for municipalities, equestrian
        facilities and sustainability partners seeking a more productive path
        for stable waste.
      </PageHero>

      {/* 02 THE PROBLEM & APPROACH */}
      <section className="py-24 md:py-36">
        <div className="ls-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="ls-eyebrow">The challenge</p>
            <h2 className="ls-display text-[var(--type-editorial)]">
              From stable waste to useful outputs.
            </h2>
          </div>
          <div>
            <p className="text-[17px] leading-8 text-[var(--ls-muted)]">
              Equine operations generate significant volumes of manure and wood
              shavings daily. Rather than treating this as a disposal liability,
              Long Stride is exploring advanced pyrolysis technology to divert
              stable waste into valuable carbon products.
            </p>
          </div>
        </div>
      </section>

      {/* 03 THE PROCESS */}
      <section className="bg-[var(--ls-cream)] py-24 md:py-36">
        <div className="ls-container">
          <div className="mb-12">
            <p className="ls-eyebrow">Technical process</p>
            <h2 className="ls-display text-[var(--type-section)]">
              Pyrolysis-based conversion.
            </h2>
          </div>
          <ProcessDiagram />
        </div>
      </section>

      {/* 04 THE OUTPUTS / BIOCHAR */}
      <section className="py-24 md:py-36">
        <div className="ls-container grid gap-12 lg:grid-cols-2">
          <div className="border-t border-[var(--ls-line)] pt-8">
            <p className="ls-eyebrow">Primary output</p>
            <h3 className="font-display text-4xl">BioChar</h3>
            <p className="mt-4 text-[15px] leading-7 text-[var(--ls-muted)]">
              A high-carbon, porous charcoal product capable of sequestering
              carbon, improving soil structure, and retaining moisture and
              nutrients in agricultural and landscape applications.
            </p>
          </div>
          <div className="border-t border-[var(--ls-line)] pt-8">
            <p className="ls-eyebrow">Energy potential</p>
            <h3 className="font-display text-4xl">Thermal energy</h3>
            <p className="mt-4 text-[15px] leading-7 text-[var(--ls-muted)]">
              Pyrolysis produces high-heat syngas that can be captured and
              utilized to power facility drying systems or generate clean
              thermal energy.
            </p>
          </div>
        </div>
      </section>

      {/* 05 PARTNERSHIP CONTACT */}
      <DarkCTA
        eyebrow="Partnership inquiry"
        title="Start the renewables conversation."
        href="/contact?interest=Renewables"
        label="Discuss a renewables partnership"
      >
        Get in touch to discuss facility partnerships, regional feedstock
        opportunities, and commercial testing.
      </DarkCTA>
    </main>
  );
}
