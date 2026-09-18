export type HorseStatus = "available" | "sold" | "private";

export type HorseImage = {
  src: string;
  alt: string;
  focalDesktop?: string;
  focalMobile?: string;
  ratio?: "portrait" | "horse" | "action" | "sales" | "landscape" | "square";
};

export type HorseVideo = {
  url: string;
  title: string;
};

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
  trainingHistory?: string;
  showExperience?: string;
  images: HorseImage[];
  videos?: HorseVideo[];
  featured?: boolean;
}
