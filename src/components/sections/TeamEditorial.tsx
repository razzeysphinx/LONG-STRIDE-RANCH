import { HorseMedia } from "@/components/media/HorseMedia";

type TeamEditorialProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  focalDesktop?: string;
  focalMobile?: string;
  reverse?: boolean;
};
export function TeamEditorial({
  name,
  role,
  bio,
  image,
  alt,
  focalDesktop,
  focalMobile,
  reverse = false,
}: TeamEditorialProps) {
  return (
    <section className="ls-section">
      <div
        className={`ls-container grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <HorseMedia
          src={image}
          alt={alt}
          ratio="portrait"
          focalDesktop={focalDesktop}
          focalMobile={focalMobile}
        />
        <div className="max-w-xl">
          <p className="ls-eyebrow">{role}</p>
          <h2 className="ls-display text-[clamp(3.8rem,6vw,6.7rem)]">{name}</h2>
          <p className="mt-7 text-[15px] leading-7 text-[var(--ls-muted)]">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
}
