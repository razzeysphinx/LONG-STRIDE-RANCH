# Long Stride Ranch

Long Stride Ranch is a premium, horse-first client-acquisition website for a boutique English equestrian program serving South Florida and the Jackson Hole area. Long Stride Renewables is maintained as a distinct B2B branch without interrupting the core equestrian journey.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS 4 and Next/Font
- Next/Image with local optimized WebP photography
- Resend-ready server-side inquiry route

## Project architecture

- `src/app` — routes, metadata, API endpoint, sitemap, robots, 404
- `src/components` — shared layout, sections and the interactive inquiry form
- `src/data` — verified horse, team, service and testimonial-ready data
- `public/images` — optimized authentic Long Stride imagery
- `scripts/optimize-images.mjs` — image derivative workflow

## Development

```bash
npm install
npm run dev
```

## Commands

- `npm run build` — create a production build
- `npm run start` — run that production build
- `npm run typecheck` — TypeScript validation
- `npm run lint` — ESLint validation
- `npm run format` / `npm run format:check` — Prettier formatting
- `npm run optimize:images` — regenerate WebP derivatives from approved source assets

## Environment

Copy `.env.example` to `.env.local` for local development. Configure the same values in Vercel for production:

```text
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
INQUIRY_FROM_EMAIL=
INQUIRY_TO_EMAIL=
```

The inquiry route sends through Resend only when `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` are configured. Otherwise the client gives a direct-email fallback rather than silently losing the inquiry.

## Image workflow

Use owner-approved Long Stride imagery before any stock asset. Keep source files outside the public site, run `npm run optimize:images`, and use the resulting semantic public paths through Next/Image. Every image needs an intentional crop, stable dimensions and concise, honest alt text.

## Horse data workflow

Add verified horses in `src/data/horses.ts`. Dynamic sales profiles are statically generated from that data. Never add a horse name, price, height, breed, age, results or availability unless it is owner-approved.

## Content rules

Do not invent boarding amenities, schedules, trainer credentials, testimonials, awards, Renewables metrics or commercial claims. Mark missing internal content with `TODO(owner-confirmation)` comments only—never expose them to visitors.

## SEO and deployment

The app provides route metadata, canonical links, OpenGraph/Twitter data, an Organization schema, redirects from legacy HTML URLs, and dynamic sitemap/robots endpoints. Deploy to Vercel with the environment variables above.
