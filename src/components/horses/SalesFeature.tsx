import Link from "next/link";
import { HorseMedia } from "@/components/media/HorseMedia";
import type { Horse } from "@/types/horse";

type Props = {
  horse: Horse;
};

export function SalesFeature({ horse }: Props) {
  const image = horse.images[0];
  return (
    <article className="grid bg-[var(--ls-forest)] text-white lg:grid-cols-[1.08fr_.92fr]">
      <HorseMedia
        src={image.src}
        alt={image.alt}
        ratio="sales"
        focalDesktop={image.focalDesktop ?? "50% 45%"}
        focalMobile={image.focalMobile ?? "50% 38%"}
        sizes="(max-width:1024px) 100vw, 54vw"
      />
      <div className="flex items-end px-7 py-14 md:px-12 md:py-16 xl:px-16 xl:py-20">
        <div className="max-w-[560px]">
          <p className="ls-eyebrow text-white/45">Available</p>
          <h2 className="ls-display text-[var(--type-page-hero)]">
            {horse.name}
          </h2>
          {horse.disciplines[0] && (
            <p className="mt-5 font-display text-3xl text-white/78">
              {horse.disciplines[0]}
            </p>
          )}
          <p className="mt-7 text-[15px] leading-7 text-white/62">
            {horse.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`/horse-sales/${horse.slug}`}
              className="rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)]"
            >
              Meet {horse.name}
            </Link>
            <Link
              href={`/contact?interest=Horse%20Purchase&horse=${encodeURIComponent(
                horse.name,
              )}`}
              className="rounded-full border border-white/30 px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
            >
              Ask about this horse
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
