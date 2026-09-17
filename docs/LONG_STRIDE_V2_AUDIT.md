# Long Stride Ranch V2 audit

## Baseline

The baseline was a dependency-free static HTML build with eight root pages, a single stylesheet, shared DOM-injected navigation/footer, local JPG imagery, manual sitemap/robots files, and a mailto inquiry handoff. The work began from clean commit `63b2c57` on a dedicated `premium-rebuild-v2` branch.

## Migration decisions

- Migrate to Next.js App Router with TypeScript and Tailwind CSS; the static site had reached the practical maintenance limit for shared components, metadata, dynamic horse profiles, and a real inquiry endpoint.
- Preserve all authentic local JPG source assets until WebP derivatives were generated and validated.
- Preserve verified details only: Danielle’s biography and metrics, Manuka Honey’s summary, business address/contact information, and the conservative Renewables description.
- Replace mailto-first enquiry handling with an API route that uses Resend only when Vercel environment variables are configured, and returns a clear fallback otherwise.

## Baseline findings

- Duplicate production architecture will be removed only after Next.js route/build validation.
- The legacy site had clean visual identity but repeated page composition and no dynamic route/data layer.
- Source images were 170 KB–977 KB JPGs and required responsive Next/Image delivery plus optimized local derivatives.
- The legacy contact form had labels and basic validation but no server submission path.
