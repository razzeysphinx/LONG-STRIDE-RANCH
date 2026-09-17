# Premium rebuild report

## 1. Baseline

Migration began from clean commit `63b2c57` on the safety branch `premium-rebuild-v2`. The prior site was a dependency-free static HTML implementation with duplicated page chrome, local JPG source assets, and a mailto-based inquiry flow.

## 2–4. Architecture and file migration

The site now uses Next.js 16 App Router, TypeScript, Tailwind CSS 4, Next/Image, Next/Font, server components by default, and a static-generated dynamic horse route. Shared layout and data live under `src/components`, `src/data`, `src/lib`, and `src/types`.

Legacy HTML pages, `style.css`, `site.js`, manual `robots.txt`, manual `sitemap.xml`, and duplicate source JPGs were removed only after production build validation. Optimized image outputs are in `public/images`.

## 5–7. New files and images

Created foundation/configuration, App Router routes, `/api/inquiry`, reusable layout/section/form components, horse/team/testimonial data, image optimizer, environment example, redirects/security headers, dynamic sitemap/robots, custom 404, and developer documentation.

| Source JPG | Source size | Optimized WebP |
| --- | ---: | ---: |
| hero-jumping.jpg | 913 KB | 614 KB |
| danielle-harrity.jpg | 436 KB | 335 KB |
| sam-harrity.jpg | 215 KB | 170 KB |
| horse-care.jpg | 542 KB | 478 KB |
| horse-portrait.jpg | 511 KB | 337 KB |
| competition.jpg | 372 KB | 230 KB |
| show-jumping.jpg | 977 KB | 640 KB |
| sales-manuka-honey.jpg | 929 KB | 625 KB |

## 8–11. Page and conversion changes

Each page now has a distinct composition and purpose. The home page leads with available horses, context-specific service paths, and a featured Manuka Honey CTA. Our Horses is an editorial image gallery with no invented names. Horse Sales uses typed horse data and a statically generated profile route. Mobile receives a low-profile inquiry CTA after moving beyond the hero.

## 12. Contact form status

The primary form posts to `/api/inquiry`. It validates required values, uses a honeypot, adapts for horse purchase, calls Resend with environment configuration, and gives an explicit direct-email fallback when delivery is unavailable. A configured Resend key and verified from address are required before launch.

## 13–17. SEO, accessibility, performance, responsive QA and redirects

- Page metadata includes titles, descriptions, canonicals, OpenGraph, and Twitter metadata.
- Conservative Organization JSON-LD, dynamic robots and sitemap are included.
- Keyboard-operable menu, focus handling, skip link, labelled form fields, live form status, reduced-motion support, descriptive alt text, and responsive tap targets are included.
- Next/Image uses local optimized images, defined image containers and appropriate priority placement; Next/Font self-hosts the two brand typefaces on build.
- Layouts use mobile-first grids and fluid type at 360, 390, 430, 768, 1024, 1440 and 1920 breakpoint ranges.
- Legacy `.html` URLs permanently redirect through `next.config.ts` to clean App Router routes.

## 18–19. Owner confirmations and environment

Still required: current inventory beyond Manuka Honey, boarding/training specifics and availability, renewables metrics/project facts, image reuse confirmation, and the Resend environment values in `.env.example`.

## 20. Exact validation results

Passed:

```text
npm run optimize:images
npm run format
npm run typecheck
npm run lint
npm run format:check
npm run build
```

The production build generated `/`, `/about`, `/training`, `/boarding`, `/horses`, `/horse-sales`, `/horse-sales/manuka-honey`, `/renewables`, `/contact`, `/robots.txt`, and `/sitemap.xml` successfully.
