import { CTA } from "@/components/sections/CTA";
import { HorseMedia } from "@/components/media/HorseMedia";
import { PageHero } from "@/components/sections/PageHero";
import { TeamEditorial } from "@/components/sections/TeamEditorial";
import { media } from "@/data/media";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "About",
  description: "Meet the people and philosophy behind Long Stride Ranch.",
  path: "/about",
  image: media.danielleRiding.src,
});
export default function AboutPage() {
  const [danielle, sam] = team;
  return (
    <main id="main">
      <PageHero
        eyebrow="About Long Stride"
        title="The people behind the program."
        image={{
          ...media.danielleRiding,
          focalDesktop: media.danielleRiding.focal.desktop,
          focalMobile: media.danielleRiding.focal.mobile,
        }}
      >
        Long Stride brings equestrian experience, operational care and a
        personal standard of service together around every horse and rider.
      </PageHero>
      <section className="ls-section bg-[var(--ls-cream)]">
        <div className="ls-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <p className="ls-eyebrow">Philosophy</p>
          <div>
            <h2 className="ls-display text-[clamp(3.8rem,6vw,6.6rem)]">
              Care begins with paying attention.
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
              The work at Long Stride starts with the individual horse, the
              rider beside them, and the practical details that help a
              partnership develop over time.
            </p>
          </div>
        </div>
      </section>
      <TeamEditorial
        name={danielle.name}
        role={danielle.role}
        bio={danielle.bio}
        image={media.danielleRiding.src}
        alt={media.danielleRiding.alt}
        focalDesktop={media.danielleRiding.focal.desktop}
        focalMobile={media.danielleRiding.focal.mobile}
      />
      <section className="relative min-h-[440px] overflow-hidden">
        <HorseMedia
          {...media.competition}
          ratio="cinematic"
          focalDesktop={media.competition.focal.desktop}
          focalMobile={media.competition.focal.mobile}
          sizes="100vw"
          className="absolute inset-0 h-full w-full aspect-auto"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,12,.55),transparent)]" />
        <div className="ls-container relative z-10 flex min-h-[440px] items-end py-14 text-white">
          <p className="ls-display max-w-3xl text-[clamp(3.5rem,6vw,6.6rem)]">
            Every detail returns to the horse.
          </p>
        </div>
      </section>
      <TeamEditorial
        name={sam.name}
        role={sam.role}
        bio={sam.bio}
        image={media.samHorse.src}
        alt={media.samHorse.alt}
        focalDesktop={media.samHorse.focal.desktop}
        focalMobile={media.samHorse.focal.mobile}
        reverse
      />
      <section className="pb-10">
        <div className="ls-container border-t border-[var(--ls-line)] py-8">
          <p className="ls-eyebrow">Experience</p>
          <p className="max-w-3xl text-[17px] leading-8 text-[var(--ls-muted)]">
            Long Stride brings riding, operations and hospitality together to
            make the experience around every horse feel considered.
          </p>
        </div>
      </section>
      <CTA
        eyebrow="Work with Long Stride"
        title="Find the right place to begin."
      >
        Start with an inquiry about training, boarding, horse sales or a visit.
      </CTA>
    </main>
  );
}
