export type HorseStatus = "available" | "sold" | "private";

export interface HorseImage {
  src: string;
  alt: string;
  focalDesktop?: string;
  focalMobile?: string;
  ratio?: "portrait" | "horse" | "action" | "sales" | "landscape" | "square";
}

export interface HorseVideo {
  url: string;
  title: string;
}

export interface Horse {
  id: string;
  slug: string;
  name: string;
  nickname?: string;
  status: HorseStatus;
  age?: number;
  gender?: string;
  breed?: string;
  height?: string;
  color?: string;
  disciplines: string[];
  summary: string;
  description: string;
  temperament?: string;
  idealRider?: string;
  showExperience?: string;
  trainingHistory?: string;
  images: HorseImage[];
  videos?: HorseVideo[];
  featured?: boolean;
}
