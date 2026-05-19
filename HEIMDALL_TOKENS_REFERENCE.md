# Heimdall Phase 0: Upstream Tokenization Reference

This document describes the tokens that should be added to Heimdall's `tokens.css` file to support dynamic theming and reduce hardcoded values in component CSS.

## Required New Tokens

The following ten tokens must be added to Heimdall's token system:

### Border Width Tokens
- `--border-width-default`: Default border thickness for most components (Hesperus override: `2px`, Heimdall default: `1px`)
- `--border-width-strong`: Stronger border for emphasis (Hesperus override: `2px`, Heimdall default: `2px`)

### Opacity Tokens
- `--disabled-opacity`: Opacity for disabled/inactive states (Hesperus override: `0.4`, Heimdall default: `0.5`)

### Animation Timing Tokens
- `--transition-fast`: Fast transitions for instant feedback (Hesperus override: `100ms`, Heimdall default: `80ms`)
- `--transition-default`: Standard transition timing (Hesperus override: `150ms`, Heimdall default: `120ms`)
- `--transition-slow`: Slow transitions for modal/drawer enters (Hesperus override: `250ms`, Heimdall default: `200ms`)

### Shadow Tokens
- `--shadow-modal`: Shadow applied to modal dialogs (Hesperus override: `none`, Heimdall default: current blur shadow)
- `--shadow-dropdown`: Shadow applied to dropdowns/popovers (Hesperus override: `none`, Heimdall default: current blur shadow)

### Typography Tokens
- `--text-transform-heading`: Text transform for headings (Hesperus override: `uppercase`, Heimdall default: `none`)
- `--letter-spacing-default`: Letter spacing for body text (Hesperus override: `0.05em`, Heimdall default: `normal`)

## Token Location

Add these tokens to:
- **File**: `src/tokens.css` (or equivalent Heimdall token file)
- **Format**: CSS custom properties with clear default values

## Components Affected by Phase 0

| Component | Hardcoded Values | Estimated Count |
|-----------|-----------------|-----------------|
| Button | border-width, transitions, disabled opacity, text-transform, letter-spacing | 26 |
| Sidebar | border-width, transitions, text-transform, letter-spacing | 25 |
| Modal | border-width, shadows, transitions, text-transform | 23 |
| Table | border-width, text-transform, letter-spacing | 12 |
| TextInput, TextArea, Select, Field | border-width, disabled opacity, transitions | 10 |
| Statusbar | border-width, transitions, text-transform | 5 |
| Titlebar | border-width, transitions, text-transform | 4 |
| **Total** | | **105+ values** |

## Dark Mode Implementation

All `body.dark-canvas` dark mode rules must operate through `--canvas-*` token overrides rather than per-component hardcoded values. This ensures:
- Consistent dark mode across all components
- Single point of control for dark mode palette
- Themability through token substitution (e.g., Hesperus theme)

Example refactoring pattern:
```css
/* BEFORE (hardcoded in component) */
.btn {
  background: #f0f0f0;
  color: #333333;
}
body.dark-canvas .btn {
  background: #1a1a1a;
  color: #eeeeee;
}

/* AFTER (token-based) */
.btn {
  background: var(--canvas-bg);
  color: var(--canvas-fg-1);
}
body.dark-canvas {
  --canvas-bg: #1a1a1a;
  --canvas-fg-1: #eeeeee;
}
```

## BEM Class Stability

As part of Phase 0, Heimdall's README should document public BEM class names as part of the API contract. These classes are guaranteed to remain stable within major version ranges:

### Button Component
- `.btn`
- `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--destructive`
- `.btn:hover`, `.btn:active`, `.btn:focus`, `.btn:disabled`

### Modal Component
- `.modal`
- `.modal__dialog`
- `.modal__header`
- `.modal__title`
- `.modal__body`
- `.modal__footer`
- `.modal__close`

### Sidebar Component
- `.sidebar`
- `.sidebar__section`
- `.sidebar__section-title`
- `.sidebar__item`
- `.sidebar__item--active`

### Table Component
- `.table`
- `.table thead`
- `.table th`
- `.table tbody`
- `.table td`

### Inputs (TextInput, TextArea, Select, etc.)
- `.text-input`
- `.textarea`
- `.select`
- `.field`
- `.field__label`
- `.field__input`
- `.field__helper-text`
- `:disabled` states

### Statusbar Component
- `.statusbar`

### Titlebar Component
- `.titlebar`

## Verification Checklist

- [ ] All ten new tokens added to `tokens.css`
- [ ] Default values specified for each token
- [ ] Button component CSS refactored to use border-width, transition, opacity tokens
- [ ] Sidebar component CSS refactored to use border-width, text-transform, letter-spacing tokens
- [ ] Modal component CSS refactored to use shadow, border-width, transition tokens
- [ ] Table component CSS refactored to use border-width, text-transform tokens
- [ ] Input components (TextInput, TextArea, Select, Field) refactored to use tokens
- [ ] All dark-mode rules converted to use `--canvas-*` token overrides
- [ ] No per-component hardcoded hex values in dark mode rules
- [ ] README updated with BEM class stability documentation
- [ ] Playwright visual regression suite runs with zero diffs
- [ ] No visual changes when tokens are applied (tokens replace existing hardcoded values)

## Integration with Hesperus

Once Phase 0 is complete in Heimdall:

1. Hesperus creates overrides in its theme layer:
```css
:root {
  --border-width-default: 2px;
  --border-width-strong: 2px;
  --disabled-opacity: 0.4;
  --transition-fast: 100ms;
  --transition-default: 150ms;
  --transition-slow: 250ms;
  --shadow-modal: none;
  --shadow-dropdown: none;
  --text-transform-heading: uppercase;
  --letter-spacing-default: 0.05em;
}

html.dark {
  /* Canvas token overrides for dark mode */
  --canvas-bg: #222627;
  --canvas-fg-1: #d4ccaa;
}
```

2. This enables Hesperus to style Heimdall components with minimal CSS overrides
3. Future themes can follow the same pattern for their visual identities

---

**Related**: ADR-3 (Upstream Tokenization in Heimdall), ADR-2 (BEM Override Stability Contract)
