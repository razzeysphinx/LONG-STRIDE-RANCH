import Image from "next/image";
import type { CSSProperties } from "react";

type FullBleedMediaProps = {
  src: string;
  alt: string;
  focalDesktop?: string;
  focalMobile?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function FullBleedMedia({
  src,
  alt,
  focalDesktop = "50% 50%",
  focalMobile,
  priority = false,
  sizes = "100vw",
  className = "",
  imageClassName = "",
}: FullBleedMediaProps) {
  return (
    <div
      className={`full-bleed-media absolute inset-0 overflow-hidden ${className}`}
      style={
        {
          "--full-bleed-desktop": focalDesktop,
          "--full-bleed-mobile": focalMobile ?? focalDesktop,
        } as CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`full-bleed-media__image object-cover ${imageClassName}`}
      />
    </div>
  );
}
