import type { Horse } from "@/types/horse";

export const horses: Horse[] = [
  {
    id: "manuka-honey",
    slug: "manuka-honey",
    name: "Manuka Honey",
    status: "available",
    disciplines: ["Children's Hunter Pony"],
    summary:
      "A Children's Hunter Pony described by Long Stride as fancy, brave and kind.",
    description:
      "Manuka Honey is represented by Long Stride as a Children's Hunter Pony. Contact Long Stride for current availability and a considered conversation about fit.",
    images: [
      {
        src: "/images/sales/manuka-honey.webp",
        alt: "Manuka Honey jumping in the show ring",
      },
    ],
    featured: true,
  },
];

export const getHorseBySlug = (slug: string) =>
  horses.find((horse) => horse.slug === slug);
