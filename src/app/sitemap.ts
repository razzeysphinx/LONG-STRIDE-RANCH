import type { MetadataRoute } from "next";
import { horses } from "@/data/horses";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/training",
    "/boarding",
    "/horses",
    "/horse-sales",
    "/renewables",
    "/contact",
  ];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...horses.map((horse) => ({
      url: `${siteConfig.url}/horse-sales/${horse.slug}`,
      lastModified: new Date(),
    })),
  ];
}
