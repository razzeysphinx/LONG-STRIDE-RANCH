import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
const paths = [
  {
    title: "Training",
    copy: "Understand the considered approach to horse and rider development.",
    href: "/training",
    image: "/images/team/danielle-harrity.webp",
    alt: "Danielle Harrity riding at Long Stride Ranch",
  },
  {
    title: "Boarding",
    copy: "Explore the care philosophy and environment surrounding horses based with Long Stride.",
    href: "/boarding",
    image: "/images/boarding/horse-care.webp",
    alt: "Rider with a Long Stride Ranch horse",
  },
  {
    title: "Horse Sales",
    copy: "View the current offering and begin a qualified purchase conversation.",
    href: "/horse-sales",
    image: "/images/sales/manuka-honey.webp",
    alt: "Horse offered through Long Stride Ranch sales",
  },
];
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
                  href="/training"
                >
                  Explore training
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
      <section className="bg-[var(--ls-forest)] py-8 text-[var(--ls-cream)]">
        <div className="ls-container grid gap-3 md:grid-cols-[.4fr_1fr_.8fr]">
          <p className="ls-eyebrow mb-0">Long Stride Ranch</p>
          <p className="font-display text-3xl leading-tight">
            Serious horsemanship, held to a personal standard.
          </p>
          <p className="text-sm text-white/70">
            Explore the people, horses and services that shape a considered
            program.
          </p>
        </div>
      </section>
      <section className="ls-section">
        <div className="ls-container">
          <SectionHeading
            eyebrow="Choose your path"
            title="What brings you to Long Stride?"
            description="A clear starting point for riders, owners and buyers."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.href}
                className="group overflow-hidden rounded-[24px] border border-[var(--ls-line)] bg-white"
                href={path.href}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="image-treatment premium-hover-image object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="ls-eyebrow">
                    {path.title === "Horse Sales"
                      ? "Buyers"
                      : path.title === "Boarding"
                        ? "Horse care"
                        : "Riders & owners"}
                  </p>
                  <h2 className="ls-display text-5xl">{path.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--ls-muted)]">
                    {path.copy}
                  </p>
                  <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[.11em]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-[620px] overflow-hidden text-white">
        <Image
          src="/images/horses/competition.webp"
          alt="Long Stride Ranch horse and rider in the show ring"
          fill
          sizes="100vw"
          className="image-treatment object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,20,13,.58),transparent_70%)]" />
        <div className="ls-container relative z-10 py-36">
          <p className="ls-eyebrow">Featured horse</p>
          <h2 className="ls-display max-w-3xl text-[clamp(4rem,7vw,7.5rem)]">
            Manuka Honey
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            A Children&apos;s Hunter Pony described by Long Stride as fancy,
            brave and kind.
          </p>
          <Link
            className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
            href="/horse-sales/manuka-honey"
          >
            Meet Manuka Honey
          </Link>
        </div>
      </section>
      <CTA eyebrow="Start a conversation" title="Tell us what you need.">
        Whether you are looking for a horse, training, boarding or a renewables
        conversation, we will help route you to the right next step.
      </CTA>
    </main>
  );
}
