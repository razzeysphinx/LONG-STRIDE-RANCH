# Long Stride Ranch

Premium editorial equestrian website built with Next.js App Router, TypeScript, Tailwind CSS, Next/Image, and Next/Font.

## Setup

```bash
npm install
npm run optimize:images
npm run dev
```

## Commands

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — production server
- `npm run typecheck` — TypeScript validation
- `npm run lint` — lint checks
- `npm run format` / `format:check` — formatting
- `npm run optimize:images` — create WebP derivatives from `assets/images`

## Environment

Copy `.env.example` to `.env.local`. `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` enable online inquiry delivery through Resend. Without them, the form reports the email fallback instead of silently dropping leads.

## Content rules

Only publish owner-verified horse facts, amenities, pricing, competition claims, availability, and Renewables metrics. Add horses through `src/data/horses.ts`; dynamic profiles are generated from that data.
