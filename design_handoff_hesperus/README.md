# Handoff: Hesperus Design System

## Overview

**Hesperus** is a retro-CRT design system built as a `flowbite-react` custom theme. It covers 60+ components in light + dark mode with a vintage-terminal aesthetic: warm beige paper / charcoal terminal palettes, Space Mono throughout, 2px borders everywhere, square-ish corners, and hover states that **flip** background↔foreground rather than tinting.

This handoff bundles the complete design-system source — tokens, the full Flowbite-React theme object, HTML preview cards for every component, and a clickable UI-kit dashboard — so a developer can finish implementing the system in code (the `@tinkermonkey/hesperus-theme` package).

## About the design files

The HTML files in this bundle (`system/preview/*.html`, `system/ui_kits/web-app/*.html`) are **design references** — visual targets showing the intended look and behavior of each component. They are not meant to be shipped or copied verbatim.

The implementation target is **React + flowbite-react + Tailwind v4**, exposed as a `customTheme` package. The job is to translate each preview card into the corresponding `flowbite-react` component slot in `system/src/theme.js`, using the CSS variables from `system/colors_and_type.css` (and `system/src/index.css`) as tokens. Do not hard-code colors — go through the tokens.

## Fidelity

**High-fidelity.** All colors, type sizes, spacing, border weights, radii, and motion values are final and live in the token files. Pixel-match the previews. Where a preview disagrees with `theme.js`, treat `theme.js` as the source of truth (the previews were derived from it).

## What's in this bundle

```
design_handoff_hesperus/
├── README.md                      ← this file (start here)
└── system/
    ├── README.md                  ← brand voice, visual foundations, iconography rules
    ├── SKILL.md                   ← short skill front-matter (one-breath summary)
    ├── FLOWBITE_MAPPING.md        ← ★ implementation contract — read this before writing code
    ├── colors_and_type.css        ← all design tokens as CSS vars (light + dark)
    ├── src/
    │   ├── theme.js               ← ★ full flowbite-react theme object — the source of truth
    │   ├── index.css              ← Tailwind v4 token block + dark-mode mapping
    │   ├── App.jsx                ← original component browser (reference impl)
    │   ├── main.jsx
    │   └── components/            ← ConnectionLabel.jsx, GraphNode.jsx (graph-viewer bits)
    ├── public/
    │   ├── grid-background-light.svg   ← CRT grid w/ baked-in fractal noise
    │   └── grid-background-dark.svg
    ├── preview/                   ← one HTML card per component / foundation — visual targets
    │   ├── colors-*.html
    │   ├── type-*.html
    │   ├── spacing-radii.html
    │   ├── foundations-{contrast,density,motion,states}.html
    │   ├── components-*.html      ← buttons, forms, modal, table, toast, …
    │   └── brand-{mark,grid}.html
    └── ui_kits/web-app/
        ├── index.html             ← assembled dashboard
        ├── chat.html              ← chat surface
        ├── graph.html             ← graph viewer
        ├── styles.css
        └── README.md
```

## Suggested implementation order

1. **Read** `system/README.md` (voice + visual foundations) and `system/FLOWBITE_MAPPING.md` (per-component contract) end-to-end before writing anything.
2. **Wire up tokens.** Drop `system/colors_and_type.css` (or the Tailwind v4 block in `system/src/index.css`) into the package so every component resolves through CSS variables. Verify light/dark toggling via `html.dark`.
3. **Port `theme.js`.** It already exists at `system/src/theme.js` as the full theme object — your job is to consume it from a published package (`@tinkermonkey/hesperus-theme`) rather than rebuild it. Audit each slot against `FLOWBITE_MAPPING.md` § 2.
4. **Validate against previews.** For each component, open the matching `system/preview/components-<name>.html` side-by-side with your React render. Pixel-match.
5. **Build the gaps.** `FLOWBITE_MAPPING.md` § 7 lists components without preview cards yet (Datepicker, FileInput, Rating, Drawer, full-page states, mobile sidebar). Build them and add a matching preview card.
6. **Run the acceptance checklist** (`FLOWBITE_MAPPING.md` § 6) per component before marking done.

## Design tokens (quick reference)

Full list lives in `system/colors_and_type.css`. Highlights:

**Color — light**
- `--retro-bg` `#efeed0` (warm beige paper)
- `--retro-fg` `#2c2416` (dark brown)
- `--retro-muted-fg`, `--retro-secondary`, `--retro-border`

**Color — dark** (`html.dark`)
- `--retro-bg` `#222627` (charcoal)
- `--retro-fg` `#d4ccaa` (warm gray)

**Accents (shared, muted on purpose)**
- olive `#5C7A28` · brick `#AA3322` · gold `#C4A232` · dusty blue `#5566AA`
- tertiary: orange `#CC6622` · purple `#7744AA` · cyan `#2E8B8B`

**Type** — Space Mono (Google Fonts), 400 + 700. Workhorse body **11px**, labels 10px, fine print 9px. Headings UPPERCASE, `tracking-wider`, bold.

**Borders** — 2px solid `--retro-fg` for structure; 1px `--retro-border` for soft inner dividers.

**Radii** — 3px / 4px / 6px. No pills, no full-rounded except small status pips.

**Shadows** — none soft. Hard offset shadows only via `--shadow-hard-{1,2,3}`.

**Motion** — `--dur-fast` 100ms, `--dur-base` 150ms, `--dur-slow` 250ms, `--dur-slower` 400ms. Easing `--ease-out` (default) / `--ease-in-out` / `--ease-stepped`. No springs, no bounce.

**Focus** — orange 2px ring (`--focus-ring`) with 2px offset. **No browser default outline.**

## Iconography

**Lucide** (`lucide-react` in production, `lucide-static` SVG via CDN in HTML mocks). Stroke width `2` (or `2.5` ≤16px), `currentColor` always, sizes 14/16/20/24. ASCII glyphs (`▌ ▶ ✓ ✕ ▾ ● ─ │`) are valid decoration. **No emoji, ever.**

## Voice & content

Witty, terminal-flavored, deadpan. Headings YELL in uppercase. Body monospace, sentence case, short. Numerals at any value. Bracket-prefixed labels (`[USER_A] >`, `TOOL: FILE READ —`). Full guide in `system/README.md` → "Content fundamentals."

## Open items

Tracked in `system/FLOWBITE_MAPPING.md` § 7. Summary:

- `<Datepicker>` calendar popover
- `<FileInput>` selector with "CHOOSE FILE" affordance
- `<Rating>` (warning-fill stars)
- `<Drawer>` side-sheet
- Full-page empty / loading / error states
- `<Sidebar>` mobile collapse behavior

## Caveats

- The CRT grid SVGs use baked-in `<feTurbulence>` + `<feGaussianBlur>` filters — Safari / Firefox / Chromium render them subtly differently. Test in your target browser before claiming pixel-fidelity.
- `colors_and_type.css` and `src/index.css` overlap (the former is a portable variant of the latter for the design-system tab). For the published theme package, use `src/index.css` as the canonical token source; ship `colors_and_type.css` alongside only if consumers need a framework-free token file.
- The original repo includes a large CodePen export (`hesperus.pen`) that was **not** part of this design-system extraction — it appears to be source for the inspiration mocks, not part of the package output.

## Questions for the designer

`system/README.md` ends with four open design questions (saturation level of accents, 11px body sizing, canonical product surface, icon delivery mechanism). Resolve those before locking the v1 theme API.
