# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@tinkermonkey/hesperus-theme` is a retro/CRT-inspired theme for [Flowbite React](https://flowbite-react.com/) built on Tailwind CSS v4. It ships as an npm package. The repo also contains a Vite + React demo app (`src/App.jsx`) that acts as a component browser — it is **not** part of the published package.

## Commands

```bash
npm run dev            # start the demo component browser (localhost)
npm run build          # build the demo site → demo/
npm run build:package  # build the npm package → dist/ (what gets published)
```

There are no test scripts. CI verifies the package build produces `dist/theme.js`, `dist/theme.d.ts`, and `dist/index.css`, then builds the demo site.

## Architecture

### Published package (`dist/`)

The package build (`scripts/build-package.js`) simply copies two source files and generates a `.d.ts`:

| Output | Source |
|---|---|
| `dist/theme.js` | `src/theme.js` |
| `dist/index.css` | `src/index.css` |
| `dist/theme.d.ts` | generated inline |

Consumers import `hesperusTheme` from the package and pass it to Flowbite React's `<ThemeProvider>`. They also import `./styles` for the CSS custom properties and Tailwind theme extensions.

### Theme object (`src/theme.js`)

Uses Flowbite React's `createTheme()`. Every component override replaces Flowbite's default Tailwind classes with `retro-*` color tokens. The entire file is one export — add new component sections by following the existing pattern.

### CSS custom properties (`src/index.css`)

Two layers:
1. **`@theme inline` block** — registers Tailwind v4 color tokens (`--color-retro-*`) that map to CSS vars (`var(--retro-*)`). This is what makes `bg-retro-fg`, `text-retro-bg`, etc. work in Tailwind classes.
2. **`:root` / `.dark` blocks** — define the actual values for the CSS vars. Light mode uses warm parchment tones; dark mode uses dark green-grey terminal tones.

Semantic colors (`retro-error`, `retro-success`, `retro-warning`, `retro-info`) and accent colors (`retro-orange`, `retro-purple`, `retro-cyan`, etc.) are fixed values defined directly in the `@theme` block — they don't change between light/dark mode.

Dark mode is activated by adding the `.dark` class to `<html>` (not via `prefers-color-scheme`). This is the Flowbite React convention.

### Flowbite class-list (`/.flowbite-react/class-list.json`)

The `@source` directive in `index.css` points here. The Flowbite React Vite plugin (`flowbiteReact()`) populates this file so Tailwind v4 can scan all component classes. Do not delete this file.

### Demo app (`src/App.jsx`)

Renders every themed component in a scrollable page with a fixed navbar and sidebar nav. The `Section` / `Group` / `Variant` layout helpers are local to this file. `GraphNode` and `ConnectionLabel` in `src/components/` are bespoke graph-visualization components showcased in the demo; they are not Flowbite wrappers.

## Color token quick reference

| Token | Role |
|---|---|
| `retro-bg` | page/surface background |
| `retro-fg` | primary text and borders |
| `retro-muted-fg` | secondary/subdued text |
| `retro-secondary` | hover backgrounds, subtle fills |
| `retro-border` | dividers (lighter than `retro-fg`) |
| `retro-error/success/warning/info` | semantic status colors |
| `retro-orange/purple/cyan/…` | accent colors for graph nodes etc. |

## Typography conventions

All text uses `font-mono uppercase tracking-wider`. Font sizes are specified in `px` (e.g. `text-[11px]`) rather than Tailwind scale steps.

## Design system assets

All design documentation, token specs, and component preview cards live under `design/design_handoff_hesperus/system/`:

| Path | Purpose |
|---|---|
| `README.md` | Brand context, visual foundations, voice & tone, iconography rules |
| `FLOWBITE_MAPPING.md` | Per-component token + state contract — the implementation handoff |
| `colors_and_type.css` | All Hesperus tokens as CSS vars (color, type, spacing, motion, density) |
| `preview/*.html` | Standalone HTML cards for every component — the visual targets |
| `public/grid-background-{light,dark}.svg` | CRT grid backgrounds (fractal-noise + glow filters baked in) |
| `src/theme.js` | Full Flowbite React theme object for reference |
| `ui_kits/web-app/` | Complete Hesperus-themed dashboard: sidebar, tables, modals |

When implementing or reviewing themed components, check the corresponding `preview/*.html` card as the visual target and `FLOWBITE_MAPPING.md` for the exact token and state contract. Never hard-code hex values — always use CSS vars from `colors_and_type.css`.

### Hesperus design rules (quick reference)

- **Type:** Space Mono only. Uppercase headings, wide tracking. 11px body, 10px labels, 9px timestamps.
- **Borders:** 2px solid `--retro-fg` everywhere. Inset dividers: 1px `--retro-border`, 2px inset.
- **Corners:** 3–6px radii max (`--radius-sm` / `--radius-md`). No pills.
- **Hover:** Flips background↔foreground (`--retro-bg`/`--retro-fg` swap). No tinting.
- **Focus:** Orange 2px ring (`--focus-ring`). No browser default outline.
- **Shadows:** None. Visual weight comes from borders only.
- **Disabled:** `opacity: 0.4` + `cursor: not-allowed`. No color changes.
- **Motion:** 100ms button flip, 150ms default, 250ms modal/drawer enter. No spring/bounce.
- **Accents:** Muted only — olive, brick, gold, dusty blue. No neon or saturated colors.
- **Decoration:** CRT grid SVG background is the only decoration. No emoji. No icon fonts.

## Design skill

The `/hesperus-design` skill (`.claude/skills/design_system/SKILL.md`) activates expert Hesperus design mode. Invoke it when asked to build prototypes, generate HTML mockups, or produce production-ready Flowbite React components in the Hesperus style.
