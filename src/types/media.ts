export type MediaTruth = "documentary" | "editorial" | "informational";

export type MediaFocalPoint = {
  desktop: string;
  tablet?: string;
  mobile: string;
};

export type SiteMedia = {
  src: string;
  alt: string;
  truth: MediaTruth;
  focal: MediaFocalPoint;
  subject?: string;
  primaryUse?: string[];
  secondaryUse?: string[];
  prohibitedUse?: string[];
};
