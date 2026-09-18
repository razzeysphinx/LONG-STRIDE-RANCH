# Premium UX audit

## Summary

The existing rebuild has a clear equestrian point of view, shared media primitives, and a sound responsive foundation. This refinement focuses on making every image earn its placement, reducing visual repetition, and giving the visitor a more deliberate route from horse to inquiry.

## Findings

| Area                    | Finding                                                                                              | Refinement direction                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Homepage featured horse | The Manuka Honey story used a generic competition photograph.                                        | Use the Manuka Honey asset exclusively for this horse-specific moment.                        |
| Image reuse             | Hero photography was repeated immediately in Training, Boarding, Contact, About, and Our Horses.     | Separate image roles and use typography or a different authentic image after each hero.       |
| Homepage pacing         | The people story appeared after the seasonal story, and an Our Horses bridge was absent.             | Put people before seasonal context and add an explicit Our Horses teaser.                     |
| Team representation     | The home team teaser showed Sam alone while discussing Danielle and Sam together.                    | Use both authentic portraits in a balanced editorial composition.                             |
| Horse profile           | The sales profile was technically correct but too close to a database-detail layout.                 | Create a horse-first split hero and keep conditional sections ready for verified future data. |
| Typography              | Strong display type was used frequently at near-hero scale.                                          | Add type tokens and reserve the largest scale for page-level moments.                         |
| Spacing                 | Narrative breaks were occasionally compressed relative to the editorial imagery.                     | Introduce spacing tokens and a consistent section rhythm.                                     |
| Contact conversion      | The hero image appeared again inside the contact body, increasing length without adding information. | Keep the emotional image in the hero and focus the body on details and the adaptive form.     |
| Mobile utility CTA      | The inquiry control was already observer-aware.                                                      | Retain that behavior and add safe-area spacing.                                               |

## Image placement decisions

- `hero-jumping.webp`: home hero only.
- `show-jumping.webp`: Training hero and the first Our Horses story image; not repeated inside Training.
- `horse-care.webp`: Boarding hero and Horse Moments; not duplicated within Boarding or Contact body content.
- `horse-portrait.webp`: Our Horses hero and later quiet storytelling only.
- `competition.webp`: Our Horses ring story and About hero/moment; never used to identify Manuka Honey.
- `manuka-honey.webp`: Horse Sales, Manuka profile, and homepage featured horse only.
- Danielle and Sam portraits: their own About editorial stories; both appear in the home team teaser.

## Constraints retained

No stock photography, unsupported horse details, facility claims, pricing, schedules, or renewables metrics are introduced. The existing metadata, keyboard navigation, reduced-motion behavior, and responsive image delivery remain in place.
