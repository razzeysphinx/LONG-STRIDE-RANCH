import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { SeasonalStory } from "@/components/sections/SeasonalStory";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { TeamFeature } from "@/components/sections/TeamFeature";

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative grid min-h-[max(700px,100svh)] items-end overflow-hidden bg-[#102018] text-white">
        <Image
          src="/images/hero/hero-jumping.webp"
          alt="Horse and rider competing over fences at Long Stride Ranch"
          fill
          priority
          sizes="100vw"
          className="image-treatment object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,12,.24),rgba(8,17,12,.08)_38%,rgba(8,17,12,.8)),linear-gradient(90deg,rgba(8,17,12,.5),transparent_65%)]" />
        <div className="ls-container relative z-10 pb-10 pt-36 md:pb-14 md:pt-40">
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="ls-eyebrow">Wellington · Jackson Hole</p>
              <h1 className="ls-display max-w-5xl text-[clamp(4.5rem,10vw,10rem)]">
                Built for the <em className="font-normal">long stride.</em>
              </h1>
            </div>
            <div className="max-w-md text-[15px] leading-7 text-white/80">
              <p>
                Thoughtful horsemanship, quality horses and a personal standard
                of care—from daily training to the show ring.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
                  href="/horse-sales"
                >
                  View available horses
                </Link>
                <Link
                  className="rounded-full border border-white/45 px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
                  href="/contact"
                >
                  Start an inquiry
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/25 pt-4 text-[10px] font-bold uppercase tracking-[.14em] sm:flex-row sm:justify-between">
            <span>Training · Boarding · Horse Sales</span>
            <span>Florida · Wyoming</span>
          </div>
        </div>
      </section>
      <section className="bg-[var(--ls-forest)] py-9 text-[var(--ls-cream)]">
        <div className="ls-container grid gap-3 md:grid-cols-[.4fr_1fr_.8fr]">
          <p className="ls-eyebrow mb-0">Long Stride Ranch</p>
          <p className="font-display text-3xl leading-tight">
            Serious horsemanship, held to a personal standard.
          </p>
          <p className="text-sm text-white/70">
            A boutique English equestrian program for horses, riders and
            personal client relationships.
          </p>
        </div>
      </section>
      <ServicePaths />
      <section className="relative min-h-[660px] overflow-hidden text-white">
        <Image
          src="/images/horses/competition.webp"
          alt="Long Stride Ranch horse and rider in the show ring"
          fill
          sizes="100vw"
          className="image-treatment object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,20,13,.65),transparent_70%)]" />
        <div className="ls-container relative z-10 py-36">
          <p className="ls-eyebrow">Featured horse</p>
          <h2 className="ls-display max-w-3xl text-[clamp(4rem,7vw,7.5rem)]">
            Manuka Honey
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            A Children&apos;s Hunter Pony described by Long Stride as fancy,
            brave and kind.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              className="inline-flex rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
              href="/horse-sales/manuka-honey"
            >
              View horse
            </Link>
            <Link
              className="inline-flex rounded-full border border-white/40 px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
              href="/contact?interest=Horse%20Purchase&horse=Manuka%20Honey"
            >
              Ask about Manuka
            </Link>
          </div>
        </div>
      </section>
      <section className="ls-section">
        <div className="ls-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="ls-eyebrow">Horsemanship</p>
            <h2 className="ls-display text-[clamp(4rem,6vw,6.5rem)]">
              The standard is felt in the everyday work.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-[17px] leading-8 text-[var(--ls-muted)]">
            Long Stride is built around the work that matters most: developing
            horses thoughtfully, supporting riders honestly and giving every
            partnership the attention it deserves.
          </p>
        </div>
      </section>
      <SeasonalStory />
      <TeamFeature />
      <CTA eyebrow="Start a conversation" title="Tell us what you need.">
        Whether you are looking for a horse, training, boarding or a renewables
        conversation, we will help route you to the right next step.
      </CTA>
    </main>
  );
}
