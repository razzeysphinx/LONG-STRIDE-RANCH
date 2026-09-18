import { HorseMedia } from "@/components/media/HorseMedia";
import { media } from "@/data/media";

export function SeasonalStory() {
  return (
    <section className="ls-section bg-[var(--ls-cream)]">
      <div className="ls-container grid items-center gap-8 lg:grid-cols-[.88fr_1.12fr]">
        <HorseMedia
          {...media.horseCare}
          ratio="portrait"
          focalDesktop={media.horseCare.focal.desktop}
          focalMobile={media.horseCare.focal.mobile}
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div className="px-1 lg:px-12">
          <p className="ls-eyebrow">Wherever the season leads</p>
          <h2 className="ls-display text-[clamp(3.8rem,6vw,6.4rem)]">
            Different landscapes. The same attention to horse and rider.
          </h2>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
            Wherever the work leads, the program stays centered on horses,
            riders and the quality of the partnership.
          </p>
        </div>
      </div>
    </section>
  );
}
