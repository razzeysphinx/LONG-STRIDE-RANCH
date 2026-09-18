import Image from "next/image";
import type { CSSProperties } from "react";

export type HorseMediaRatio =
  "action" | "portrait" | "horse" | "sales" | "square" | "landscape";

const ratioClasses: Record<HorseMediaRatio, string> = {
  action: "aspect-[4/5] md:aspect-[3/2]",
  portrait: "aspect-[4/5]",
  horse: "aspect-[4/5] md:aspect-[5/6]",
  sales: "aspect-[4/5] md:aspect-[5/6]",
  square: "aspect-square",
  landscape: "aspect-[4/5] md:aspect-[3/2]",
};

type HorseMediaProps = {
  src: string;
  alt: string;
  ratio?: HorseMediaRatio;
  focalDesktop?: string;
  focalMobile?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: boolean;
};

export function HorseMedia({
  src,
  alt,
  ratio = "horse",
  focalDesktop = "50% 50%",
  focalMobile,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  rounded = false,
}: HorseMediaProps) {
  return (
    <div
      className={`horse-media group relative overflow-hidden bg-[#dde0da] ${ratioClasses[ratio]} ${rounded ? "rounded-[10px]" : ""} ${className}`}
      style={
        {
          "--media-desktop": focalDesktop,
          "--media-mobile": focalMobile ?? focalDesktop,
        } as CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="horse-media__image object-cover"
      />
    </div>
  );
}
