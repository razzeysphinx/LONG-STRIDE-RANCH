import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { TeamEditorial } from "@/components/sections/TeamEditorial";
import { media } from "@/data/media";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "Meet the people and philosophy behind Long Stride Ranch.",
  path: "/about",
  image: media.competition.src,
});

export default function AboutPage() {
  const [danielle, sam] = team;

  return (
    <main id="main">
      {/* 01 HORSE / RIDER HERO */}
      <PageHero
        eyebrow="About Long Stride"
        title="The people behind the program."
        image={{
          ...media.competition,
          focalDesktop: media.competition.focal.desktop,
          focalMobile: media.competition.focal.mobile,
        }}
      >
        Long Stride brings equestrian experience, operational care and a
        personal standard of service together around every horse and rider.
      </PageHero>

      {/* 02 PHILOSOPHY */}
      <section className="bg-[var(--ls-cream)] py-24 md:py-36">
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

      {/* 03 DANIELLE STORY */}
      <TeamEditorial
        name={danielle.name}
        role={danielle.role}
        bio={danielle.bio}
        image={media.danielleRiding.src}
        alt={media.danielleRiding.alt}
        focalDesktop={media.danielleRiding.focal.desktop}
        focalMobile={media.danielleRiding.focal.mobile}
      />

      {/* 04 HORSE MOMENT */}
      <section className="relative min-h-[480px] overflow-hidden md:min-h-[600px]">
        <FullBleedMedia
          {...media.heroJumping}
          focalDesktop={media.heroJumping.focal.desktop}
          focalMobile={media.heroJumping.focal.mobile}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,9,.12)_0%,rgba(6,14,9,.7)_100%)]" />
        <div className="ls-container relative z-10 flex min-h-[480px] items-end py-12 text-white md:min-h-[600px] md:py-16">
          <div>
            <p className="ls-eyebrow text-white/60">The standard</p>
            <h2 className="ls-display max-w-4xl text-[var(--type-editorial)]">
              Every detail returns to the horse.
            </h2>
          </div>
        </div>
      </section>

      {/* 05 SAM STORY */}
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

      {/* 06 EXPERIENCE */}
      <section className="py-20 md:py-28">
        <div className="ls-container border-t border-[var(--ls-line)] pt-12">
          <p className="ls-eyebrow">Experience</p>
          <p className="max-w-3xl font-display text-2xl leading-relaxed text-[var(--ls-ink)] md:text-3xl">
            Long Stride brings riding, operations and hospitality together to
            make the experience around every horse feel considered.
          </p>
        </div>
      </section>

      {/* 07 INQUIRY */}
      <CTA
        eyebrow="Work with Long Stride"
        title="Find the right place to begin."
        href="/contact"
        label="Start an inquiry"
      >
        Start with an inquiry about training, boarding, horse sales or a visit.
      </CTA>
    </main>
  );
}
