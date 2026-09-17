import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.join(process.cwd(), "assets", "images");
const outputDir = path.join(process.cwd(), "public", "images");

const destinations = {
  "hero-jumping.jpg": "hero/hero-jumping.webp",
  "danielle-harrity.jpg": "team/danielle-harrity.webp",
  "sam-harrity.jpg": "team/sam-harrity.webp",
  "horse-care.jpg": "boarding/horse-care.webp",
  "horse-portrait.jpg": "horses/horse-portrait.webp",
  "competition.jpg": "horses/competition.webp",
  "show-jumping.jpg": "training/show-jumping.webp",
  "sales-manuka-honey.jpg": "sales/manuka-honey.webp",
};

for (const [source, destination] of Object.entries(destinations)) {
  const input = path.join(sourceDir, source);
  const output = path.join(outputDir, destination);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width: 2200, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(output);
  console.log(`Optimized ${source} → public/images/${destination}`);
}
