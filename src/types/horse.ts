export type HorseStatus = "available" | "sold" | "private";

export interface Horse {
  id: string;
  slug: string;
  name: string;
  status: HorseStatus;
  disciplines: string[];
  summary: string;
  description: string;
  images: string[];
  featured?: boolean;
}
