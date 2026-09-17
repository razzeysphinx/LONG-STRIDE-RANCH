# Premium equestrian rebuild

## 1–4. Baseline, issues, positioning and architecture

The legacy static site was migrated to a Next.js App Router application. It now positions Long Stride as a boutique English equestrian program: horsemanship, competition-minded development, care, hospitality and personal client relationships form the primary story. Renewables remains a visually connected but clearly secondary B2B path.

The prior static implementation repeated header/footer markup, used manual route files and lacked a scalable profile/data/form architecture. The new source uses server components by default, a small client header and inquiry form only where interaction is needed.

## 5–6. Routes and components

Routes: `/`, `/about`, `/training`, `/boarding`, `/horses`, `/horse-sales`, `/horse-sales/manuka-honey`, `/renewables`, `/contact`, plus `/api/inquiry`, sitemap, robots and 404.

The shared system includes header/mobile navigation, footer, CTA, page hero, section heading, service paths, seasonal story, team feature, inquiry form and typed horse/team/service data.

## 7–8. Images

Eight authentic Long Stride photographs were optimized to local WebP outputs and use Next/Image with responsive sizing. Source JPGs were 215–977 KB; outputs are 170–640 KB. The hero is priority-loaded while below-fold images defer loading.

## 9–16. UX and page changes

- The homepage now moves from a confident equestrian hero to differentiated services, a featured horse, horsemanship statement, Florida–Wyoming story and a trust-led people feature.
- Training uses active, image-led composition; Boarding remains deliberately calmer and more spacious.
- Our Horses is an editorial gallery without invented horse identity.
- Horse Sales is data-driven and Manuka Honey has an individual profile.
- About centers verified Danielle experience and Sam’s operational role.
- Renewables uses a separate process-led B2B composition with no unsupported metrics.

## 17. Form changes

The primary form posts to `/api/inquiry`, adapts for horse purchase questions, includes a honeypot and announces status. Resend sends only when configured; the direct Danielle email fallback is explicit when service configuration is absent.

## 18–20. SEO, accessibility and performance

Each public route has unique metadata, canonical path and social image. The application includes redirects from old `.html` URLs, Organization JSON-LD, dynamic sitemap and robots.

Accessibility includes skip navigation, visible focus, labelled controls, one primary H1 per page, keyboard menu close, focus return, reduced motion and responsive touch controls. Local Next/Image, next/font and low client-JS surface area support Core Web Vitals targets.

## 21–23. Required owner confirmation, environment and tests

Owner confirmation is still needed for all non-published horse inventory, availability, programs, amenities, pricing, schedule specifics and Renewables metrics. Configure `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL` and the production site URL in Vercel.

The following pass after the final refinement:

```text
npm run format
npm run format:check
npm run typecheck
npm run lint
npm run build
```
