# Hesperus → Heimdall CSS Architecture Mapping

> **Audience:** Developers implementing the Hesperus theme for Heimdall UI components.
> **Source of truth:** `tokens.css` for token values, `overrides.css` for BEM component rules, `preview/*.html` for visual targets.
> **Format:** One section per Heimdall component class → which tokens to use, which BEM structure to follow, and which states must be styled.

---

## 1. Architecture Overview

Hesperus is a **CSS-only theme layer** for Heimdall UI components. It uses:

- **Tokens layer** (`tokens.css`): CSS custom properties mapping Heimdall base tokens to Hesperus retro palette
- **Overrides layer** (`overrides.css`): BEM component rules that style `.btn`, `.accordion`, `.dropdown`, etc.
- **React components** (`src/components/`): Thin wrappers exporting semantic JSX elements that apply BEM classes

### How it works

1. Consumer imports `@tinkermonkey/hesperus-theme` (the CSS) into their app
2. Consumer uses Heimdall's React components (from their own package) or raw HTML with BEM classes
3. Hesperus CSS overrides Heimdall's defaults with retro aesthetics
4. Dark mode is activated by adding the `.dark` class to `<html>`

---

## 2. Token contract

Every component MUST use only these CSS variables (defined in `tokens.css`). Never hard-code hex values.

### Color usage

| For… | Use | Notes |
|---|---|---|
| Primary text | `--canvas-fg-1` | Dark brown ink #2c2416 |
| Secondary/muted text | `--canvas-fg-2` | Muted tan #8a7e6a |
| Borders & dividers | `--canvas-fg-1` (2px) for structure; `--canvas-border` (1px) for soft | Tan divider #b8a878 |
| Surface/background | `--canvas-bg` | Warm beige #efeed0 |
| Hover surface | `--hover-bg` | Slightly lighter beige #f2ecda or full color flip (fg↔bg) |
| Focus ring | `--focus-ring-color` (orange) + `--focus-ring-width` (2px) | Orange 2px outline with offset |
| Status-as-text | `--color-{error,success,warning,info}-text` | Fixed semantic colors; safe for contrast |
| Status-as-fill/badge | `--color-{error,success,warning,info}` | Brick, olive, gold, dusty blue |
| Accent colors | `--color-accent-{orange,purple,cyan,red,green,yellow,blue}` | For graph nodes, avatars, custom elements |
| Disabled state | `opacity: var(--disabled-opacity)` (0.4) | Never grey-out colors |

### Dark mode

All color tokens auto-switch in `html.dark` mode (defined in `tokens.css`):
- Light: warm parchment + dark brown ink
- Dark: charcoal background + warm gray-green text

---

## 3. Component BEM mapping table

| BEM Class(es) | Hesperus Rules | States Required | Notes |
|---|---|---|---|
| `.btn` | 2px `--canvas-fg-1` border, `--canvas-bg` fill, uppercase mono. Hover: flip. Disabled: 0.4 opacity. | default / hover / active / focus-visible / disabled | Variants: `.btn--ghost` (muted), `.btn--error` / `.btn--success` / `.btn--warning` / `.btn--info` (semantic) |
| `.badge` | 2px border + `--canvas-bg` fill, `--text-10`, uppercase. Variants for semantic colors. | — | Sizes: sm/md/lg via font-size, padding |
| `.status-badge` | Small pip indicator. Solid fill (no border). Semantic color. | — | Usually 8-12px circle |
| `.text-input`, `.textarea`, `.number-input` | 2px `--canvas-fg-1` border, `--canvas-bg` fill, `--text-11` mono. Placeholder: `--canvas-fg-2`. Variants: gray border, error (red), success (green), warning (gold), info (blue). | default / focus (orange ring) / error / disabled | `::placeholder` text color |
| `.select` | Same as TextInput + dropdown chevron. Native `<select>` restyled. | same | |
| `.checkbox`, `.radio`, `.tri-state` | 16px box (checkbox/tri) or circle (radio), 2px border, `--radius-sm`. Checked: `--canvas-fg-1` fill + checkmark. Indeterminate: dash. | unchecked / checked / indeterminate / disabled / focus | |
| `.chip` | 2px border, `--canvas-bg` fill, `--text-11`, uppercase. Optional close icon. | default / hover / disabled | Variant: selected (full flip) |
| `.field` | Label wrapper. `<label>` with `--text-10`, uppercase, `--canvas-fg-1` or `--canvas-fg-2` if helper text. | — | Container for input + label + helper |
| `.icon` | Inherits `currentColor` from parent. 14/16/20/24px sizes. Stroke-width 2 or 2.5. | — | Never hard-code color or use emoji |
| `.card`, `.panel` | 2px `--canvas-fg-1` border, `--radius-md`, `--canvas-bg` fill, no shadow. Hover: subtle shift or `--hover-bg`. Optional dark header band. | hover | Variants: `.panel--elevated` (minimal elevation via border treatment only) |
| `.modal` | 2px border, dark header band, 40% dark backdrop, enters in 250ms ease-out. | open / close | Header: `--canvas-fg-1` bg + `--canvas-bg` text + × button |
| `.drawer` | 2px border, slides in from edge in 250ms ease-out. | — | Inherits modal styles |
| `.accordion` | 2px outer border. `.accordion__panel` items separated by 2px `--canvas-fg-1`. Open header: full color flip + chevron rotated. Body: 1px top border. | collapsed / expanded | Chevron icon rotates 90° on open |
| `.dropdown`, `.dropdown__menu`, `.dropdown__item` | Trigger flips on open. Menu: 2px border. Items: 1px `--canvas-border` divider. Active: `--hover-bg` + bold. Disabled: 0.4 opacity. | trigger states / menu hover / active / disabled | Optional dark header band |
| `.popover`, `.popover__content` | Like dropdown — 2px border, dividers. Optional arrow pointing to trigger. | — | Used for floating panels, menus |
| `.tooltip` | Small dark pill (inverted colors): `--canvas-fg-1` bg + `--canvas-bg` text. `--text-9`, uppercase. Arrow on edge. | — | 100ms fade in/out |
| `.pagination` | Group of `.pagination__button` separated by 1px divider. Active: full flip. Disabled: 0.4 opacity. | default / hover / active / disabled | Compact variant: arrows + "PAGE n OF m" text |
| `.list`, `.list__item` | Vertical stack. Items: 1px `--canvas-border` bottom divider. Hover: `--hover-bg`. | hover | Optional numbered or bulleted variants |
| `.table` | 2px outer border. `<th>`: full flip (`--canvas-fg-1` bg + text), `--text-10`, uppercase. `<td>`: 1px cell borders, `--text-11`. Row hover: `--hover-bg`. | hover / sorted (▲/▼ indicator) | Striped variant: alt rows with very subtle `--hover-bg` |
| `.tab-bar`, `.tab` | Underline variant: 2px bottom border on container, 3px `--canvas-border` indicator on active. Pill: full radius + flip. Segmented: borders + dividers. | default / hover / active / disabled | Active: full color flip |
| `.topbar` / `.nav`, `.nav__item` | Height 44px (navbar height token). Items: 2px right border separator. Active: full flip. Brand: bold + ★ or custom mark. | default / hover / active | Fixed height, usually sticky |
| `.sidebar`, `.sidebar__item` | Vertical nav. Items: `--text-11`, uppercase. Active: `--hover-bg` + bold. Counts: `--text-9` `--canvas-fg-2`. Groups: optional separator line. | default / hover / active | Fixed width or collapsible |
| `.tab-bar`, `.tab--active` | Bordered tabs (underline or pill). Active tab: orange indicator or full flip. | default / hover / active / disabled | Variants: underline (default), pill, segmented |
| `.badge.badge--success` / `.badge--error` / `.badge--warning` / `.badge--info` | Semantic color border + text. Solid fill with semantic bg (optional). | — | May include status icon |
| `.banner`, `.banner__content` | 2px border, optional semantic color (info blue default). Optional close button. | — | Usually dismissible |
| `.blockquote`, `.blockquote__cite` | Left 4px thick border in `--canvas-fg-1`. Quote mark optional. Citation in `--canvas-fg-2`. | — | Italic text optional |
| `.footer`, `.footer__link` | Light border treatment. `--text-10` or `--text-11`, `--canvas-fg-2` for secondary links. | default / hover | Often gray variant |
| `.hr` | 1px `--canvas-border` horizontal rule. No shadow. | — | Semantic: can use `--color-*` variant |
| `.kbd` | 2px `--canvas-fg-1` border, `--canvas-bg` fill, `--text-10`, uppercase, 1/4 padding, `--radius-sm`. | — | Monospace key names |
| `.datepicker` | TextInput styles. Popover calendar: 2px border, day cells with hover. | — | Uses `.date-picker__calendar` internally |
| `.file-input`, `.file-input__button` | Button styles. Filename in `--canvas-fg-2`. | empty / selected / disabled | `.file-input__name` shows filename |
| `.spinner` | Three styles: block (8-step rotation), ring (smooth), dots (2-step blink). Default: ring 22px. | — | Color: `--canvas-fg-1` stroke |
| `.progress`, `.progress__bar` | 8px height, 2px `--canvas-fg-1` border, `--canvas-bg` fill, `--canvas-fg-1` (or semantic) progress bar. Indeterminate: bar slides. | determinate / indeterminate | Variants for semantic colors |
| `.rating`, `.rating__star` | 5 stars, 24px default. Filled: `--color-warning` (gold). Empty: `--canvas-border`. Hover: shows next value. | — | Interactive on hover |
| `.timeline`, `.timeline__item`, `.timeline__point` | Vertical line (1px `--canvas-border`) with circular points (14px, 2px border). Content beside. Time: `--text-9` muted. | — | Points: primary color or semantic variants |
| `.toast`, `.toast__icon`, `.toast__body`, `.toast__progress` | 2px border in semantic color. Icon block with border + glyph. Body: `--canvas-fg-1`. Progress bar at bottom (same semantic). Hard shadow none. Enters from edge, 250ms ease-out. | enter / dismiss | Variants for success/error/warning/info |
| `.alert`, `.alert__icon`, `.alert__label`, `.alert__close` | 2px border + label in semantic color. Body: `--canvas-fg-1`. Close button with orange focus ring. | default / hover / focus-visible | Variants: success/error/warning/info |
| `.app-title` | Application title display. Bold uppercase mono text. | — | Used in app header area |
| `.avatar`, `.avatar__image`, `.avatar__status` | 2px `--canvas-fg-1` border, full radius (or `--radius-md` for square). Initials: bold `--text-*` based on size. Status pip: 11px, 2px `--canvas-bg` border, semantic color. | sizes xs/sm/md/lg/xl | Filled variant: `--canvas-fg-1` bg + `--canvas-bg` initials |
| `.chat-composer`, `.chat-composer__input`, `.chat-composer__send` | Message input field with send button. Input: 2px border, mono text. Send button: button styles with orange focus ring. | default / hover / focus-visible / disabled | Flex container, gap 12px |
| `.chat-container` | Full chat interface container. Flexbox column layout with gap. | — | Houses message list, dividers, suggestions, composer |
| `.chat-divider` | Time or section divider between message groups. Text: `--text-9`, `--canvas-fg-2`. Optional line separators on sides. | — | Center-aligned timestamp or "Today" label |
| `.chat-message`, `.chat-message__avatar`, `.chat-message__bubble`, `.chat-message__timestamp` | Chat bubble with avatar. Avatar: 2px border circle. Bubble: 2px border box. Timestamp: `--text-9` muted. | — | Flex layout, left/right alignment variants |
| `.chat-suggestions__item` | Suggested response tile. 2px border, hover: full color flip. Orange focus ring on :focus-visible. | default / hover / focus-visible | Flexbox row, gap 8px |
| `.entity-picker`, `.entity-picker__search`, `.entity-picker__item` | Searchable entity list. Search input: 2px border TextInput. Items: 1px `--canvas-border` divider, hover `--hover-bg`, selected bold + `--canvas-fg-1` bg. | search / item hover / item selected / item focus-visible | Vertical stack, 300px max-height |
| `.filter-bar` | Control bar with filters. 2px border container, flex row. Labels: `--text-10` uppercase. Inputs inside use TextInput styles. | — | Often sticky at top of content area |
| `.form-callout` | Contextual help/warning box for forms. 2px border in semantic color, padding 16px. Icon + text. | — | Variants for info/warning/error/success |
| `.key-value-editor`, `.key-value-editor__row`, `.key-value-editor__key`, `.key-value-editor__value`, `.key-value-editor__delete`, `.key-value-editor__add-row` | Editable key-value pair table. Row: flex with key/value inputs + delete button. Key/Value inputs: 2px border, mono. Delete: transparent button with red on hover + orange focus ring. Add row: 1px top border, text button. | default / hover / focus-visible / disabled | Key/value inputs side-by-side, delete on right |
| `.metric-row` | Key-value metric display. Label: `--text-10` uppercase. Value: bold large text. Optional unit. | — | Flex layout, label on left, value on right |
| `.page-header` | Page header with breadcrumbs, title, action buttons. 2px border bottom or divider. Title: bold `--text-14` uppercase. Breadcrumbs: `--text-10` links. | — | Flex container with alignment |
| `.pipeline-card`, `.pipeline-card__header`, `.pipeline-card__title`, `.pipeline-card__stage` | Multi-stage pipeline visualization. Header: `--canvas-fg-1` bg + `--canvas-bg` text. Stages: boxes or circles with connectors. | — | Horizontal layout with stage progression |
| `.quick-access-grid`, `.quick-access-grid__item`, `.quick-access-grid__item-icon`, `.quick-access-grid__item-label` | Grid of quick action tiles. Item: 2px `--canvas-border` border, flex column. Icon: 24px. Label: `--text-10` uppercase. Hover: border `--canvas-fg-1` + `--hover-bg`. Orange focus ring. | default / hover / focus-visible | Grid 2-4 cols, gap 12px |
| `.relationship-builder`, `.relationship-builder__button`, `.relationship-builder__line` | Visual relationship definition. Buttons for add/edit/delete connections. Lines showing relationships between entities. Focus ring on buttons. | default / hover / focus-visible | Canvas-like layout with connectors |
| `.row-menu`, `.row-menu__action` | Inline action menu for table rows. Actions: text buttons with icons. Hover: color flip. Orange focus ring. | default / hover / focus-visible | Flex row, gap 8px |
| `.statusbar` | Status indicator bar. Connection/state indicators with semantic colors. 1px dividers between items. | — | Fixed bottom or top, spans full width |
| `.titlebar` | Header bar with title and controls. 2px border bottom. Title: bold mono. Controls: buttons on right side. | — | Sticky or fixed positioning |
| `.avatar-group`, `.avatar-group__counter` | Avatars: −8px left margin (overlap). "+N" badge: `--canvas-fg-2` bg + text. | — | Group of avatars, right-to-left overlap |
| `.shell-layout`, `.shell-header`, `.shell-sidebar`, `.shell-main` | Desktop layout: header (fixed top), sidebar (fixed left), main (scroll). Surfaces use `--canvas-bg`. | — | Responsive: sidebar collapses on mobile |
| `.stat-tile`, `.stat-grid` | Tile: 2px border, `--canvas-bg` fill, value large bold, label `--text-10` muted. Grid: rows/cols of tiles with 1px dividers. | — | Semantic color variant optional |
| `.split-pane`, `.split-pane__divider` | Two resizable panels separated by 1px `--canvas-border` drag handle. Cursor: col-resize or row-resize. | — | Handle highlights on hover |
| `.command-palette`, `.command-palette__suggestion` | Modal-like: search input + list. Suggestions: hover = `--hover-bg`, selected = full flip. | — | Keyboard nav (↑↓ enter). Usually modal overlay |
| `.confirm-dialog` | Modal variant. Focused on binary choice (confirm / cancel). Prominent action button. | — | Variant of `.modal` |

---

## 4. State coverage matrix

Every interactive component MUST handle all of:

| State | Visual | CSS |
|---|---|---|
| **default** | Base appearance | `:root` or `html.dark` styling |
| **:hover** | User hovers element | `element:hover { }` |
| **:active** / **:focus** | Element has focus or is being pressed | `element:active { }` or `:focus-visible { }` |
| **:disabled** | Element is disabled | `element:disabled { opacity: 0.4; }` |
| **[data-state="open"]** / **[aria-expanded="true"]** | For toggleable elements (accordion, dropdown, modal) | Can use attribute selector or `.--open`, `.--expanded` class |

---

## 5. Motion contract

| Use case | Duration | Easing |
|---|---|---|
| Button flip, instant feedback | `--transition-fast` (100ms) | `--timing-ease-out` |
| Default fade/slide | `--transition-default` (150ms) | `--timing-ease-out` |
| Modal / drawer / dropdown enter | `--transition-slow` (250ms) | `--timing-ease-out` |
| Spinner block (keyframe) | 1000ms | `--ease-stepped: steps(8)` |
| Spinner dots (keyframe) | 1000ms | `steps(2)` |
| Indeterminate progress | 1200ms | `--ease-in-out` |

**Never** use spring physics, bounce, or overshoot. The system is mechanical.

---

## 6. Accessibility & interaction

- **Focus ring:** Always use `--focus-ring-color` (orange 2px) with `--focus-ring-offset` (2px offset from element)
- **Keyboard nav:** Tab/Shift+Tab between focusable elements. Modals trap focus. Dropdowns support ↑↓ Arrow + Enter
- **Disabled:** Use `disabled` attribute (form controls) or `[aria-disabled="true"]` (non-form). Style: `opacity: 0.4` + `cursor: not-allowed`
- **Color alone:** Never convey state with color only. Use icon, border change, or opacity
- **Touch targets:** Minimum 44×44px for mobile (padding, not text size)

---

## 7. Acceptance checklist (per component)

Before marking a BEM component rule "complete":

- [ ] All required states render distinctly (default / hover / active / focus-visible / disabled, + loading/open where applicable)
- [ ] Focus ring is `--focus-ring-color`, not a browser default
- [ ] Both light and dark modes work (`html.dark` class toggles all tokens correctly)
- [ ] All color values come from CSS tokens, no hard-coded hex
- [ ] No `box-shadow` — visual weight comes from 2px borders only
- [ ] No gradient unless explicitly noted
- [ ] Border radius uses `--radius-*` tokens (sm/md/lg from overrides)
- [ ] Animation duration and easing use `--transition-*` and `--timing-*` tokens
- [ ] Uppercase text for labels, buttons, headings
- [ ] Monospace font (`--font-mono`) for all text
- [ ] Visual matches the corresponding `preview/*.html` card at 1:1

---

## 8. Common patterns

### Semantic color variants
Most components have `.component--success`, `.component--error`, `.component--warning`, `.component--info` variants:
```css
.btn.btn--success {
  color: var(--color-success);
  border-color: var(--color-success);
}
.btn.btn--success:hover {
  background: var(--color-success);
  color: var(--canvas-bg);
}
```

### Disabled state
Apply uniformly across all interactive elements:
```css
.btn:disabled,
.select:disabled,
.text-input:disabled {
  opacity: var(--disabled-opacity);
  cursor: var(--disabled-cursor);
  /* no color changes */
}
```

### Focus ring
For all focusable elements:
```css
.btn:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

### Color flip on hover/active
The signature Hesperus pattern — swap foreground and background:
```css
.btn:hover,
.btn:active {
  background: var(--canvas-fg-1);
  color: var(--canvas-bg);
}
```

---

## 9. Design resources

- **Tokens source:** `/src/tokens.css` — single source of truth for CSS variables
- **Component rules:** `/src/overrides.css` — BEM implementation details
- **Visual targets:** `/design/design_handoff_hesperus/system/preview/*.html` — reference screenshots
- **Type & spacing:** `/design/design_handoff_hesperus/system/colors_and_type.css` — extended token reference
- **Design brief:** `/design/design_handoff_hesperus/system/README.md` — brand context and philosophy

---

## 10. Roadmap / not-yet-implemented

These BEM classes are defined but may need refinement or additional state coverage:

- `html.light` mode (currently only `:root` light, `html.dark` dark)
- Mobile-responsive variants (sidebar collapse, menu hamburger)
- High-contrast mode (WCAG AAA)

When adding these features, update this table and ensure `preview/*.html` cards exist for visual verification.
