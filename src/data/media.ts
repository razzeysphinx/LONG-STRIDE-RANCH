export type MediaFocalPoint = {
  desktop: string;
  tablet?: string;
  mobile: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  focal: MediaFocalPoint;
  description?: string;
};

export const media = {
  heroJumping: {
    src: "/images/hero/hero-jumping.webp",
    alt: "Horse and rider competing over fences at Long Stride Ranch",
    focal: { desktop: "54% 48%", tablet: "57% 46%", mobile: "62% 43%" },
  },
  danielleRiding: {
    src: "/images/team/danielle-harrity.webp",
    alt: "Danielle Harrity riding at Long Stride Ranch",
    focal: { desktop: "50% 38%", tablet: "50% 34%", mobile: "50% 30%" },
  },
  samHorse: {
    src: "/images/team/sam-harrity.webp",
    alt: "Sam Harrity with a horse at Long Stride Ranch",
    focal: { desktop: "50% 42%", tablet: "50% 40%", mobile: "50% 36%" },
  },
  horseCare: {
    src: "/images/boarding/horse-care.webp",
    alt: "A quiet moment between rider and horse at Long Stride Ranch",
    focal: { desktop: "50% 44%", tablet: "50% 40%", mobile: "52% 36%" },
  },
  competition: {
    src: "/images/horses/competition.webp",
    alt: "Horse and rider competing at Long Stride Ranch",
    focal: { desktop: "54% 48%", tablet: "55% 45%", mobile: "58% 42%" },
  },
  horsePortrait: {
    src: "/images/horses/horse-portrait.webp",
    alt: "Portrait of a Long Stride Ranch horse",
    focal: { desktop: "50% 38%", tablet: "50% 34%", mobile: "50% 28%" },
  },
  showJumping: {
    src: "/images/training/show-jumping.webp",
    alt: "Horse and rider jumping in competition",
    focal: { desktop: "54% 48%", tablet: "56% 45%", mobile: "60% 42%" },
  },
  manukaHoney: {
    src: "/images/sales/manuka-honey.webp",
    alt: "Manuka Honey jumping in the show ring",
    focal: { desktop: "50% 45%", tablet: "52% 42%", mobile: "57% 38%" },
  },
} as const satisfies Record<string, MediaItem>;
