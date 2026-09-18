# Long Stride Ranch — Final Intent Audit

## 1. Page Roles & Strategic Intent

| Page                                      | Core Question                                                      | Current Role & Audit Assessment                                                        | Required Strategic Realignment                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home (`/`)**                            | What is Long Stride Ranch and where should I go next?              | Establishes brand, previews horses, trainers, program paths. Strong visual foundation. | Tighten hero CTA to 2 choices (View Available Horses / Meet Long Stride). Protect Manuka Honey documentary truth. Ensure distinct composition for Training, Boarding, and Sales cards.             |
| **About (`/about`)**                      | Who am I trusting?                                                 | Tells Danielle and Sam's stories, philosophy, and background.                          | Strictly documentary. Eliminate any risk of generic employee card styling. Feature Danielle and Sam with authentic working context and emotional horse moment.                                     |
| **Training (`/training`)**                | How does Long Stride think about development?                      | Highlights Danielle's approach, 4-stage rhythm, and action break.                      | Emphasize movement and progression. Maintain 70% documentary ratio. Ensure rhythm (Observe, Understand, Develop, Refine) is framed as philosophy, not a rigid proprietary trademark.               |
| **Boarding (`/boarding`)**                | Will my horse actually be noticed and cared for?                   | Calm, thoughtful layout focusing on daily care and environment.                        | Deepen sense of intimacy and calm. Use cream/paper palette. Allow anonymous tactile editorial imagery (reins, coat texture, gentle grooming), but strictly zero fake barn/stall imagery.           |
| **Our Horses (`/horses`)**                | Who are the horses behind Long Stride?                             | The Individual, The Partnership, and The Ring.                                         | Must remain 100% authentic Long Stride documentary imagery. No AI horses. Signature emotional storytelling connecting horse character with human trust.                                            |
| **Horse Sales (`/horse-sales`)**          | What is available and does Long Stride understand horse/rider fit? | Single verified horse (Manuka Honey) + "Finding a Fit" editorial journey.              | Maintain boutique exclusivity. Avoid ecommerce inventory cards or shopping cart patterns. Emphasize partnership matching (Horse, Rider, Temperament, Goals).                                       |
| **Horse Profile (`/horse-sales/[slug]`)** | Who is this individual horse?                                      | Manuka Honey profile with sales hero and summary.                                      | Expand into complete identity architecture: hero, meet story, conditional verified facts, conditional gallery, conditional video, and approved rider fit only. Hide unverified fields.             |
| **Renewables (`/renewables`)**            | What problem is Long Stride solving and how?                       | Pyrolysis waste-to-output explanation for B2B partners.                                | Technical precision and clarity. Replace static placeholder diagram with responsive coded `ProcessDiagram` (01 Stable waste, 02 Preparation, 03 Pyrolysis, 04 Outputs).                            |
| **Contact (`/contact`)**                  | Who should I speak with?                                           | Contact details + adaptive inquiry form.                                               | Conversation-first. Add intuitive intent selector pills. Dynamically adapt input fields for Horse Purchase, Training, Boarding, Visit, Renewables, and General Inquiry without cognitive overload. |

---

## 2. Image Usage & Documentary Truth Audit

All 8 authentic Long Stride photographic assets in `public/images/` were verified via Sharp:

- `hero-jumping.webp` (2200x1760, 600 KB) — Documentary: Long Stride horse over fence.
- `show-jumping.webp` (2200x2357, 625 KB) — Documentary: Training over fence.
- `horse-care.webp` (1512x2016, 467 KB) — Documentary: Quiet hands-on care at rest.
- `horse-portrait.webp` (1920x2560, 329 KB) — Documentary: Natural portrait.
- `competition.webp` (1703x2560, 224 KB) — Documentary: Horse & rider competing in the ring.
- `manuka-honey.webp` (2200x1760, 610 KB) — Documentary: Manuka Honey in competition.
- `danielle-harrity.webp` (1512x2016, 328 KB) — Documentary: Danielle schooling.
- `sam-harrity.webp` (1073x1430, 166 KB) — Documentary: Sam with horse.

### Duplication & Misleading Imagery Risks

1. **Manuka Honey Identity**: `competition.webp` must NEVER be attributed to Manuka Honey. Only `manuka-honey.webp` represents Manuka Honey.
2. **Consecutive Repetition**: `horse-portrait.webp` must not be repeated between adjacent sections (e.g. `HorsesTeaser` into `SeasonalStory`). `horseCare` is used for seasonal storytelling to represent the quiet everyday partnership across Wellington and Jackson Hole.
3. **Training Page Action Moment**: `show-jumping.webp` is the Training Hero; the subsequent action moment uses `competition.webp` ("Progress is built one ride at a time") to avoid repeating `show-jumping.webp`.

---

## 3. Crop, Focal Points & Media Architecture

- **Viewport Heroes**: Decoupled from `HorseMedia` aspect-ratio classes. Viewport heroes exclusively use `FullBleedMedia` with CSS variable-driven focal points (`--desktop-focal`, `--mobile-focal`).
- **Editorial Media**: `HorseMedia` strictly enforces semantic ratios (`action`, `portrait`, `horse`, `sales`, `square`, `landscape`).
- **Mobile Art Direction**: Mobile focal points ensure horse faces, eyes, and rider balance remain centered and visible across 360px–430px viewports without awkward cropping or head cutoffs.

---

## 4. Typography & Readability Audit

- **Issue**: Certain supporting captions, timestamps, and navigation labels sat at 9–10px, bordering on unreadable for high-end discerning clients.
- **Fix**:
  - `body`: 16px baseline.
  - Primary navigation: 11–12px font-bold uppercase tracking.
  - Eyebrows: 10–11px font-bold uppercase tracking.
  - Lead paragraphs: clamp(1.05rem, 1.4vw, 1.2rem) / 17–19px.
  - Footer links & copy: 13–15px text-white/75.
  - Buttons: 11–12px font-bold uppercase tracking, min-height 46px.

---

## 5. Spacing, Structure & CTA Diversification

- **Issue**: Repeated identical dark green rounded CTA boxes on consecutive pages created visual monotony and felt like a generic theme template.
- **Fix**: Introduce three distinct CTA patterns in `src/components/sections/cta/`:
  1. `DarkCTA`: Bold, high-contrast forest anchor (Training, Horse Sales).
  2. `EditorialCTA`: Refined typographic layout with underlined arrow link on cream/paper (About, Our Horses).
  3. `ImageCTA`: Quiet, tactile image-flanked panel (Boarding).
- **Corner Radii Hierarchy**:
  - Full-bleed media: `0px`
  - Editorial photography: `0–10px`
  - Forms: `16px`
  - Utility cards / CTA panels: `16–18px`
  - Buttons / Badges / Pills: `999px`

---

## 6. Factual Content Requiring Owner Confirmation

The following items remain strictly guarded under the Zero-Speculation policy:

- **Manuka Honey**: Age, height, breed, registration number, pedigree, and price are omitted until confirmed by owner.
- **Boarding**: Specific stall dimensions, barn amenities, and turnout acreage are not fabricated; copy focuses on daily attentive care, environment, and personal communication.
- **Training**: Packages, hourly rates, and clinics are omitted; framed around individual horse/rider development.
- **Renewables**: Exact biochar yields, machinery specs, and commercial pricing are left to direct B2B partnership dialogue.
