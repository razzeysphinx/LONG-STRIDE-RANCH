import Link from "next/link";
import { notFound } from "next/navigation";
import { HorseMedia } from "@/components/media/HorseMedia";
import { CTA } from "@/components/sections/CTA";
import { getHorseBySlug, horses } from "@/data/horses";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return horses.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const horse = getHorseBySlug((await params).slug);
  return horse
    ? pageMetadata({
        title: horse.name,
        description: horse.summary,
        path: `/horse-sales/${horse.slug}`,
        image: horse.images[0].src,
      })
    : pageMetadata({
        title: "Horse Sales",
        description:
          "Explore the current horse sales offering at Long Stride Ranch.",
        path: "/horse-sales",
        image: media.manukaHoney.src,
      });
}
export default async function HorseProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const horse = getHorseBySlug((await params).slug);
  if (!horse) notFound();
  return (
    <main id="main">
      <section className="grid bg-[var(--ls-forest)] text-white lg:min-h-[100svh] lg:grid-cols-[1.08fr_.92fr]">
        <HorseMedia
          src={horse.images[0].src}
          alt={horse.images[0].alt}
          ratio={horse.images[0].ratio ?? "sales"}
          focalDesktop={
            horse.images[0].focalDesktop ?? media.manukaHoney.focal.desktop
          }
          focalMobile={
            horse.images[0].focalMobile ?? media.manukaHoney.focal.mobile
          }
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
          className="min-h-[62svh] lg:min-h-full"
        />
        <div className="flex items-end px-7 py-14 lg:px-14 lg:py-20">
          <div>
            <p className="ls-eyebrow text-white/45">Available</p>
            <h1 className="ls-display text-[var(--type-page)]">{horse.name}</h1>
            <p className="mt-5 font-display text-3xl text-white/78">
              {horse.disciplines.join(" · ")}
            </p>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/62">
              {horse.summary}
            </p>
          </div>
        </div>
      </section>
      <section className="ls-section bg-[var(--ls-paper)]">
        <div className="ls-container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <p className="ls-eyebrow">Meet {horse.name}</p>
          <div>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              Fancy, brave and kind.
            </h2>
            <p className="mt-8 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
              {horse.description}
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
              href={`/contact?interest=Horse%20Purchase&horse=${encodeURIComponent(horse.name)}`}
            >
              Ask about this horse
            </Link>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Horse Sales"
        title="Looking for another partner?"
        href="/horse-sales"
        label="All horses"
      >
        View the current Long Stride sales offering.
      </CTA>
    </main>
  );
}
