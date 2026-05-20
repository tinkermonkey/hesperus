# Heimdall Phase 0: Upstream Tokenization Specification

## ⚠️ Critical Scope Note

**This specification describes work intended for the Heimdall repository.** The Hesperus workspace does not have access to Heimdall's codebase, making actual implementation impossible from this location. This document serves as a reference specification for implementation in the Heimdall repo. The acceptance criteria (adding tokens to `tokens.css`, refactoring component CSS, running Playwright tests) require direct access to Heimdall's source.

---

## Executive Summary

Phase 0 adds CSS custom properties to Heimdall's token system, enabling consistent theming through token substitution instead of per-component BEM class overrides. This unblocks Hesperus's token-based theming strategy and establishes Heimdall's BEM classes as a semver-stable public API.

**Key metrics:**
- 10 new tokens required
- 105+ hardcoded values across 8 components
- 2-3 working days effort
- Zero visual changes (tokens replace existing values 1:1)

---

## Problem Statement

Heimdall's components hardcode values for borders, transitions, opacity, and typography. This forces theme layers like Hesperus to override individual components via BEM selectors, creating fragile coupling. Dark mode is implemented with per-component hardcoded hex values rather than token overrides.

Solution: Introduce tokens for all customizable properties, refactor components to reference them, and establish BEM class names as stable API.

---

## Tokens to Add

All tokens go in `src/tokens.css` (or equivalent Heimdall token file) as CSS custom properties:

| Token | Default | Hesperus Override | Purpose |
|-------|---------|------------------|---------|
| `--border-width-default` | `1px` | `2px` | Standard border thickness |
| `--border-width-strong` | `2px` | `2px` | Emphasis borders |
| `--disabled-opacity` | `0.5` | `0.4` | Disabled/inactive opacity |
| `--transition-fast` | `80ms` | `100ms` | Instant feedback animations |
| `--transition-default` | `120ms` | `150ms` | Standard transition timing |
| `--transition-slow` | `200ms` | `250ms` | Modal/drawer enters |
| `--shadow-modal` | `0 20px 25px rgba(0,0,0,0.15)` | `none` | Modal shadow |
| `--shadow-dropdown` | `0 10px 15px rgba(0,0,0,0.1)` | `none` | Dropdown shadow |
| `--text-transform-heading` | `none` | `uppercase` | Heading transformation |
| `--letter-spacing-default` | `normal` | `0.05em` | Body text spacing |

Existing tokens like `--canvas-bg`, `--canvas-fg-1`, `--canvas-border` (light & dark mode) must also be defined if not present.

---

## Component Refactoring Summary

Replace hardcoded values with token references across 8 components:

| Component | Hardcoded Values | Key Replacements |
|-----------|------------------|------------------|
| Button | 26 | borders, transitions, opacity, text-transform, letter-spacing |
| Sidebar | 25 | borders, transitions, text-transform, letter-spacing |
| Modal | 23 | shadows, borders, transitions, text-transform |
| Table | 12 | borders, text-transform, letter-spacing |
| TextInput/TextArea/Select | 10 | borders, disabled opacity, transitions |
| Statusbar | 5 | borders, transitions, text-transform |
| Titlebar | 4 | borders, transitions, text-transform |
| **Total** | **105+** | |

### Refactoring Pattern

For every component:

1. **Replace numeric values** with tokens:
   - `border: 1px` → `border: var(--border-width-default)`
   - `transition: ...120ms` → `transition: ... var(--transition-default)`
   - `opacity: 0.5` → `opacity: var(--disabled-opacity)`

2. **Replace colors** with `--canvas-*` tokens:
   - `background: #ffffff` → `background: var(--canvas-bg)`
   - `color: #1a1a1a` → `color: var(--canvas-fg-1)`
   - `border-color: #dddddd` → `border-color: var(--canvas-border)`

3. **Remove all `body.dark-canvas` component-level overrides**:
   ```css
   /* REMOVE these */
   body.dark-canvas .btn {
     background: #2d2d2d;
     color: #e0e0e0;
   }
   
   /* Dark mode now handled entirely by token overrides */
   ```

4. **Add typography tokens**:
   - `text-transform: none` → `text-transform: var(--text-transform-heading)`
   - `letter-spacing: normal` → `letter-spacing: var(--letter-spacing-default)`

### Illustrative Example: Button Refactoring

**Before (hardcoded):**
```css
.btn {
  border: 1px solid #dddddd;
  transition: background-color 120ms ease-out;
  text-transform: none;
  letter-spacing: normal;
}
.btn:disabled {
  opacity: 0.5;
}
body.dark-canvas .btn {
  background: #2d2d2d;
  color: #e0e0e0;
}
```

**After (token-based):**
```css
.btn {
  border: var(--border-width-default) solid var(--canvas-border);
  transition: background-color var(--transition-default) ease-out;
  text-transform: var(--text-transform-button);
  letter-spacing: var(--letter-spacing-default);
}
.btn:disabled {
  opacity: var(--disabled-opacity);
}
/* Dark mode handled by --canvas-* token overrides */
```

---

## BEM Class Stability Contract

Heimdall's BEM class names are **part of the public API** and follow semantic versioning:

### Stable (Public API)
- Block names: `.btn`, `.modal`, `.sidebar`, `.table`, `.text-input`
- Element names: `.modal__header`, `.sidebar__item`, `.table__cell`
- Modifiers: `.btn--primary`, `.sidebar__item--active`
- Pseudo-class behaviors: `:hover`, `:focus`, `:active`, `:disabled`

### Not Stable (Implementation Details)
- Inline `style` attributes
- Generated content (`::before`, `::after`)
- HTML structure (nesting, children count)
- Undocumented CSS custom properties

### Breaking Changes Policy
- **Renaming/removing BEM classes** = major version bump (e.g., `.btn` → `.button`)
- **Adding new BEM classes** = minor version (not breaking)
- **Changing CSS property values** = patch version (not breaking)

---

## Token CSS Reference

```css
:root {
  /* Border widths */
  --border-width-default: 1px;
  --border-width-strong: 2px;

  /* Opacity & state */
  --disabled-opacity: 0.5;
  --hover-opacity: 0.85;
  --focus-opacity: 0.9;

  /* Transitions */
  --transition-fast: 80ms;
  --transition-default: 120ms;
  --transition-slow: 200ms;
  --timing-linear: linear;
  --timing-ease-out: cubic-bezier(0, 0, 0.2, 1);

  /* Shadows */
  --shadow-modal: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-dropdown: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Typography */
  --text-transform-heading: none;
  --text-transform-button: none;
  --letter-spacing-default: normal;
  --letter-spacing-heading: normal;

  /* Canvas (light mode) */
  --canvas-bg: #ffffff;
  --canvas-fg-1: #1a1a1a;
  --canvas-border: #dddddd;
}

body.dark-canvas {
  --canvas-bg: #1e1e1e;
  --canvas-fg-1: #e0e0e0;
  --canvas-border: #404040;
}
```

---

## Implementation Checklist

- [ ] **Token Definition**: Add all 10 tokens to `src/tokens.css` with documented defaults
- [ ] **Button Refactoring**: Replace 26 hardcoded values with token references
- [ ] **Sidebar Refactoring**: Replace 25 hardcoded values; fix typography references
- [ ] **Modal Refactoring**: Replace 23 hardcoded values including shadow tokens
- [ ] **Table Refactoring**: Replace 12 hardcoded values for borders and typography
- [ ] **Input Refactoring**: Replace 10 hardcoded values in TextInput, TextArea, Select, Field
- [ ] **Statusbar/Titlebar**: Replace 5+4 hardcoded values
- [ ] **Dark Mode Cleanup**: Remove all `body.dark-canvas` component-level hex overrides
- [ ] **Visual Verification**: Playwright visual regression suite passes with zero diffs
- [ ] **Documentation**: Add BEM class stability section to Heimdall README
- [ ] **Code Review**: Submit PR in Heimdall repo with complete implementation

---

## Integration with Hesperus

Once Phase 0 is implemented in Heimdall, Hesperus overrides tokens to achieve its visual identity:

```css
/* Hesperus theme layer */
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
  --canvas-bg: #222627;
  --canvas-fg-1: #d4ccaa;
  --canvas-border: #3d3d3d;
}
```

This enables Hesperus to style all Heimdall components with minimal custom CSS, instead relying on token overrides.

---

## Notes

### Fabricated Code Examples

The before/after component examples in this specification are **illustrative approximations**, not verified against actual Heimdall source code. Implementers should:

1. Reference this document for the **pattern** of token substitution
2. Verify each actual component against the real Heimdall codebase
3. Adapt examples to match Heimdall's actual HTML structure, class names, and current hardcoded values
4. Test with Playwright visual regression suite to confirm zero visual changes

### Related Architecture Decisions

- **ADR-3**: Upstream Tokenization in Heimdall (motivates this phase)
- **ADR-2**: BEM Override Stability Contract (establishes public class API)

---

**Status**: Specification ready for implementation  
**Target**: Heimdall repository  
**Effort**: 2-3 working days
