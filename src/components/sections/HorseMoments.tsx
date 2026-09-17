import { HorseMedia } from "@/components/media/HorseMedia";
import { media } from "@/data/media";

export function HorseMoments() {
  return (
    <section className="ls-section overflow-hidden">
      <div className="ls-container">
        <div className="mb-14 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <p className="ls-eyebrow">Horse moments</p>
          <div>
            <h2 className="ls-display text-[clamp(3.8rem,7vw,7.8rem)]">
              The moments between the results.
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
              Trust is built long before a round begins: in the quiet work, the
              repetition, the attention, and the relationship between horse and
              rider.
            </p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-12">
          <HorseMedia
            {...media.horseCare}
            ratio="portrait"
            focalDesktop={media.horseCare.focal.desktop}
            focalMobile={media.horseCare.focal.mobile}
            className="md:col-span-5 md:mt-24"
          />
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
            className="md:col-span-4"
          />
          <div className="flex items-end bg-[var(--ls-forest)] p-8 text-[var(--ls-cream)] md:col-span-8 md:min-h-[480px] md:p-12">
            <div>
              <p className="ls-eyebrow text-white/55">The relationship</p>
              <blockquote className="ls-display max-w-4xl text-[clamp(3.2rem,5.5vw,6rem)]">
                A good program notices the horse.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
