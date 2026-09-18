import type { ReactNode } from "react";
import { HorseMedia } from "@/components/media/HorseMedia";
export function PageHero({
  eyebrow,
  title,
  children,
  image,
  variant = image ? "image" : "quiet",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image?: {
    src: string;
    alt: string;
    focalDesktop?: string;
    focalMobile?: string;
  };
  variant?: "image" | "quiet" | "split";
}) {
  if (variant === "image" && image)
    return (
      <section className="relative min-h-[82svh] overflow-hidden bg-[#102018] text-white">
        <HorseMedia
          src={image.src}
          alt={image.alt}
          ratio="cinematic"
          focalDesktop={image.focalDesktop}
          focalMobile={image.focalMobile}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full aspect-auto"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,12,.15),rgba(8,17,12,.08)_38%,rgba(8,17,12,.78)),linear-gradient(90deg,rgba(8,17,12,.52),transparent_68%)]" />
        <div className="ls-container relative z-10 flex min-h-[82svh] items-end pb-14 pt-36">
          <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="ls-eyebrow text-white/65">{eyebrow}</p>
              <h1 className="ls-display max-w-[1000px] text-[var(--type-hero)]">
                {title}
              </h1>
            </div>
            <div className="max-w-xl text-[15px] leading-7 text-white/72">
              {children}
            </div>
          </div>
        </div>
      </section>
    );

  if (variant === "split" && image)
    return (
      <section className="bg-[var(--ls-cream)] pt-28 md:pt-32">
        <div className="ls-container grid items-end gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="pb-14 lg:pb-20">
            <p className="ls-eyebrow">{eyebrow}</p>
            <h1 className="ls-display max-w-3xl text-[var(--type-page)]">
              {title}
            </h1>
            <div className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
              {children}
            </div>
          </div>
          <HorseMedia
            src={image.src}
            alt={image.alt}
            ratio="horse"
            focalDesktop={image.focalDesktop}
            focalMobile={image.focalMobile}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </section>
    );

  return (
    <section className="bg-[var(--ls-cream)] pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="ls-container grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="ls-eyebrow">{eyebrow}</p>
          <h1 className="ls-display max-w-4xl text-[var(--type-page)]">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
          {children}
        </p>
      </div>
    </section>
  );
}
