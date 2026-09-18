import type { MediaFocalPoint, MediaTruth, SiteMedia } from "@/types/media";

export type { MediaFocalPoint, MediaTruth, SiteMedia };
export type MediaItem = SiteMedia;

export const media = {
  heroJumping: {
    src: "/images/hero/hero-jumping.webp",
    alt: "Horse and rider competing over fences at Long Stride Ranch",
    truth: "documentary",
    subject: "Long Stride competition",
    focal: {
      desktop: "56% 47%",
      tablet: "58% 45%",
      mobile: "62% 42%",
    },
    primaryUse: ["home"],
    secondaryUse: ["about-brand-moment"],
    prohibitedUse: ["manuka", "boarding-care"],
  },
  danielleRiding: {
    src: "/images/team/danielle-harrity.webp",
    alt: "Danielle Harrity riding at Long Stride Ranch",
    truth: "documentary",
    subject: "Danielle Harrity",
    focal: {
      desktop: "50% 38%",
      tablet: "50% 34%",
      mobile: "50% 30%",
    },
    primaryUse: ["about-danielle"],
    secondaryUse: ["training", "home-team"],
    prohibitedUse: [],
  },
  samHorse: {
    src: "/images/team/sam-harrity.webp",
    alt: "Sam Harrity with a horse",
    truth: "documentary",
    subject: "Sam Harrity",
    focal: {
      desktop: "50% 42%",
      tablet: "50% 40%",
      mobile: "50% 36%",
    },
    primaryUse: ["about-sam"],
    secondaryUse: ["home-team"],
    prohibitedUse: [],
  },
  horseCare: {
    src: "/images/boarding/horse-care.webp",
    alt: "A quiet horse and rider moment",
    truth: "documentary",
    focal: {
      desktop: "50% 44%",
      tablet: "50% 40%",
      mobile: "52% 36%",
    },
    primaryUse: ["boarding"],
    secondaryUse: ["horse-moments", "our-horses-partnership", "seasonal-story"],
    prohibitedUse: ["horse-sales"],
  },
  horsePortrait: {
    src: "/images/horses/horse-portrait.webp",
    alt: "Portrait of a Long Stride horse",
    truth: "documentary",
    focal: {
      desktop: "50% 38%",
      tablet: "50% 34%",
      mobile: "50% 28%",
    },
    primaryUse: ["our-horses-hero"],
    secondaryUse: ["horses-teaser"],
    prohibitedUse: ["horse-sales-specific"],
  },
  competition: {
    src: "/images/horses/competition.webp",
    alt: "Horse and rider in competition",
    truth: "documentary",
    focal: {
      desktop: "54% 48%",
      tablet: "55% 45%",
      mobile: "58% 42%",
    },
    primaryUse: ["our-horses-ring"],
    secondaryUse: ["about-brand-moment", "training-action-moment"],
    prohibitedUse: ["manuka"],
  },
  showJumping: {
    src: "/images/training/show-jumping.webp",
    alt: "Horse and rider jumping in competition",
    truth: "documentary",
    focal: {
      desktop: "54% 48%",
      tablet: "56% 45%",
      mobile: "60% 42%",
    },
    primaryUse: ["training-hero"],
    secondaryUse: ["our-horses-work", "horse-moments"],
    prohibitedUse: [],
  },
  manukaHoney: {
    src: "/images/sales/manuka-honey.webp",
    alt: "Manuka Honey represented by Long Stride Ranch",
    truth: "documentary",
    subject: "Manuka Honey",
    focal: {
      desktop: "50% 45%",
      tablet: "52% 42%",
      mobile: "57% 38%",
    },
    primaryUse: ["horse-sales", "manuka-profile"],
    secondaryUse: ["home-featured-horse"],
    prohibitedUse: ["generic-training", "generic-boarding"],
  },
} as const satisfies Record<string, SiteMedia>;
