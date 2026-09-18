import Link from "next/link";
import type { ReactNode } from "react";
import { HorseMedia } from "@/components/media/HorseMedia";

type ImageCTAProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  href: string;
  label: string;
  image: {
    src: string;
    alt: string;
    focalDesktop?: string;
    focalMobile?: string;
  };
};

export function ImageCTA({
  eyebrow,
  title,
  children,
  href,
  label,
  image,
}: ImageCTAProps) {
  return (
    <section className="py-24 md:py-36">
      <div className="ls-container">
        <div className="grid overflow-hidden rounded-[18px] bg-[var(--ls-forest)] text-[var(--ls-cream)] lg:grid-cols-[.9fr_1.1fr]">
          <HorseMedia
            src={image.src}
            alt={image.alt}
            ratio="portrait"
            focalDesktop={image.focalDesktop}
            focalMobile={image.focalMobile}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="min-h-[380px] lg:min-h-full"
          />
          <div className="flex flex-col justify-between p-8 md:p-14 lg:p-16">
            <div>
              <p className="ls-eyebrow text-white/55">{eyebrow}</p>
              <h2 className="ls-display text-[clamp(2.8rem,5vw,5rem)]">
                {title}
              </h2>
              <div className="mt-6 max-w-lg text-[15px] leading-7 text-white/70">
                {children}
              </div>
            </div>
            <div className="mt-10">
              <Link
                href={href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-[var(--ls-ink)] transition-colors hover:bg-[var(--ls-cream)]"
              >
                {label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
