# Phase 0: Upstream Heimdall Tokenization - Implementation Checklist

## Overview

Phase 0 adds CSS custom properties to Heimdall's token system to enable consistent theming and reduce hardcoded values in component CSS. This work must be completed in the **Heimdall repository** before Phase 1-5 can proceed in Hesperus.

**Estimated effort**: 2-3 working days  
**Affected components**: 8 core components with 105+ hardcoded values  
**Visual impact**: Zero (token values replace equivalent hardcoded values)

---

## 1. Token Definition Phase

### 1.1 Add Tokens to `src/tokens.css`

- [ ] Create/update `src/tokens.css` with all required tokens
- [ ] Add border width tokens:
  - `--border-width-default: 1px;` (Hesperus overrides to `2px`)
  - `--border-width-strong: 2px;` (already at Hesperus value)
- [ ] Add opacity token:
  - `--disabled-opacity: 0.5;` (Hesperus overrides to `0.4`)
- [ ] Add transition timing tokens:
  - `--transition-fast: 80ms;` (Hesperus overrides to `100ms`)
  - `--transition-default: 120ms;` (Hesperus overrides to `150ms`)
  - `--transition-slow: 200ms;` (Hesperus overrides to `250ms`)
- [ ] Add shadow tokens:
  - `--shadow-modal:` (current modal shadow) (Hesperus overrides to `none`)
  - `--shadow-dropdown:` (current dropdown shadow) (Hesperus overrides to `none`)
- [ ] Add typography tokens:
  - `--text-transform-heading: none;` (Hesperus overrides to `uppercase`)
  - `--letter-spacing-default: normal;` (Hesperus overrides to `0.05em`)
- [ ] Add supporting tokens (already should exist):
  - `--canvas-bg`, `--canvas-fg-1`, `--canvas-border` (light mode)
  - `--canvas-bg`, `--canvas-fg-1`, `--canvas-border` (dark mode under `body.dark-canvas`)
- [ ] Document all token default values in code comments
- [ ] Ensure dark mode tokens are defined under `body.dark-canvas` selector

### 1.2 Verify Token Coverage

- [ ] All 10 required tokens are defined
- [ ] Default values match Heimdall's current design
- [ ] Tokens are organized logically (borders, opacity, timing, shadows, typography)
- [ ] Token naming is consistent (e.g., all timing use `--transition-*`)

---

## 2. Component Refactoring Phase

### 2.1 Button Component (`src/components/Button.css` or equivalent)

**Hardcoded values to replace: 26**

- [ ] Replace `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace `border: 2px` (if used) → `border: var(--border-width-strong)`
- [ ] Replace `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `transition: ...80ms...` → `transition: ... var(--transition-fast) ...`
- [ ] Replace `:disabled { opacity: 0.5 }` → `:disabled { opacity: var(--disabled-opacity) }`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-button)`
- [ ] Replace `letter-spacing: normal` → `letter-spacing: var(--letter-spacing-default)`
- [ ] Remove all `body.dark-canvas .btn { ... }` dark mode hex values
- [ ] Verify Button renders identically before/after refactoring

### 2.2 Sidebar Component (`src/components/Sidebar.css` or equivalent)

**Hardcoded values to replace: 25**

- [ ] Replace all `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace all `border: 2px` → `border: var(--border-width-strong)`
- [ ] Replace `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-heading)`
- [ ] Replace `letter-spacing: normal` → `letter-spacing: var(--letter-spacing-heading)`
- [ ] Replace `:disabled { opacity: 0.5 }` → `:disabled { opacity: var(--disabled-opacity) }`
- [ ] Remove all `body.dark-canvas .sidebar { ... }` dark mode hex values
- [ ] Verify Sidebar renders identically before/after refactoring

### 2.3 Modal Component (`src/components/Modal.css` or equivalent)

**Hardcoded values to replace: 23**

- [ ] Replace `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace `box-shadow: 0 20px 25px...` → `box-shadow: var(--shadow-modal)`
- [ ] Replace `transition: ...200ms...` → `transition: ... var(--transition-slow) ...`
- [ ] Replace `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-heading)`
- [ ] Replace `letter-spacing: normal` → `letter-spacing: var(--letter-spacing-heading)`
- [ ] Remove all `body.dark-canvas .modal...` dark mode hex values
- [ ] Verify Modal renders identically before/after refactoring

### 2.4 Table Component (`src/components/Table.css` or equivalent)

**Hardcoded values to replace: 12**

- [ ] Replace `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-heading)`
- [ ] Replace `letter-spacing: normal` → `letter-spacing: var(--letter-spacing-heading)`
- [ ] Remove all `body.dark-canvas .table...` dark mode hex values
- [ ] Verify Table renders identically before/after refactoring

### 2.5 Input Components (`src/components/TextInput.css`, `TextArea.css`, `Select.css`, `Field.css`)

**Hardcoded values to replace: 10**

- [ ] Replace all `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace all `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `:disabled { opacity: 0.5 }` → `:disabled { opacity: var(--disabled-opacity) }`
- [ ] Remove all `body.dark-canvas` rules for color hex values
- [ ] Verify all inputs render identically before/after refactoring

### 2.6 Statusbar Component (`src/components/Statusbar.css`)

**Hardcoded values to replace: 5**

- [ ] Replace `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-heading)`
- [ ] Remove dark mode hex value rules
- [ ] Verify Statusbar renders identically before/after refactoring

### 2.7 Titlebar Component (`src/components/Titlebar.css`)

**Hardcoded values to replace: 4**

- [ ] Replace `border: 1px` → `border: var(--border-width-default)`
- [ ] Replace `transition: ...120ms...` → `transition: ... var(--transition-default) ...`
- [ ] Replace `text-transform: none` → `text-transform: var(--text-transform-heading)`
- [ ] Remove dark mode hex value rules
- [ ] Verify Titlebar renders identically before/after refactoring

### 2.8 Additional Components (Lower Priority)

- [ ] Drawer, Toast, Topbar, Badge, Chip, Panel, Checkbox, Radio, ToggleSwitch
- [ ] Apply same refactoring pattern: borders, transitions, opacity, text-transform, letter-spacing
- [ ] Remove dark mode hex values (rely on `--canvas-*` tokens)
- [ ] Verify zero visual changes

---

## 3. Dark Mode Refactoring Phase

### 3.1 Consolidate Dark Mode Rules

For all components refactored above:

- [ ] Ensure `body.dark-canvas` rules exist (required by Heimdall convention)
- [ ] Verify all color changes are applied via `--canvas-*` token overrides
- [ ] Remove any per-component hardcoded dark hex values (e.g., `#1a1a1a`, `#e0e0e0`)
- [ ] Ensure buttons, inputs, modals use `var(--canvas-bg)`, `var(--canvas-fg-1)` etc. in dark mode
- [ ] Example bad pattern to eliminate:
  ```css
  body.dark-canvas .btn {
    background: #1e1e1e;  /* ✗ Hardcoded */
    color: #e0e0e0;       /* ✗ Hardcoded */
  }
  ```
- [ ] Example good pattern to enforce:
  ```css
  body.dark-canvas {
    --canvas-bg: #1e1e1e;
    --canvas-fg-1: #e0e0e0;
  }
  /* Button automatically uses new token values */
  ```

### 3.2 Dark Mode Token Definitions

- [ ] Define `--canvas-*` tokens for light mode under `:root`
- [ ] Define `--canvas-*` tokens for dark mode under `body.dark-canvas`
- [ ] Ensure symmetry: every light-mode token has a dark-mode override
- [ ] Document which tokens toggle between light/dark and which don't

---

## 4. Documentation Phase

### 4.1 Update Heimdall README

- [ ] Add "API Stability" section documenting public BEM class names
- [ ] List all public classes by component (Button, Modal, Table, etc.)
- [ ] Document breaking change policy (major version bumps for class renames)
- [ ] Include example of how theme developers use stable classes
- [ ] Reference HEIMDALL_BEM_STABILITY_DOCUMENTATION.md

### 4.2 Document Token System

- [ ] Add "Tokens" section to README listing all public tokens
- [ ] Include table with: Token name, Default value, Purpose, Hesperus override
- [ ] Example:
  | Token | Default | Purpose | Hesperus Override |
  |-------|---------|---------|------------------|
  | `--border-width-default` | `1px` | Default component border | `2px` |
  | `--disabled-opacity` | `0.5` | Disabled state opacity | `0.4` |
  | `--transition-default` | `120ms` | Standard animation timing | `150ms` |

### 4.3 Add Comments to `tokens.css`

- [ ] Comment each token group (borders, opacity, timing, shadows, typography)
- [ ] For each token: document its purpose, default value, and typical use cases
- [ ] Example:
  ```css
  /* Border width for most components — intended for use in borders, dividers */
  --border-width-default: 1px;
  
  /* Opacity applied to disabled/inactive states — themes may reduce for stronger effect */
  --disabled-opacity: 0.5;
  
  /* Standard transition timing for hover, focus, state changes */
  --transition-default: 120ms;
  ```

---

## 5. Testing Phase

### 5.1 Run Playwright Visual Regression Suite

- [ ] Ensure Heimdall has a Playwright visual regression test suite
- [ ] Run tests before any component refactoring
- [ ] Run tests after each component refactoring
- [ ] Run full suite after all components are refactored
- [ ] **Verification: Zero new diffs** (tokens replace hardcoded values, no visual change)

### 5.2 Run with Hesperus Theme Loaded

Once Hesperus tokens are created (Phase 1):

- [ ] Load Hesperus override sheet alongside default Heimdall styles
- [ ] Run full Playwright visual regression suite
- [ ] Verify all components style correctly with Hesperus tokens
- [ ] Verify no regression in Heimdall default appearance when Hesperus is not loaded

### 5.3 Manual Spot Checks

- [ ] Open Heimdall demo/storybook
- [ ] Verify Button renders with correct borders, transitions, disabled states
- [ ] Verify Modal renders with correct borders, shadows (or lack thereof), transitions
- [ ] Verify Table renders with correct borders, typography
- [ ] Verify Sidebar renders with correct borders, hover states, typography
- [ ] Verify inputs render with correct borders, focus states, disabled states
- [ ] Test light mode appearance
- [ ] Test dark mode appearance (toggle `body.dark-canvas`)
- [ ] Verify no visual regressions from original implementation

### 5.4 Cross-Browser Testing

- [ ] Test on Chrome/Edge (Chromium)
- [ ] Test on Firefox
- [ ] Test on Safari (desktop)
- [ ] Verify CSS custom properties are applied correctly (all browsers support them)

---

## 6. Quality Assurance Checklist

- [ ] All 10 required tokens are defined: ✓/✗
- [ ] Button (26 values) refactored: ✓/✗
- [ ] Sidebar (25 values) refactored: ✓/✗
- [ ] Modal (23 values) refactored: ✓/✗
- [ ] Table (12 values) refactored: ✓/✗
- [ ] Inputs (10 values) refactored: ✓/✗
- [ ] Statusbar (5 values) refactored: ✓/✗
- [ ] Titlebar (4 values) refactored: ✓/✗
- [ ] All dark mode rules use `--canvas-*` tokens: ✓/✗
- [ ] No hardcoded dark hex values remain: ✓/✗
- [ ] README updated with BEM stability documentation: ✓/✗
- [ ] Playwright visual regression suite passes (zero diffs): ✓/✗
- [ ] Manual spot checks passed (light + dark mode): ✓/✗
- [ ] Code review completed: ✓/✗
- [ ] All acceptance criteria met: ✓/✗

---

## 7. Acceptance Criteria

- [ ] All ten new tokens exist in Heimdall `tokens.css` with documented default values
- [ ] Button, Sidebar, Modal, Table, and input CSS files reference the new tokens instead of hardcoded equivalents
- [ ] All dark-mode component rules operate through token overrides (no per-component hardcoded dark hex values)
- [ ] Heimdall README lists public BEM class names as part of its API contract
- [ ] Playwright visual regression suite passes with no snapshot diffs
- [ ] Code is reviewed and approved in the Heimdall repo

---

## 8. Post-Phase 0 Unblocking

Once Phase 0 is complete:

- [ ] Commit and push all changes to Heimdall main branch
- [ ] Tag release as Heimdall v0.3.0 (or appropriate version)
- [ ] Update Hesperus `package.json` to depend on new Heimdall version
- [ ] Proceed with Phase 1 (Hesperus package refactoring)
- [ ] Create Hesperus override sheet targeting new Heimdall tokens
- [ ] Run Playwright suite with both Heimdall + Hesperus loaded

---

## Notes

- **Token consistency**: All token values in Phase 0 are chosen to **match Heimdall's current hardcoded defaults**. This ensures zero visual changes during refactoring.
- **Dark mode**: The single largest win of Phase 0 is consolidating dark mode rules to use `--canvas-*` tokens, allowing theme layers (Hesperus) to customize all colors in one place.
- **Future themes**: Once Phase 0 is complete, future themes can override just these 10+ tokens without needing per-component CSS overrides for borders, opacity, timing, shadows, and typography.
- **Breaking changes**: Renaming any public BEM class after Phase 0 requires a major version bump. Phase 0's BEM stability documentation sets this expectation for all future Heimdall maintainers.

---

**Phase 0 Status**: Ready for implementation  
**Estimated delivery**: 2-3 working days after implementation start  
**Blocks**: Phase 1 (Hesperus package refactoring), Phase 2 (Hesperus component overrides), Phase 3-5 (downstream work)
