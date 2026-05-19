# Heimdall Component Refactoring Examples

This document shows how components should be refactored during Phase 0 to replace hardcoded values with token references.

## Button Component Refactoring

### Before (Hardcoded Values)

```css
/* Button base styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  padding: 0 16px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  background: #ffffff;
  color: #1a1a1a;
  cursor: pointer;
  transition: background-color 120ms ease-out, border-color 120ms ease-out, color 120ms ease-out;
  text-transform: none;
  letter-spacing: normal;
}

.btn:hover {
  background: #f5f5f5;
  border-color: #999999;
}

.btn:active {
  background: #eeeeee;
}

.btn:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button variants */
.btn--primary {
  background: #0066cc;
  color: #ffffff;
  border-color: #0066cc;
}

.btn--primary:hover {
  background: #0052a3;
  border-color: #0052a3;
}

body.dark-canvas .btn {
  background: #2d2d2d;
  color: #e0e0e0;
  border-color: #404040;
}

body.dark-canvas .btn:hover {
  background: #3d3d3d;
  border-color: #555555;
}

body.dark-canvas .btn--primary {
  background: #0066cc;
  color: #ffffff;
  border-color: #0066cc;
}

body.dark-canvas .btn--primary:hover {
  background: #0052a3;
  border-color: #0052a3;
}
```

### After (Token-Based)

```css
/* Button base styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  height: var(--height-md);
  padding: 0 16px;
  border: var(--border-width-default) solid var(--canvas-border);
  border-radius: var(--radius-md);
  background: var(--canvas-bg);
  color: var(--canvas-fg-1);
  cursor: pointer;
  transition: background-color var(--transition-default) var(--timing-ease-out),
              border-color var(--transition-default) var(--timing-ease-out),
              color var(--transition-default) var(--timing-ease-out);
  text-transform: var(--text-transform-button);
  letter-spacing: var(--letter-spacing-default);
}

.btn:hover {
  background: var(--canvas-bg-2);
  border-color: var(--canvas-fg-2);
}

.btn:active {
  background: var(--canvas-surface);
}

.btn:focus {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.btn:disabled {
  opacity: var(--disabled-opacity);
  cursor: not-allowed;
}

/* Button variants */
.btn--primary {
  background: #0066cc;
  color: #ffffff;
  border-color: #0066cc;
}

.btn--primary:hover {
  background: #0052a3;
  border-color: #0052a3;
}

/* Dark mode through token overrides only */
/* (No per-component dark hex values) */
```

**Key Changes:**
- `1px` border → `var(--border-width-default)`
- `120ms` transitions → `var(--transition-default)`
- `0.5` opacity (disabled) → `var(--disabled-opacity)`
- `ease-out` → `var(--timing-ease-out)`
- `text-transform: none` → `var(--text-transform-button)`
- `letter-spacing: normal` → `var(--letter-spacing-default)`
- Height values → `var(--height-md)`
- Border radius → `var(--radius-md)`
- Dark mode hex values removed (rely on `--canvas-*` tokens)

---

## Modal Component Refactoring

### Before (Hardcoded Values)

```css
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal.is-open {
  display: flex;
  animation: fadeIn 200ms ease-out;
}

.modal__dialog {
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 6px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal__header {
  padding: 16px 20px;
  border-bottom: 1px solid #dddddd;
}

.modal__title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  text-transform: none;
  letter-spacing: normal;
  margin: 0;
}

.modal__body {
  padding: 16px 20px;
  color: #1a1a1a;
}

.modal__footer {
  padding: 16px 20px;
  border-top: 1px solid #dddddd;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.modal__close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 120ms ease-out;
}

.modal__close:hover {
  opacity: 0.7;
}

.modal__close:disabled {
  opacity: 0.5;
}

body.dark-canvas .modal__dialog {
  background: #1e1e1e;
  border-color: #404040;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.4);
}

body.dark-canvas .modal__header {
  border-bottom-color: #404040;
}

body.dark-canvas .modal__title {
  color: #e0e0e0;
}

body.dark-canvas .modal__body {
  color: #e0e0e0;
}

body.dark-canvas .modal__footer {
  border-top-color: #404040;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### After (Token-Based)

```css
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal.is-open {
  display: flex;
  animation: fadeIn var(--transition-slow) var(--timing-ease-out);
}

.modal__dialog {
  background: var(--canvas-bg);
  border: var(--border-width-default) solid var(--canvas-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-modal);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal__header {
  padding: 16px 20px;
  border-bottom: var(--border-width-default) solid var(--canvas-border);
}

.modal__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--canvas-fg-1);
  text-transform: var(--text-transform-heading);
  letter-spacing: var(--letter-spacing-heading);
  margin: 0;
}

.modal__body {
  padding: 16px 20px;
  color: var(--canvas-fg-1);
}

.modal__footer {
  padding: 16px 20px;
  border-top: var(--border-width-default) solid var(--canvas-border);
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.modal__close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity var(--transition-default) var(--timing-ease-out);
}

.modal__close:hover {
  opacity: var(--hover-opacity);
}

.modal__close:disabled {
  opacity: var(--disabled-opacity);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Dark mode: all handled through token overrides */
/* body.dark-canvas rules removed — handled by --canvas-* token changes */
```

**Key Changes:**
- `1px` borders → `var(--border-width-default)`
- `200ms` animation → `var(--transition-slow)`
- `ease-out` → `var(--timing-ease-out)`
- `box-shadow: 0 20px 25px...` → `var(--shadow-modal)`
- `text-transform: none` → `var(--text-transform-heading)`
- `letter-spacing: normal` → `var(--letter-spacing-heading)`
- `120ms` transitions → `var(--transition-default)`
- Dark mode entirely removed (all `--canvas-*` tokens handle dark mode)

---

## Sidebar Component Refactoring

### Before (Hardcoded Values)

```css
.sidebar {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-right: 1px solid #dddddd;
  color: #1a1a1a;
  width: 240px;
  overflow-y: auto;
}

.sidebar__section {
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
}

.sidebar__section:last-child {
  border-bottom: none;
}

.sidebar__section-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: normal;
  color: #666666;
  text-decoration: uppercase;
  transition: color 120ms ease-out;
}

.sidebar__item {
  padding: 8px 16px;
  color: #1a1a1a;
  cursor: pointer;
  transition: background-color 120ms ease-out, color 120ms ease-out;
  border-left: 2px solid transparent;
}

.sidebar__item:hover {
  background: #f5f5f5;
}

.sidebar__item--active {
  background: #f5f5f5;
  border-left-color: #0066cc;
  font-weight: 600;
}

.sidebar__item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

body.dark-canvas {
  --sidebar-bg: #1e1e1e;
  --sidebar-fg: #e0e0e0;
  --sidebar-border: #404040;
  --sidebar-hover: #2d2d2d;
}

body.dark-canvas .sidebar {
  background: #1e1e1e;
  border-right-color: #404040;
  color: #e0e0e0;
}

body.dark-canvas .sidebar__section {
  border-bottom-color: #404040;
}

body.dark-canvas .sidebar__section-title {
  color: #999999;
}

body.dark-canvas .sidebar__item {
  color: #e0e0e0;
}

body.dark-canvas .sidebar__item:hover {
  background: #2d2d2d;
}

body.dark-canvas .sidebar__item--active {
  background: #2d2d2d;
}
```

### After (Token-Based)

```css
.sidebar {
  display: flex;
  flex-direction: column;
  background: var(--canvas-bg);
  border-right: var(--border-width-default) solid var(--canvas-border);
  color: var(--canvas-fg-1);
  width: 240px;
  overflow-y: auto;
}

.sidebar__section {
  padding: 12px 0;
  border-bottom: var(--border-width-default) solid var(--canvas-border);
}

.sidebar__section:last-child {
  border-bottom: none;
}

.sidebar__section-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: var(--text-transform-heading);
  letter-spacing: var(--letter-spacing-heading);
  color: var(--canvas-fg-2);
  text-decoration: uppercase;
  transition: color var(--transition-default) var(--timing-ease-out);
}

.sidebar__item {
  padding: 8px 16px;
  color: var(--canvas-fg-1);
  cursor: pointer;
  transition: background-color var(--transition-default) var(--timing-ease-out),
              color var(--transition-default) var(--timing-ease-out);
  border-left: var(--border-width-strong) solid transparent;
}

.sidebar__item:hover {
  background: var(--canvas-bg-2);
}

.sidebar__item--active {
  background: var(--canvas-bg-2);
  border-left-color: #0066cc;
  font-weight: 600;
}

.sidebar__item:disabled {
  opacity: var(--disabled-opacity);
  cursor: not-allowed;
}

/* Dark mode: all handled through token overrides */
/* body.dark-canvas rules removed — handled by --canvas-* token changes */
```

**Key Changes:**
- `1px` borders → `var(--border-width-default)`
- `2px` border-left → `var(--border-width-strong)`
- `120ms` transitions → `var(--transition-default)`
- `ease-out` → `var(--timing-ease-out)`
- `0.5` disabled opacity → `var(--disabled-opacity)`
- `text-transform: none` → `var(--text-transform-heading)`
- `letter-spacing: normal` → `var(--letter-spacing-heading)`
- Background colors → `var(--canvas-bg)`, `var(--canvas-bg-2)`
- Border colors → `var(--canvas-border)`
- Dark mode entirely removed (handled by token overrides)

---

## Input Component Refactoring

### Before (Hardcoded Values)

```css
.text-input {
  display: block;
  width: 100%;
  height: 36px;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  background: #ffffff;
  color: #1a1a1a;
  transition: border-color 120ms ease-out, box-shadow 120ms ease-out;
}

.text-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.text-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f5f5f5;
}

.text-input::placeholder {
  color: #999999;
}

body.dark-canvas .text-input {
  background: #2d2d2d;
  border-color: #404040;
  color: #e0e0e0;
}

body.dark-canvas .text-input:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
}

body.dark-canvas .text-input::placeholder {
  color: #666666;
}
```

### After (Token-Based)

```css
.text-input {
  display: block;
  width: 100%;
  height: var(--height-md);
  padding: 6px 12px;
  font-family: inherit;
  font-size: 14px;
  border: var(--border-width-default) solid var(--canvas-border);
  border-radius: var(--radius-md);
  background: var(--canvas-bg);
  color: var(--canvas-fg-1);
  transition: border-color var(--transition-default) var(--timing-ease-out),
              box-shadow var(--transition-default) var(--timing-ease-out);
}

.text-input:focus {
  outline: none;
  border-color: var(--focus-ring-color);
  box-shadow: 0 0 0 var(--focus-ring-width) rgba(0, 102, 204, 0.1);
}

.text-input:disabled {
  opacity: var(--disabled-opacity);
  cursor: not-allowed;
  background: var(--canvas-bg-2);
}

.text-input::placeholder {
  color: var(--canvas-fg-2);
}

/* Dark mode: all handled through token overrides */
/* body.dark-canvas rules removed — handled by --canvas-* token changes */
```

**Key Changes:**
- `1px` border → `var(--border-width-default)`
- `36px` height → `var(--height-md)`
- `120ms` transitions → `var(--transition-default)`
- `ease-out` → `var(--timing-ease-out)`
- `0.5` disabled opacity → `var(--disabled-opacity)`
- Border/background colors → `var(--canvas-*)` tokens
- Focus ring → token-based
- Dark mode entirely removed

---

## Summary of Token Usage Pattern

Every component follows this pattern:

1. **Replace hardcoded numeric values** with tokens:
   - `1px` → `var(--border-width-default)`
   - `2px` → `var(--border-width-strong)`
   - `120ms` → `var(--transition-default)`
   - `0.5` → `var(--disabled-opacity)`

2. **Replace hardcoded colors** with `--canvas-*` tokens:
   - `#ffffff` → `var(--canvas-bg)`
   - `#1a1a1a` → `var(--canvas-fg-1)`
   - `#dddddd` → `var(--canvas-border)`

3. **Remove all `body.dark-canvas` overrides** for colors and values

4. **Add typography tokens** where appropriate:
   - `text-transform: none` → `var(--text-transform-heading)`
   - `letter-spacing: normal` → `var(--letter-spacing-default)`

5. **Use semantic tokens** for shadows, radii, spacing, timing:
   - `box-shadow: 0 20px 25px...` → `var(--shadow-modal)`
   - `border-radius: 6px` → `var(--radius-md)`

This approach allows theme layers (like Hesperus) to customize the entire visual system by overriding just the tokens, with no need for per-component CSS overrides.
