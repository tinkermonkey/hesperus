# Hesperus → Flowbite-React Theme Mapping

> **Audience:** Claude Code (or any developer) implementing the Hesperus theme as a `flowbite-react` `customTheme`.
> **Source of truth:** `colors_and_type.css` for tokens, `preview/*.html` for visual targets, `ui_kits/web-app/*.html` for assembled pages.
> **Format:** One row per Flowbite component → which tokens to use, which states must be styled, and which preview card is the visual target.

---

## 1. Theme contract

Every Flowbite component MUST resolve to these CSS variables (defined in `colors_and_type.css`). Do not hard-code colors — always go through tokens.

### Color usage rules
| For… | Use | Never use |
|---|---|---|
| Body text | `--retro-fg` | a raw accent |
| Helper / placeholder text | `--retro-muted-fg` (only ≥18px or 14px-bold; else use `--retro-fg`) | `--retro-warning` |
| Borders & dividers | `--retro-fg` (2px) for structure; `--retro-border` (1px) for soft inner | shadows |
| **Inset dividers** | 1px `--retro-border`, **inset 2px from each side** so the dark outer border reads as a chassis. Used inside dropdowns, accordions, dropdown menus, popover lists. | full-bleed dividers inside heavy outer borders |
| Surface | `--retro-bg` | `--retro-muted` (alt rows only) |
| Hover surface | `--retro-secondary` (soft) OR full color flip (fg↔bg) | gradients |
| Focus ring | `--focus-ring` (orange 2px on bg, 2px offset) | default browser outline |
| Status-as-text | `--retro-{name}-text` aliases | raw accents in dark mode |
| Status-as-fill/badge/pip | raw `--retro-{name}` | gradients |
| Disabled | `opacity: var(--disabled-opacity)` (0.4) + `cursor: not-allowed` | grey-out the color manually |

### Required state coverage
Every interactive component must visually answer all of:
**default · :hover · :active · :focus-visible · :disabled** (+ `[loading]` where applicable).

---

## 2. Component mapping table

| Flowbite component | Hesperus tokens | States required | Visual target |
|---|---|---|---|
| `<Button>` | `--retro-fg` border + bg flip on hover. `color="success"` → `--retro-success`, `color="failure"` → `--retro-error`. `--button-h-md` (36px) default; `--button-h-sm` (26px). | all 6 | `preview/components-buttons-states.html` |
| `<Button color="gray">` | `--retro-muted-fg` border + text. Hover: `--retro-fg`. | all 6 | same |
| `<TextInput>` | 2px `--retro-fg` border, `--retro-bg` fill, `--retro-fg` text, `--retro-muted-fg` placeholder. `color="failure"` → `--retro-error` border + helper. | default, focus (orange ring), error, disabled | `preview/components-forms-full.html` |
| `<Textarea>` | Same as TextInput, `resize: none`, line-height `--leading-normal`. | same | same |
| `<Select>` | Same as TextInput + `▾` chevron suffix. Native `<select>`, restyled. | same | same |
| `<Checkbox>` | 16px square, 2px `--retro-fg` border, `--radius-sm`. Checked: `--retro-fg` fill + `--retro-bg` ✓ glyph. Indeterminate: `—` bar. | unchecked / checked / indeterminate / disabled / focus | same |
| `<Radio>` | 16px circle, 2px border. Selected: 6px inner dot. | same | same |
| `<ToggleSwitch>` | 38×20 pill. Off: `--retro-bg` track, `--retro-fg` knob. On: `--retro-success` track, `--retro-bg` knob (right). | off / on / disabled | same |
| `<Label>` | `--text-10`, `text-transform: uppercase`, `--tracking-wider`, `--retro-muted-fg` (or `--retro-fg` if `<18px`). | — | `preview/type-body.html` |
| `<HelperText>` | `--text-9`, `--retro-muted-fg`. With `color="failure"`: `--retro-error`, prefix `▌`. | default / error | same |
| `<Card>` | 2px `--retro-fg` border, `--radius-md`, `--retro-bg` fill, no shadow (or `--shadow-hard-2` for elevated variant). Optional dark heading band (`background: --retro-fg; color: --retro-bg`). | hover (subtle bg → `--retro-secondary`) | `preview/components-cards.html` |
| `<Modal>` | 2px `--retro-fg` border. Header band: `--retro-fg` bg + `--retro-bg` text + `×` button. Backdrop: `rgba(34,38,39,0.55)`. Enter `--dur-slow` `--ease-out`. | open / close | `preview/components-modal.html` |
| `<Drawer>` | Same border treatment, slides in `--dur-slow` `--ease-out` from edge. | — | `preview/components-drawer.html` |
| `<Navbar>` | Height `--navbar-h` (44px). Items: 2px right-border separators. Active item: full color flip (bg `--retro-fg`, text `--retro-bg`). Brand: bold + `★` square mark. | default / hover / active | `preview/components-navbar.html` |
| `<Sidebar>` | Same `surface` treatment. `<Sidebar.Item>`: `--text-11`, uppercase. Active: `--retro-secondary` bg + bold. Counts: `--text-9` `--retro-muted-fg`. | default / hover / active | (web-app `index.html`) |
| `<Tabs>` | Underline variant (default): 2px `--retro-fg` bottom border on container, 3px `--retro-orange` indicator on active tab. Pill variant: 9999 radius, full color flip. Segmented: 2px border, dividers between, full flip on active. | default / hover / active / disabled | `preview/components-tabs.html` |
| `<Accordion>` | 2px outer border. Items separated by 2px `--retro-fg`. Open header: full color flip + chevron rotated 90°. Body: 1px top border, 10/12px padding. | collapsed / expanded | `preview/components-accordion.html` |
| `<Breadcrumb>` | Slash separator default. Current: `--retro-fg`. Inactive: `--retro-muted-fg` link. Boxed variant for headers: 1.5px borders + flip on current. | default / hover | `preview/components-breadcrumb.html` |
| `<Pagination>` | All buttons in one bordered group, dividers between. Active: full flip. Disabled: `--disabled-opacity`. Compact variant: lone arrows + "PAGE n OF m". | default / hover / active / disabled | `preview/components-pagination.html` |
| `<Dropdown>` | Trigger flips on open (bg ↔ fg). Menu: 2px border + `--shadow-hard-2`. Items separated by 1px `--retro-border`. Active: `--retro-secondary` bg + bold. Disabled: `--disabled-opacity`. Header: dark band. | trigger states + menu hover/active/disabled | `preview/components-dropdown.html` |
| `<Tooltip>` | Dark fill (`--retro-fg` bg, `--retro-bg` text), `--text-9`, uppercase, 5/9 padding, arrow on edge. Outer 1px shadow for offset effect. | — | `preview/components-tooltip.html` |
| `<Popover>` | Like dropdown menu — 2px border, `--shadow-hard-2`, optional dark band header. | — | `preview/components-tooltip.html` (right side) |
| `<Toast>` | 2px border in `--retro-{semantic}` color. Square icon block with same border, +letter glyph. Body text in `--retro-fg`. Progress bar at bottom in `--retro-{semantic}`. Hard shadow `--shadow-hard-2`. | enter / dismiss | `preview/components-toast.html` |
| `<Alert>` | Border + label in `--retro-{semantic}`. Body in `--retro-fg`. Optional `▌` prefix on label. | — | `preview/components-alerts.html` |
| `<Badge>` | 2px border in semantic color, `--retro-bg` fill, semantic text color. `--text-10`, uppercase, 1/8 padding. Optional `●` prefix for status. | — | `preview/components-badges.html` |
| `<Avatar>` | 2px `--retro-fg` border, full radius (or `--radius-md` for square). Initials in bold `--text-{N}` based on size. Filled variant: `--retro-fg` bg + `--retro-bg` text. Status pip: 11px circle, 2px `--retro-bg` border, `--retro-success/warning/muted-fg`. Group: −8px overlap. | sizes xs/sm/md/lg/xl | `preview/components-avatar.html` |
| `<Avatar.Group>` | `--retro-fg` border on each, −8px margin-left, "+N" using `--retro-muted` bg + `--retro-muted-fg` text. | — | same |
| `<Spinner>` | Three styles: block (`steps(8)` rotation), ring (linear cubic-bezier rotation), dots (`steps(2)` blink). Default: ring 22px. | — | `preview/components-spinner.html` |
| `<Progress>` | 8px height, 2px `--retro-fg` border, `--retro-bg` fill, `--retro-orange` (or semantic) progress fill. Indeterminate: 35%-wide bar sliding `--dur-slower`. | determinate / indeterminate | same |
| `<Table>` | 2px outer border. `<th>`: full color flip (`--retro-fg` bg + `--retro-bg` text), `--text-10`, uppercase. `<td>`: 1px `--retro-fg` cell borders, `--text-11`. Row hover: `--retro-secondary`. | hover / sorted (with ▲/▼) | `preview/components-table.html` |
| `<Datepicker>` | Inherit input styles. Calendar popover: 2px border + hard shadow, day cells with hover. | — | `preview/components-datepicker.html` |
| `<FileInput>` | "CHOOSE FILE" label = `<Button>`, filename in `--retro-muted-fg`. | empty / selected / disabled | `preview/components-file-input.html` |
| `<Rating>` | 5 stars; filled = `--retro-warning` (warning is fill-safe, not text). | — | `preview/components-rating.html` |
| `<Banner>` / `<Footer>` | Use `<Card>` rules. Footer separators: 1px `--retro-border`. | — | — |
| `<KBD>` | 2px `--retro-fg` border, `--retro-bg` fill, `--text-10`, uppercase, 1/4 padding, `--radius-sm`. | — | `preview/type-body.html` |

---

## 3. Iconography

- **Library:** Lucide React (`lucide-react`).
- **Stroke width:** `2` for ≥20px icons, `2.5` for ≤16px.
- **Sizes:** 14 / 16 / 20 / 24 px. Match parent `font-size` for inline.
- **Color:** `currentColor` always — never hardcode. Inherit from parent.
- **Glyph fallbacks accepted:** `▌ ▶ ✓ ✕ ▾ ▲ ▼ › / ●` — mono shapes, no emoji.
- **Never:** emoji, color icons, stroke-width 1 (too thin against 2px borders).

---

## 4. Motion contract

| Use case | Duration | Easing |
|---|---|---|
| Button color flip, hover | `--dur-fast` (100ms) | `--ease-out` |
| Default transition | `--dur-base` (150ms) | `--ease-out` |
| Modal / drawer / dropdown enter | `--dur-slow` (250ms) | `--ease-out` |
| Page-level reveals | `--dur-slower` (400ms) | `--ease-in-out` |
| Spinner block | 1000ms | `--ease-stepped` (steps 8) |
| Spinner dots | 1000ms | `steps(2)` |
| Indeterminate progress | 1200ms | `--ease-in-out` |

**Never** use spring physics, bounce, or overshoot. The system is mechanical.

---

## 5. flowbite-react theme skeleton

```ts
// hesperusTheme.ts
import type { CustomFlowbiteTheme } from "flowbite-react";

export const hesperusTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "border-2 border-[var(--retro-fg)] bg-[var(--retro-bg)] text-[var(--retro-fg)] hover:bg-[var(--retro-fg)] hover:text-[var(--retro-bg)] focus:ring-[var(--retro-orange)]",
      gray:    "border-2 border-[var(--retro-muted-fg)] bg-transparent text-[var(--retro-muted-fg)] hover:border-[var(--retro-fg)] hover:text-[var(--retro-fg)]",
      failure: "border-2 border-[var(--retro-error)] text-[var(--retro-error)] hover:bg-[var(--retro-error)] hover:text-[var(--retro-bg)]",
      success: "border-2 border-[var(--retro-success)] text-[var(--retro-success)] hover:bg-[var(--retro-success)] hover:text-[var(--retro-bg)]",
    },
    size: { sm: "h-[26px] px-3 text-[9px]", md: "h-[36px] px-3.5 text-[11px]" },
    base: "font-bold uppercase tracking-wider rounded inline-flex items-center gap-2 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed font-mono",
  },
  // ... continue per table above
};
```

Wrap your app: `<Flowbite theme={{ theme: hesperusTheme }}>…</Flowbite>`.

---

## 6. Acceptance checklist (per component)

Before marking a component "done" in the React theme, verify:

- [ ] All 5+ states render distinctly (default / hover / active / focus / disabled, + loading where applicable)
- [ ] Focus ring is the orange `--focus-ring`, not a browser default
- [ ] Both light and dark modes work (`html.dark` toggles all tokens correctly)
- [ ] Color-as-text uses the `*-text` alias when on bg, or sits on a contrasting fill
- [ ] No raw hex codes in the theme — only CSS variables
- [ ] Visual matches the corresponding `preview/*.html` card at 1:1
- [ ] No shadow except `--shadow-hard-{1,2,3}` (no soft drop shadows)
- [ ] No gradient unless explicitly noted (none currently are)
- [ ] Border radius uses `--radius-*` tokens (default 4px)
- [ ] Animation uses `--dur-*` and `--ease-*` tokens

---

## 7. Open items / not-yet-mocked

All previously listed items are now implemented. Remaining open work:

- `<Sidebar>` mobile collapse — toggle is hidden (`navbar.toggle.base: "hidden"`); mobile breakpoint behavior not yet tested

**Previously open — now done:**

| Item | Theme slot | Preview card |
|---|---|---|
| `<Datepicker>` calendar popover | `theme.js` `datepicker` section | `preview/components-datepicker.html` |
| `<FileInput>` "CHOOSE FILE" affordance | `theme.js` `fileInput` slot + `src/components/FileInputRetro.jsx` | `preview/components-file-input.html` |
| `<Rating>` warning-fill stars | `theme.js` `rating` section | `preview/components-rating.html` |
| `<Drawer>` side-sheet | `theme.js` `drawer` section | `preview/components-drawer.html` |
| Empty / loading / error full-page states | Pattern only (no Flowbite component — compose with `<Card>` + `<Spinner>`) | `preview/states-fullpage.html` |

**Other fixes applied (2026-05-02):**
- Navbar active state: full color flip (`bg-retro-fg text-retro-bg`) — was `bg-retro-bg/10`
- Accordion open header: full color flip + chevron `rotate-90` — was secondary tint + `rotate-180`
- Radio checked SVG: moved to `index.css` with correct light/dark token hex values — removed hardcoded `#1E2110`
- `--ease-stepped` token: corrected to `steps(8, end)` — was `steps(4, end)`
- `--focus-ring` token: defined as `#CC6622`; `:focus-visible` rule added to `index.css`
- FileInput usage documented in theme comment
