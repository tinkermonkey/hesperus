# Hesperus Design System

A retro-inspired design system built on top of [Flowbite React](https://flowbite-react.com/), featuring a distinctive monospace aesthetic with vintage CRT monitor effects — film grain, grid backgrounds, and warm phosphor color palettes.

> **Source:** GitHub repo `tinkermonkey/hesperus@main`. The full Flowbite React theme definition lives at `src/theme.js`; tokens and dark-mode mappings at `src/index.css`. This design system extracts those tokens, the visual rules they imply, and adds prototype-friendly cards + a UI kit so designers can mock new Hesperus surfaces without spinning up the Vite app.

---

## Brand context

Hesperus is the evening star — Venus at dusk. The aesthetic is **vintage CRT terminal**: warm beige paper or charcoal terminals, monospace type, hard 2px borders, square corners, and SVG noise filters that fake authentic film grain. Headings are uppercase with wide tracking; bodies are narrow monospace; everything reads like a 1980s mainframe printout that never went out of style.

The system ships **one product**: a Flowbite-React theme package (`@tinkermonkey/hesperus-theme`) covering 60+ components in light + dark. The included Vite app is a component browser used as the design surface for this system.

## Index of files

| Path | Purpose |
|---|---|
| `README.md` | This file — overview, voice, visual foundations, iconography. |
| `FLOWBITE_MAPPING.md` | **Implementation handoff** — explicit per-component token + state contract for building the React theme. Read this when implementing. |
| `colors_and_type.css` | All Hesperus tokens (retro color palette, mono type, radii, motion, density, contrast aliases) as CSS vars + semantic element styles. |
| `SKILL.md` | Front-matter file for use as a portable Claude skill. |
| `assets/` | Logo, icon assets, brand marks. |
| `public/grid-background-light.svg`, `public/grid-background-dark.svg` | Original CRT grid backgrounds with fractal-noise + glow filters. Repeat-tile on any surface for the signature look. |
| `src/theme.js` | The full Flowbite React theme object (60+ components). The source of truth for component classes. |
| `src/index.css` | Original Tailwind v4 token block + dark-mode mapping. |
| `src/App.jsx` | The original component browser implementation. |
| `preview/` | Small HTML cards for the Design System tab (colors, type, components, effects). |
| `ui_kits/web-app/` | Click-thru recreation of a Hesperus-themed dashboard with sidebar, tables, buttons, modals. |

## Content fundamentals — voice & tone

Witty, playful, and **terminal-flavored**. Imagine a hacker bulletin board from 1986 with a sense of humor.

- Headings are **UPPERCASE** with wide letter-spacing. They are loud on purpose.
- Body copy is monospace, sentence-case, short.
- Address the user as "you." First-person plural ("we") only in marketing-y contexts.
- Code, paths, commands, and tool names are styled like the rest of the UI — there's no special "code" treatment because the whole UI *is* the code treatment.
- Wordplay welcomed. Status messages can be deadpan jokes ("base plate is pre-famulated. proceeding with deployment."). Loading states are an opportunity, not a chore.
- Use ASCII glyphs as decoration: `>`, `>>`, `[KEY]`, `─`, `│`, `└─`, `▌`, `■`. Sparingly.
- No emoji. Ever. They break the spell.
- Numbers are written as numerals at any value (`3 errors`, not "three errors") — it's a terminal.
- Timestamps in 24-hour or HH:MM AM/PM form, all lowercase or all uppercase, your choice — pick one and commit.

Examples (from the Hesperus repo + extrapolated):
- *"FLOWBITE-REACT RETRO COMPONENT LIBRARY"* — headings yell.
- *"CHAT: PROJECT HESPERUS"* — colon-prefixed labels.
- *"[USER_A] > Status update on the retro-encabulator?"* — IRC-style bracket prefixes.
- *"TOOL: FILE READ — PATH: /src/components/RetroEncabulator.js"* — labelled key/value blocks instead of prose.

## Visual foundations

**Color.** A two-tone retro palette. Light mode is **warm beige paper** (`#efeed0` bg, `#2c2416` dark-brown fg). Dark mode is **vintage charcoal** (`#222627` bg, `#d4ccaa` warm-gray fg). Both share a muted accent system: olive `#5C7A28`, brick `#AA3322`, gold `#C4A232`, dusty blue `#5566AA`. There are also tertiary accents — orange `#CC6622`, purple `#7744AA`, cyan `#2E8B8B`. Every accent is **muted on purpose** — no neon, no saturated digital colors. Think faded ink and aged phosphor.

**Type.** **Space Mono** is the only family. Loaded from Google Fonts. Weights 400 + 700. Headings are `uppercase tracking-wider font-bold`. Body copy is shockingly small by modern standards — **11px is the workhorse size**, 10px for labels, 9px for timeline timestamps and table-head cells. This is intentional — terminals were dense.

**Spacing.** Tailwind 4px scale. Tight rhythm — `gap-2` and `gap-2.5` are common. Padding `px-3 py-2` for inputs, `px-3.5` for buttons.

**Backgrounds.** Two signature treatments:
1. **Plain bg** — solid `--retro-bg` (beige or charcoal), nothing else.
2. **Grid bg** — `bg-grid` class applies `grid-background-light.svg` (or dark variant) repeat-tiled. The SVG itself has fractal-noise + Gaussian blur baked in, so the grid arrives pre-glowing and pre-grainy.

A third option, `.noise-overlay`, layers a 5%-opacity noise PNG on top of any element. Use sparingly — full-bleed grain on every card kills readability.

**Animation.** Restrained. Color/bg transitions ~150ms (`transition-colors duration-150`). No bounces, parallax, or hero animations. Spinners use a standard `animate-spin`. Modals and Toasts fade in.

**Hover states.** Buttons **invert** — `bg-retro-bg text-retro-fg` becomes `bg-retro-fg text-retro-bg`. This is the most distinctive Hesperus tell: hover doesn't tint, it *flips*.

**Focus states.** Explicitly **no ring** (`focus:ring-0 focus:outline-none`). The 2px border is already the focus affordance.

**Press states.** No scale/shrink. Hover-flip carries through.

**Borders.** **2px solid** everywhere (`border-2 border-retro-fg`). This is the second most distinctive Hesperus tell. Variant borders use accent colors (`border-retro-error`, etc) at the same 2px weight.

**Shadows.** **None.** `shadow-none` is set explicitly on Cards, Modals, Tooltips. The visual weight comes from borders, not elevation.

**Transparency / blur.** Modal backdrops use `bg-retro-bg/70`. Modal body uses `bg-retro-bg/70`. Otherwise transparency is rare — the system is flat.

**Corner radii.** Tiny. `rounded-sm` (3px), `rounded-md`/`rounded` (4px), `rounded-lg` (6px). Pills and round avatars are virtually absent — squares for everything.

**Cards.** Beige/charcoal surface, **2px solid foreground border**, no shadow at rest, `rounded-md`. Children fill flush — no inner padding on the root, only on header/body/footer slots.

**Modals.** Dark header band (`bg-retro-fg` with `text-retro-bg` title), 2px outer border, slightly translucent body (`bg-retro-bg/70`).

**Tables.** Dark header row (`bg-retro-fg` cells with `text-retro-bg`), 2px wrapper border, single-px row dividers, hover flips row to `bg-retro-secondary`.

**Imagery vibe.** None in the system itself. When imagery is needed, it should be desaturated, grainy, warm-toned — like a 1980s computer-magazine cover. Avoid color photography that would clash with the muted palette.

**Layout rules.** Components stack flush against their borders. Navbars are toolbar-style with **fixed 44px height** and divided by 2px vertical rules between items. Sidebars use 2px outer border + dividers between item groups.

## Iconography

- The original codebase imports **Lucide icons** in `src/App.jsx` (e.g. `<Search>`, `<Settings>`, `<Mail>`, etc — common Lucide bindings). Stroke-based, 24×24 viewBox, `strokeWidth="2"` matches the 2px border weight throughout the system, which is why Lucide is the perfect match.
- For prototypes built from this system, **link Lucide via CDN** (`https://unpkg.com/lucide-static@latest/`). Use `size-4` (16px) inline with body text and `size-5` (20px) for nav/standalone.
- **No emoji.** No unicode-as-icon. No icon font.
- Stroke icons should always be `currentColor` so they pick up `text-retro-fg`/`text-retro-error`/etc from their parent.
- ASCII glyphs (`>`, `[`, `]`, `─`, `│`) are valid "icons" in this system and especially appropriate for log lines, breadcrumbs, prompts.

> **No substitution needed:** Lucide is the canonical icon set in the source codebase, available at https://unpkg.com/lucide-static and https://lucide.dev/. Both stroke weight (2) and viewBox (24) match the system perfectly.

## Font note

Space Mono is loaded from **Google Fonts CDN** in every preview / UI kit file (`https://fonts.googleapis.com/css2?family=Space+Mono`). If you need to self-host (offline / brand-locked), download the woff2 from Google Fonts and add `@font-face` rules to `colors_and_type.css`.

## Caveats

- The CRT grid SVGs have baked-in fractal noise; some browsers may render the filter slightly differently (Safari ≠ Firefox ≠ Chromium). Test in your target browser before claiming pixel-fidelity.
- The original repo has a `hesperus.pen` file (~150KB CodePen export) that I did not unpack — it appears to be the source for the inspiration mockups, not part of the package output.

## Design decisions (locked 2026-05-02)

The following questions are resolved and should not be reopened without a deliberate design review:

1. **Accent saturation — LOCKED: muted palette stays.** The current olive / brick / gold / dusty-blue palette is correct for the paper-printout aesthetic. No accents will be pushed brighter.

2. **Body size — LOCKED: 11px.** 11px is the canonical body workhorse. No "comfortable density" mode will be added. Consumers who need larger type can override locally.

3. **Canonical product surface — LOCKED: the full component demo sheet.** `src/App.jsx` is the canonical surface — it exercises every component in light and dark mode. The UI kit in `ui_kits/web-app/` remains a generic reference; rebuilding it around a specific product screen is out of scope for v1.

4. **Iconography — LOCKED: local SVG sprite.** The canonical icon sprite lives at `public/assets/icons/sprite.svg` and is included in the published package. Use it via `<use href="/assets/icons/sprite.svg#icon-{name}">` in HTML/static contexts. In React, use `lucide-react` (tree-shaking, same paths). The CDN fallback (`unpkg.com/lucide-static`) is no longer the reference — use the local sprite.

   **Sprite usage:**
   ```html
   <!-- HTML / static (served) -->
   <svg width="16" height="16" aria-hidden="true">
     <use href="/assets/icons/sprite.svg#icon-search" />
   </svg>
   ```
   ```jsx
   // React
   import { Search } from "lucide-react"
   <Search size={16} strokeWidth={2} />
   ```
   For ≤16px, use `strokeWidth={2.5}` (React) or `stroke-width="2.5"` on the outer `<svg>` (HTML). Color is always `currentColor`.
