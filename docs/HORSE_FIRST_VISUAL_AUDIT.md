# Horse-first visual audit

## Findings and decisions

| Asset                   |  Dimensions | Previous use / concern                                           | Rebuild decision                                              |
| ----------------------- | ----------: | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| `hero-jumping.webp`     | 2200 × 1760 | Home-only full bleed without explicit focal control              | Home cinematic hero; desktop 54% 48%, mobile 62% 43%          |
| `danielle-harrity.webp` | 1512 × 2016 | Repeated in rounded cards                                        | Training / About portrait; 50% 38%, mobile 50% 30%            |
| `sam-harrity.webp`      | 1073 × 1430 | Corporate-style team card                                        | Editorial team story; 50% 42%, mobile 50% 36%                 |
| `show-jumping.webp`     | 2200 × 2357 | Action image presented with arbitrary heights                    | Training hero / action crop; 54% 48%, mobile 60% 42%          |
| `horse-care.webp`       | 1512 × 2016 | Repeated framed image                                            | Boarding and contact; 50% 44%, mobile 52% 36%                 |
| `competition.webp`      | 1703 × 2560 | Tall composition used as a generic background                    | Featured horse / horse story; 54% 48%, mobile 58% 42%         |
| `horse-portrait.webp`   | 1920 × 2560 | Used for seasonal geography despite not being geographic imagery | Portrait / horses content; 50% 38%, mobile 50% 28%            |
| `manuka-honey.webp`     | 2200 × 1760 | Sales card repeated a broad crop                                 | Sales hero / editorial horse profile; 50% 45%, mobile 57% 38% |

## Page composition changes

- Home now follows an emotional horse-first sequence: hero, program paths, featured horse, horse moments, quiet work, seasonal context, people, contact, and a restrained renewables teaser.
- About replaces equal employee cards with alternating editorial stories.
- Training is image-led and uses a simple observational rhythm instead of a proprietary-method claim.
- Boarding uses calm editorial rows rather than a card grid.
- Our Horses is a varied image essay; Horse Sales and Manuka Honey prioritize the individual horse.
- Renewables remains text-led and visually distinct from the equestrian experience.

## Crop and ratio system

`HorseMedia` applies intentional ratios: cinematic (4:5 mobile / 16:9 desktop), action (4:5 / 3:2), portrait (4:5), horse (4:5 / 5:6), square, and landscape (4:5 / 3:2). The shared media registry supplies desktop and mobile focal positions, with muted image treatment and a small hover scale.

## Repetition resolved

The rebuild removes repeated `min-h` image wrappers from primary editorial areas, removes most 24px image corners, and gives each asset a distinct narrative job. Remaining rounded panels are utilities such as the contact form and CTA.
