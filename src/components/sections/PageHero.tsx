import type { ReactNode } from "react";
import { FullBleedMedia } from "@/components/media/FullBleedMedia";
import { HorseMedia } from "@/components/media/HorseMedia";

type PageHeroImage = {
  src: string;
  alt: string;
  focalDesktop?: string;
  focalMobile?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image?: PageHeroImage;
  variant?: "image" | "quiet" | "split";
};

export function PageHero({
  eyebrow,
  title,
  children,
  image,
  variant = image ? "image" : "quiet",
}: PageHeroProps) {
  if (variant === "image" && image) {
    return (
      <section className="relative min-h-[min(860px,82svh)] overflow-hidden bg-[#102018] text-white md:min-h-[min(900px,86svh)]">
        <FullBleedMedia
          src={image.src}
          alt={image.alt}
          focalDesktop={image.focalDesktop}
          focalMobile={image.focalMobile}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,9,.08)_0%,rgba(6,14,9,.07)_40%,rgba(6,14,9,.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,14,9,.38)_0%,transparent_67%)]" />
        <div className="ls-container relative z-10 flex min-h-[min(860px,82svh)] items-end pb-12 pt-32 md:min-h-[min(900px,86svh)] md:pb-16 md:pt-36">
          <div className="grid w-full gap-7 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="ls-eyebrow text-white/65">{eyebrow}</p>
              <h1 className="ls-display max-w-[950px] text-[clamp(4rem,8vw,8rem)]">
                {title}
              </h1>
            </div>
            <div className="max-w-[470px] pb-1 text-[15px] leading-7 text-white/72">
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split" && image) {
    return (
      <section className="bg-[var(--ls-cream)] pt-28 md:pt-32">
        <div className="ls-container grid items-end gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="pb-14 lg:pb-20">
            <p className="ls-eyebrow">{eyebrow}</p>
            <h1 className="ls-display max-w-3xl text-[clamp(4rem,7vw,7.3rem)]">
              {title}
            </h1>
            <div className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
              {children}
            </div>
          </div>
          <HorseMedia
            src={image.src}
            alt={image.alt}
            ratio="portrait"
            focalDesktop={image.focalDesktop}
            focalMobile={image.focalMobile}
            priority
            sizes="(max-width:1024px) 100vw, 55vw"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--ls-cream)] pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="ls-container grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="ls-eyebrow">{eyebrow}</p>
          <h1 className="ls-display max-w-4xl text-[clamp(4rem,7vw,7.5rem)]">
            {title}
          </h1>
        </div>
        <div className="max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
          {children}
        </div>
      </div>
    </section>
  );
}
