export type HorseStatus = "available" | "sold" | "private";

export interface HorseImage {
  src: string;
  alt: string;
}

export interface Horse {
  id: string;
  slug: string;
  name: string;
  status: HorseStatus;
  disciplines: string[];
  summary: string;
  description: string;
  images: HorseImage[];
  featured?: boolean;
}
