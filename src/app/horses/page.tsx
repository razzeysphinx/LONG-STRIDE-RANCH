import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Our Horses",
  description: "Meet the horses and partnerships behind Long Stride Ranch.",
  path: "/horses",
  image: "/images/horses/competition.webp",
});
export default function HorsesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Horses"
        title="Meet the horses behind Long Stride."
      >
        A visual introduction to the horses in the program, the rider
        partnerships and the work that happens in and out of the show ring.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container">
          <div className="grid gap-4 md:grid-cols-5">
            <div className="relative min-h-[540px] overflow-hidden rounded-[24px] md:col-span-3">
              <Image
                src="/images/training/show-jumping.webp"
                alt="Long Stride horse jumping in competition"
                fill
                sizes="(max-width:768px) 100vw, 60vw"
                className="image-treatment object-cover"
              />
            </div>
            <div className="relative min-h-[540px] overflow-hidden rounded-[24px] md:col-span-2">
              <Image
                src="/images/horses/horse-portrait.webp"
                alt="Portrait of a Long Stride Ranch horse"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="image-treatment object-cover"
              />
            </div>
            <div className="relative min-h-[500px] overflow-hidden rounded-[24px] md:col-span-5">
              <Image
                src="/images/boarding/horse-care.webp"
                alt="Rider with a horse at Long Stride Ranch"
                fill
                sizes="100vw"
                className="image-treatment object-cover"
              />
            </div>
            <div className="relative min-h-[460px] overflow-hidden rounded-[24px] md:col-span-2">
              <Image
                src="/images/horses/competition.webp"
                alt="Horse and rider competing at Long Stride Ranch"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="image-treatment object-cover"
              />
            </div>
            <div className="flex min-h-[460px] items-end rounded-[24px] bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:col-span-3">
              <div>
                <p className="ls-eyebrow">The program</p>
                <h2 className="ls-display text-6xl">
                  At home, in training and in the ring.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                  The horses at Long Stride are more than a collection of
                  results. Their individual character and the partnership around
                  them guide the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-28">
        <div className="ls-container">
          <Link
            className="inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
            href="/horse-sales"
          >
            View horse sales
          </Link>
        </div>
      </section>
    </main>
  );
}
