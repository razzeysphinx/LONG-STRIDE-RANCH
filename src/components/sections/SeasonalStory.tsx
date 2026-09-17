import Image from "next/image";

export function SeasonalStory() {
  return (
    <section className="ls-section bg-[var(--ls-cream)]">
      <div className="ls-container grid items-center gap-8 lg:grid-cols-[.88fr_1.12fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/horses/horse-portrait.webp"
            alt="Portrait of a Long Stride Ranch horse"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="image-treatment object-cover"
          />
        </div>
        <div className="px-1 lg:px-12">
          <p className="ls-eyebrow">Florida ↔ Wyoming</p>
          <h2 className="ls-display text-[clamp(3.8rem,6vw,6.4rem)]">
            Two landscapes. One standard of care.
          </h2>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
            Long Stride’s work is rooted in the equestrian worlds of South
            Florida and the Jackson Hole area. Wherever the season leads, the
            program stays centered on horses, riders and the quality of the
            partnership.
          </p>
        </div>
      </div>
    </section>
  );
}
