# Horse-first rebuild report

## Implemented

1. Added an audited media registry in `src/data/media.ts` with human alt text and responsive focal points.
2. Added `HorseMedia`, shared crop ratios, reduced-saturation image treatment, responsive focal behavior, and subtle hover motion.
3. Rebuilt `PageHero` to support image-led, split and quiet variants.
4. Reworked the home page around horse moments, featured Manuka Honey, quiet work, personal team story, and a small renewables teaser.
5. Rebuilt Our Horses, Horse Sales, and Manuka Honey profile into image-first editorial presentations.
6. Rebuilt Training, Boarding, About, Contact, and Renewables with distinct emotional and practical roles.
7. Added short conditional inquiry flows and editorial inquiry selectors.
8. Added `scripts/audit-images.mjs` and `npm run audit:images`.
9. Kept the mobile inquiry control from obscuring the contact form or footer using `IntersectionObserver`.
10. Routed every conditional inquiry field, including organization and project context, through to the email notification.
11. Removed unverified Manuka Honey details so sales copy only reflects the supplied information.

## Accessibility and mobile

- All primary images use descriptive, non-keyword-stuffed alt text.
- Native links, headings, labels, focus visibility, live submission status, and reduced-motion support are retained.
- Images use a 4:5 mobile-first crop where appropriate, with separate focal points in the media registry.
- Existing responsive navigation is retained, and the mobile inquiry control yields to the contact form and footer.

## Image audit

All supplied images are WebP. Masters range from 166 KB to 625 KB. The hero and action masters are 2200px wide; portraits range from 1073px to 1920px wide. They are reasonable responsive masters for Next/Image; no image was upscaled or replaced.

## Owner content still needed

- Additional profile photography / action images for Manuka Honey.
- Verified details before publishing additional horse facts, availability language, or facilities details.
- Authentic location, barn, grooming, turnout, and working-detail photography.

## Validation

- `npm.cmd run format` — passed
- `npm.cmd run audit:images` — passed
- `npm.cmd run format:check` — passed
- `npm.cmd run typecheck` — passed
- `npm.cmd run lint` — passed
- `npm.cmd run build` — passed
