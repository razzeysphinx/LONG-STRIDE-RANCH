import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/sections/CTA";
import { getHorseBySlug, horses } from "@/data/horses";
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
        image: horse.images[0],
      })
    : pageMetadata({
        title: "Horse Sales",
        description:
          "Explore the current horse sales offering at Long Stride Ranch.",
        path: "/horse-sales",
        image: "/images/sales/manuka-honey.webp",
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
      <section className="bg-[var(--ls-cream)] pb-20 pt-36 md:pt-44">
        <div className="ls-container">
          <p className="ls-eyebrow">Horse Sales · Available</p>
          <h1 className="ls-display text-[clamp(4.3rem,8vw,8.5rem)]">
            {horse.name}
          </h1>
          <p className="mt-5 text-sm text-[var(--ls-muted)]">
            {horse.disciplines.join(" · ")}
          </p>
        </div>
      </section>
      <section className="ls-section">
        <div className="ls-container grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[590px] overflow-hidden rounded-[24px]">
            <Image
              src={horse.images[0]}
              alt={`${horse.name} offered through Long Stride Ranch`}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 60vw"
              className="image-treatment object-cover"
            />
          </div>
          <div className="flex flex-col justify-between rounded-[24px] bg-[var(--ls-cream)] p-8 md:p-12">
            <div>
              <p className="ls-eyebrow">Meet {horse.name}</p>
              <h2 className="ls-display text-6xl">Fancy, brave and kind.</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[var(--ls-muted)]">
                {horse.description}
              </p>
              <Link
                className="mt-7 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
                href={`/contact?interest=Horse%20Purchase&horse=${encodeURIComponent(horse.name)}`}
              >
                Ask about this horse
              </Link>
            </div>
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
