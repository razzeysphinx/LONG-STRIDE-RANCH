import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public", "images");
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }
  return files;
}
for (const file of await walk(root)) {
  if (!/\.(webp|avif|jpg|jpeg|png)$/i.test(file)) continue;
  const [stats, meta] = await Promise.all([
    fs.stat(file),
    sharp(file).metadata(),
  ]);
  console.log({
    file: path.relative(process.cwd(), file),
    width: meta.width,
    height: meta.height,
    sizeKB: Math.round(stats.size / 1024),
  });
}
