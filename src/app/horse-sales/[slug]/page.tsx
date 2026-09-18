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

  const additionalImages = horse.images.slice(1);
  const hasVerifiedFacts = Boolean(
    horse.age || horse.breed || horse.gender || horse.height || horse.color,
  );

  return (
    <main id="main">
      {/* 01 HORSE HERO */}
      <section className="grid bg-[var(--ls-forest)] text-white lg:min-h-[100svh] lg:grid-cols-[1.08fr_.92fr]">
        <HorseMedia
          src={horse.images[0].src}
          alt={horse.images[0].alt}
          ratio="sales"
          focalDesktop={horse.images[0].focalDesktop}
          focalMobile={horse.images[0].focalMobile}
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
          className="min-h-[62svh] lg:min-h-full"
        />
        <div className="flex items-end px-7 py-14 lg:px-14 lg:py-20">
          <div>
            <p className="ls-eyebrow text-white/45">Available</p>
            <h1 className="ls-display text-[var(--type-page-hero)]">
              {horse.name}
            </h1>
            <p className="mt-5 font-display text-3xl text-white/78">
              {horse.disciplines.join(" · ")}
            </p>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/62">
              {horse.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 02 MEET HORSE STORY */}
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
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
                href={`/contact?interest=Horse%20Purchase&horse=${encodeURIComponent(
                  horse.name,
                )}`}
              >
                Ask about {horse.name}
              </Link>
              <Link
                className="rounded-full border border-[var(--ls-line)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
                href="/horse-sales"
              >
                Back to all horses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 GALLERY (ONLY WHEN ADDITIONAL IMAGES EXIST) */}
      {additionalImages.length > 0 && (
        <section className="py-20 bg-[var(--ls-cream)]">
          <div className="ls-container">
            <p className="ls-eyebrow">Gallery</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {additionalImages.map((img, i) => (
                <HorseMedia
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  ratio={img.ratio ?? "sales"}
                  focalDesktop={img.focalDesktop}
                  focalMobile={img.focalMobile}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 VERIFIED FACTS (ONLY WHEN VERIFIED FACTS EXIST) */}
      {hasVerifiedFacts && (
        <section className="py-16 border-t border-[var(--ls-line)]">
          <div className="ls-container grid gap-8 md:grid-cols-4">
            {horse.breed && (
              <div>
                <p className="ls-eyebrow">Breed</p>
                <p className="font-display text-2xl">{horse.breed}</p>
              </div>
            )}
            {horse.age && (
              <div>
                <p className="ls-eyebrow">Age</p>
                <p className="font-display text-2xl">{horse.age} yrs</p>
              </div>
            )}
            {horse.gender && (
              <div>
                <p className="ls-eyebrow">Gender</p>
                <p className="font-display text-2xl">{horse.gender}</p>
              </div>
            )}
            {horse.height && (
              <div>
                <p className="ls-eyebrow">Height</p>
                <p className="font-display text-2xl">{horse.height}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 05 IDEAL RIDER (ONLY WHEN SPECIFIED) */}
      {horse.idealRider && (
        <section className="py-20 bg-[var(--ls-cream)]">
          <div className="ls-container grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <p className="ls-eyebrow">Ideal match</p>
            <div>
              <h2 className="ls-display text-[var(--type-editorial)]">
                The right partnership.
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-[var(--ls-muted)]">
                {horse.idealRider}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 06 VIDEO (ONLY WHEN PROVIDED) */}
      {horse.videos && horse.videos.length > 0 && (
        <section className="py-20">
          <div className="ls-container">
            <p className="ls-eyebrow">Video</p>
            <div className="mt-8 space-y-6">
              {horse.videos.map((vid, idx) => (
                <div key={idx}>
                  <h3 className="font-display text-2xl mb-2">{vid.title}</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-black">
                    <iframe
                      src={vid.url}
                      title={vid.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 INQUIRY */}
      <CTA
        eyebrow="Purchase inquiry"
        title={`Start a conversation about ${horse.name}.`}
        href={`/contact?interest=Horse%20Purchase&horse=${encodeURIComponent(
          horse.name,
        )}`}
        label={`Ask about ${horse.name}`}
      >
        Share details about the rider, discipline and what you hope to find. We
        will discuss whether {horse.name} is a thoughtful match.
      </CTA>
    </main>
  );
}
