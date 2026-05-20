---
name: hesperus-design
description: Use this skill to generate well-branded interfaces and assets for Hesperus — a retro-CRT design system built on Heimdall UI. Covers vintage-terminal palettes (warm beige paper / charcoal terminal), Space Mono type, 2px borders, hover-flip buttons, square corners, and BEM-styled Heimdall components.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `HEIMDALL_MAPPING.md` — the per-component BEM class + token contract, `preview/` cards, `ui_kits/web-app/` for a complete dashboard pattern).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out (the grid backgrounds in `public/`, Space Mono via Google Fonts) and create static HTML files for the user. If working on production code, install `@tinkermonkey/hesperus-theme` and import it directly — no provider needed:

```js
import '@tinkermonkey/hesperus-theme';
// CSS auto-applies to any element using Heimdall BEM class names
```

If the user invokes this skill without other guidance, ask them what they want to build, ask a couple of questions about light/dark, density, and which components matter, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

**Hesperus rules in one breath:** Space Mono only, uppercase headings with wide tracking, 11px body, **2px borders everywhere**, square corners (3–6px radii max), hover **flips** background↔foreground, no shadows, no rings, no emoji. Muted accents (olive / brick / gold / dusty blue). The CRT grid SVG is the only "decoration." Voice is witty, terminal-flavored, deadpan.
