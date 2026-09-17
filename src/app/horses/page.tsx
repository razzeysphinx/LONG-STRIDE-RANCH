import Link from "next/link";
import { HorseMedia } from "@/components/media/HorseMedia";
import { PageHero } from "@/components/sections/PageHero";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Our Horses",
  description: "Meet the horses and partnerships behind Long Stride Ranch.",
  path: "/horses",
  image: media.horsePortrait.src,
});
export default function HorsesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Horses"
        title="They are the reason for everything else."
        image={{
          ...media.horsePortrait,
          focalDesktop: media.horsePortrait.focal.desktop,
          focalMobile: media.horsePortrait.focal.mobile,
        }}
      >
        A visual introduction to the horses in the program, the rider
        partnerships and the work that happens in and out of the show ring.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container">
          <div className="grid gap-3 md:grid-cols-12">
            <HorseMedia
              {...media.showJumping}
              ratio="action"
              focalDesktop={media.showJumping.focal.desktop}
              focalMobile={media.showJumping.focal.mobile}
              className="md:col-span-7"
            />
            <HorseMedia
              {...media.horsePortrait}
              ratio="portrait"
              focalDesktop={media.horsePortrait.focal.desktop}
              focalMobile={media.horsePortrait.focal.mobile}
              className="md:col-span-5 md:mt-20"
            />
            <div className="flex min-h-[420px] items-end bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:col-span-5 md:p-12">
              <div>
                <p className="ls-eyebrow text-white/60">The program</p>
                <h2 className="ls-display text-[clamp(3.5rem,5.5vw,6rem)]">
                  At home, in training and in the ring.
                </h2>
              </div>
            </div>
            <HorseMedia
              {...media.competition}
              ratio="horse"
              focalDesktop={media.competition.focal.desktop}
              focalMobile={media.competition.focal.mobile}
              className="md:col-span-7"
            />
          </div>
          <div className="mt-14 border-t border-[var(--ls-line)] pt-8 md:flex md:justify-between">
            <p className="max-w-2xl text-[17px] leading-8 text-[var(--ls-muted)]">
              The horses at Long Stride are more than a collection of results.
              Their individual character and the partnership around them guide
              the work.
            </p>
            <Link
              className="mt-6 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white md:mt-0"
              href="/horse-sales"
            >
              View horse sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
