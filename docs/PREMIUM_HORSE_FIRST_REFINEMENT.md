# Premium horse-first refinement

## 1. Audit summary

The existing foundation was retained. This pass corrected image-to-story mismatches, removed immediate image duplication, clarified type and spacing hierarchy, and shortened the contact path.

## 2. Homepage changes

- The Featured Manuka Honey section now uses the Manuka Honey photograph.
- People now appear before seasonal context.
- Added an Our Horses bridge before the seasonal story.
- Strengthened the typography-led horsemanship pause and slightly opened the positioning section.

## 3. Image mismatch fixes

- Removed the generic competition image from the Manuka Honey feature.
- Moved competition photography to About and Our Horses contexts.
- Preserved horse-specific imagery for Horse Sales and the Manuka profile.

## 4. Image placements

- Home hero: `hero-jumping.webp`.
- Training hero / Our Horses work story: `show-jumping.webp`.
- Boarding hero / Horse Moments: `horse-care.webp`.
- Our Horses hero: `horse-portrait.webp`.
- About hero and Our Horses ring story: `competition.webp`.
- Horse Sales, Manuka profile, and home feature: `manuka-honey.webp`.

## 5. Crop and focal system

The existing focal-point registry remains the source of truth. Horse images retain responsive focal values through `HorseMedia`; Manuka’s image record now carries its own focal values for profile use.

## 6. Duplicate image removals

- Removed the repeated Training action image after the Training hero.
- Removed the immediate Boarding care image after the Boarding hero.
- Removed the repeated Contact care image from the contact body.
- Removed the immediate Our Horses portrait repeat.
- Replaced the duplicate About competition moment with a typography-led pause.

## 7. Typography and spacing

Added display-type and spacing tokens in `globals.css`. Page, hero, editorial, section, and subhead scales now have clear roles, while the shared section rhythm is capped at a more deliberate 128px.

## 8. Our Horses changes

The first body moment now moves from the hero portrait to a jumping image and a typography-led statement, followed by the competition/ring image.

## 9. Horse Sales and Manuka profile

The horse model now supports optional verified profile fields, focal points, image ratios, and future videos without rendering empty content. The Manuka profile is now a split, horse-first sales hero followed by a concise story and inquiry path. No unsupported facts were added.

## 10. Training, Boarding, About, and Contact

- Training keeps its action hero, eliminates the duplicate, and gives the editorial rhythm more space.
- Boarding keeps its quiet hero and turns care philosophy into a calmer typography-led section.
- About uses competition photography for the hero so Danielle’s portrait remains dedicated to her profile.
- Contact retains an image-led hero but now moves directly to details and the adaptive form.

## 11. Mobile and accessibility

The sticky inquiry control continues to hide around the menu, contact form, and footer. Its bottom position now respects device safe areas. Existing semantic landmarks, labels, focus treatment, Escape menu control, live form status, and reduced-motion support remain intact.

## 12. Performance and validation

All source images remain authentic WebP masters delivered through `next/image`. Image dimensions were audited; no assets were replaced or upscaled.

- `npm.cmd install` — passed
- `npm.cmd run image:audit` — passed
- `npm.cmd run format` — passed
- `npm.cmd run format:check` — passed
- `npm.cmd run typecheck` — passed
- `npm.cmd run lint` — passed
- `npm.cmd run build` — passed

## 13. Photography still needed

See `docs/PHOTOGRAPHY_WISHLIST.md`. The highest-value additions remain a Manuka head portrait and standing confirmation image, quiet hands-on care, working portraits of Danielle and Sam, authentic barn/turnout material, and owner-approved Wellington/Wyoming context.
