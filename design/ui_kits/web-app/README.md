# Hesperus Web App UI Kit

A click-thru recreation of a Hesperus-themed Flowbite-React dashboard. Demonstrates the system's signature treatments: 2px borders, hover-flip buttons, dark-band headers, monospace type, CRT-grid background.

## Files

- `index.html` — interactive dashboard shell. Sidebar nav + topbar + main content. Switch tabs, open modal, toggle dark mode.
- `styles.css` — Hesperus tokens + component classes (extracted from `src/theme.js`).

## Conventions

- Components are vanilla HTML + small `<script>` blocks, not React. Faster to fork; you can lift any block straight into a JSX component.
- The dark-mode toggle adds/removes `.dark` on `<html>` (matches the Tailwind `dark:` variant Hesperus's theme expects).
- Iconography is **inline Lucide SVGs** (`stroke-width="2"`, `currentColor`).

## Coverage

- Sidebar nav (item groups, active state)
- Topbar (brand, search, user menu)
- KPI cards (heading band + body)
- Data table (dark head, hover rows, status pills)
- Modal (dark title bar, translucent body)
- Buttons (primary, ghost, destructive)
- Badges (outline, accent colors)
