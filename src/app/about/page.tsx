import Image from "next/image";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "About",
  description: "Meet the people and philosophy behind Long Stride Ranch.",
  path: "/about",
  image: "/images/team/danielle-harrity.webp",
});
export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About Long Stride"
        title="The people behind the program."
      >
        Long Stride brings equestrian experience, operational care and a
        personal standard of service together around every horse and rider.
      </PageHero>
      <section className="ls-section">
        <div className="ls-container">
          <div className="mb-12 border-y border-[var(--ls-line)] py-7 md:flex md:gap-16">
            <div>
              <strong className="font-display text-5xl">40 years</strong>
              <span className="ml-3 text-xs uppercase tracking-[.12em] text-[var(--ls-muted)]">
                Riding experience
              </span>
            </div>
            <div className="mt-4 md:mt-0">
              <strong className="font-display text-5xl">25 years</strong>
              <span className="ml-3 text-xs uppercase tracking-[.12em] text-[var(--ls-muted)]">
                Management + business development
              </span>
            </div>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {team.map((person) => (
              <article
                key={person.name}
                className="grid overflow-hidden rounded-[24px] border border-[var(--ls-line)] bg-white md:grid-cols-[.85fr_1.15fr]"
              >
                <div className="relative min-h-[430px]">
                  <Image
                    src={person.image}
                    alt={`${person.name} at Long Stride Ranch`}
                    fill
                    sizes="(max-width:1280px) 100vw, 40vw"
                    className="image-treatment object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="ls-eyebrow">{person.role}</p>
                  <h2 className="ls-display text-6xl">{person.name}</h2>
                  <p className="mt-6 text-sm leading-7 text-[var(--ls-muted)]">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
