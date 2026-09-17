import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { horses } from "@/data/horses";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Horse Sales",
  description: "Explore the current horse sales offering at Long Stride Ranch.",
  path: "/horse-sales",
  image: "/images/sales/manuka-honey.webp",
});
export default function HorseSalesPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Horse Sales" title="Find the right next partner.">
        Long Stride offers a limited number of quality horses and ponies. Start
        with verified availability and a qualified purchase conversation.
      </PageHero>
      <section className="bg-[var(--ls-forest)] py-20 text-white md:py-28">
        <div className="ls-container">
          <p className="ls-eyebrow">Currently offered</p>
          <div className="grid gap-5 lg:grid-cols-2">
            {horses
              .filter((horse) => horse.status === "available")
              .map((horse) => (
                <article
                  key={horse.id}
                  className="overflow-hidden rounded-[24px] bg-[var(--ls-paper)] text-[var(--ls-ink)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={horse.images[0]}
                      alt={`${horse.name} offered through Long Stride Ranch`}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="image-treatment object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="ls-eyebrow">
                      Available · {horse.disciplines[0]}
                    </p>
                    <h2 className="ls-display text-6xl">{horse.name}</h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ls-muted)]">
                      {horse.summary}
                    </p>
                    <Link
                      className="mt-7 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
                      href={`/horse-sales/${horse.slug}`}
                    >
                      View profile
                    </Link>
                  </div>
                </article>
              ))}
          </div>
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
