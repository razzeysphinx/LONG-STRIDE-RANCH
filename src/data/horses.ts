import type { Horse } from "@/types/horse";

export const horses: Horse[] = [
  {
    id: "manuka-honey",
    slug: "manuka-honey",
    name: "Manuka Honey",
    status: "available",
    disciplines: ["Children's Hunter Pony"],
    summary:
      "Fancy, brave and kind, with great kid miles, lovely changes and beautiful form over fences.",
    description:
      "Known as Roa, Manuka Honey is represented by Long Stride as a Children's Hunter Pony. Contact Long Stride for current availability and a considered conversation about fit.",
    images: ["/images/sales/manuka-honey.webp"],
    featured: true,
  },
];

export const getHorseBySlug = (slug: string) =>
  horses.find((horse) => horse.slug === slug);
