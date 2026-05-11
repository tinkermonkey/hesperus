---
name: hesperus-design
description: Use this skill to generate well-branded interfaces and assets for Hesperus — a retro-CRT design system on top of Flowbite React. Covers vintage-terminal palettes (warm beige paper / charcoal terminal), Space Mono type, 2px borders, hover-flip buttons, square corners, and 60+ themed Flowbite components.
user-invocable: true
---

All design assets live under `design/design_handoff_hesperus/system/` in the repo root. Start by reading that directory's `README.md` for brand context, then consult `FLOWBITE_MAPPING.md` for the per-component token + state contract. Supporting files:

- `colors_and_type.css` — all CSS var tokens (color, type, spacing, motion, density)
- `src/theme.js` — full Flowbite React theme object
- `preview/*.html` — visual target cards for every component
- `public/grid-background-{light,dark}.svg` — CRT grid backgrounds
- `ui_kits/web-app/` — complete dashboard pattern (sidebar, tables, modals)

If creating visual artifacts (slides, mocks, throwaway prototypes), use the grid backgrounds from `public/` and load Space Mono via Google Fonts, then output static HTML files. If working on production code with `flowbite-react`, install `@tinkermonkey/hesperus-theme` and wrap your app in `<Flowbite theme={{ theme: hesperusTheme }}>`.

If the user invokes this skill without other guidance, ask them what they want to build, ask a couple of questions about light/dark mode, density, and which components matter, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

**Hesperus rules in one breath:** Space Mono only, uppercase headings with wide tracking, 11px body, **2px borders everywhere**, square corners (3–6px radii max), hover **flips** background↔foreground, no shadows, no rings, no emoji. Muted accents (olive / brick / gold / dusty blue). The CRT grid SVG is the only "decoration." Voice is witty, terminal-flavored, deadpan.
