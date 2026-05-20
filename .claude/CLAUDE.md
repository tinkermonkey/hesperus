# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@tinkermonkey/hesperus-theme` is a retro/CRT-inspired **CSS-only theme layer** for Heimdall UI components, built with vanilla CSS. It ships as an npm package. The repo also contains a Vite + React demo app (`src/App.jsx`) that acts as a component browser — it is **not** part of the published package.

## Commands

```bash
npm run dev            # start the demo component browser (localhost:5173)
npm run build          # build the demo site → demo/
npm run build:package  # build the npm package → dist/ (what gets published)
```

There are no test scripts. CI verifies the package build produces `dist/hesperus.css`, `dist/tokens.css`, and `dist/components/`, then builds the demo site.

## Architecture

### Published package (`dist/`)

The package build (`scripts/build-package.js`) concatenates CSS files and transpiles React components:

| Output | Source | Purpose |
|---|---|---|
| `dist/hesperus.css` | `src/tokens.css` + `src/overrides.css` | Full theme (tokens + BEM component overrides) |
| `dist/tokens.css` | `src/tokens.css` | Token layer only (for custom components) |
| `dist/components/` | `src/components/*.jsx` | Transpiled React wrappers (optional) |

Consumers import the CSS directly: `import '@tinkermonkey/hesperus-theme'`. The theme auto-applies to any HTML elements using Heimdall's BEM class names (`.btn`, `.accordion`, `.dropdown`, etc.).

### Tokens layer (`src/tokens.css`)

Defines CSS custom properties that map Heimdall base tokens to Hesperus retro values:

```css
:root {
  --canvas-bg: #efeed0;        /* warm beige paper (light mode) */
  --canvas-fg-1: #2c2416;      /* dark brown ink */
  --canvas-fg-2: #8a7e6a;      /* muted/secondary text */
  --canvas-border: #b8a878;    /* tan divider */
  /* ... semantic colors, spacing, motion tokens ... */
}

html.dark {
  --canvas-bg: #222627;        /* charcoal (dark mode) */
  --canvas-fg-1: #d4ccaa;      /* warm gray-green text */
  /* ... dark mode overrides ... */
}
```

### Overrides layer (`src/overrides.css`)

BEM component rules that style HTML elements using the tokens. Examples:

```css
.btn {
  border: var(--border-width-default) solid var(--canvas-fg-1);
  background: var(--canvas-bg);
  color: var(--canvas-fg-1);
  /* ... states: hover, active, focus-visible, disabled ... */
}

.accordion {
  border: 2px solid var(--canvas-fg-1);
  /* ... accordion__panel, accordion__title, accordion__content ... */
}
```

Dark mode applies automatically via `html.dark` selector — all tokens flip values in the override rules.

### React components (`src/components/`)

Thin wrappers that export semantic JSX elements with BEM classes pre-applied:

```jsx
export const Button = forwardRef(({ children, variant = 'primary', ...props }, ref) => (
  <button ref={ref} className={mergeClasses('btn', { [`btn--${variant}`]: variant }, ...)} {...props}>
    {children}
  </button>
));
```

These are optional — consumers can use raw HTML with BEM classes or third-party component libraries (Heimdall UI, etc.).

### Demo app (`src/App.jsx`)

Renders every themed component in a scrollable page with a fixed navbar and sidebar nav. The `Section` / `Group` / `Variant` layout helpers are local to this file. `GraphNode` and `ConnectionLabel` in `src/components/` are bespoke graph-visualization components showcased in the demo; they are not Heimdall wrappers.

## Color token quick reference

| Token | Role | Light | Dark |
|---|---|---|---|
| `--canvas-bg` | Page/surface background | #efeed0 (beige) | #222627 (charcoal) |
| `--canvas-fg-1` | Primary text & borders | #2c2416 (dark brown) | #d4ccaa (warm gray) |
| `--canvas-fg-2` | Secondary/muted text | #8a7e6a (muted tan) | #8a8471 (muted gray) |
| `--canvas-border` | Dividers | #b8a878 (tan) | #4a4030 (medium brown) |
| `--color-error` | Error status (fixed) | #AA3322 (brick red) | #AA3322 |
| `--color-success` | Success status (fixed) | #5C7A28 (olive) | #5C7A28 |
| `--color-warning` | Warning status (fixed) | #C4A232 (gold) | #C4A232 |
| `--color-info` | Info status (fixed) | #5566AA (dusty blue) | #5566AA |
| `--color-accent-*` | Graph nodes, badges | Orange, purple, cyan, red, green, yellow, blue (fixed values) | Same as light |

## Typography conventions

All text uses monospace font (`--font-mono`: Space Mono or fallback). Labels and headings are uppercase with wide letter-spacing (0.05em).

- **Body:** `--text-11` (11px), normal weight
- **Labels:** `--text-10` (10px), uppercase, muted color
- **Timestamps:** `--text-9` (9px), muted color
- **Headings:** `--text-14` or larger, bold, uppercase

## Design system assets

All design documentation, token specs, and component preview cards live under `design/design_handoff_hesperus/system/`:

| Path | Purpose |
|---|---|
| `README.md` | Brand context, visual foundations, voice & tone, iconography rules |
| `HEIMDALL_MAPPING.md` | Per-component BEM class + token contract — the implementation handoff (canonical) |
| `colors_and_type.css` | Extended token reference (color, type, spacing, motion, density) |
| `preview/*.html` | Standalone HTML cards for every component — the visual targets |
| `public/grid-background-{light,dark}.svg` | CRT grid backgrounds (fractal-noise + glow filters baked in) |
| `ui_kits/web-app/` | Complete Hesperus-themed dashboard: sidebar, tables, modals |

When implementing or reviewing themed components, check the corresponding `preview/*.html` card as the visual target and `HEIMDALL_MAPPING.md` for the exact BEM class structure and token contract. Never hard-code hex values — always use CSS custom properties from `tokens.css`.

### Hesperus design rules (quick reference)

- **Type:** Space Mono only. Uppercase headings, 0.05em letter-spacing. 11px body, 10px labels, 9px timestamps.
- **Borders:** 2px solid `--canvas-fg-1` for structure; 1px `--canvas-border` for soft inner dividers.
- **Corners:** 3–6px radii max (`--radius-sm` / `--radius-md`). No pills.
- **Hover:** Full color flip (background ↔ foreground) OR subtle shift to `--hover-bg`. No tinting.
- **Focus:** Orange 2px ring (`--focus-ring-color`) with 2px offset. No browser default outline.
- **Shadows:** None. Visual weight comes from 2px borders only.
- **Disabled:** `opacity: 0.4` + `cursor: not-allowed`. No color changes.
- **Motion:** 100ms button flip, 150ms default, 250ms modal/drawer enter. No spring/bounce.
- **Accents:** Muted semantic colors only — olive, brick, gold, dusty blue. Fixed values (no light/dark variants).
- **Decoration:** CRT grid SVG background is the only decoration. No emoji. No icon fonts.

## Design skill

The `/hesperus-design` skill (`.claude/skills/design_system/SKILL.md`) activates expert Hesperus design mode. Invoke it when asked to build prototypes, generate HTML mockups, or produce production-ready Heimdall components in the Hesperus style.
