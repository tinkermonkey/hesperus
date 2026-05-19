# Heimdall BEM Class Stability

## Overview

Heimdall uses **BEM (Block Element Modifier)** naming conventions for all CSS classes. These class names are part of Heimdall's **public API** and are guaranteed to remain stable within major version ranges, allowing third-party themes and tools to reliably target components for styling.

This stability contract is essential for ecosystems where theme layers (like Hesperus) depend on consistent selectors to apply overrides.

## Stability Guarantees

### What is Stable

The following CSS class names are **part of the public API** and follow semantic versioning:

- **Block names** (e.g., `.btn`, `.modal`, `.table`)
- **Element names** (e.g., `.modal__header`, `.btn__icon`)
- **Modifier names** (e.g., `.btn--primary`, `.btn--disabled`)
- **Pseudo-class behaviors** (`:hover`, `:focus`, `:active`, `:disabled`)

Renaming, removing, or restructuring these classes is a **breaking change** that requires a major version bump.

### What is Not Stable

The following are **implementation details** and may change without notice:

- Inline `style` attributes on elements
- Generated content (`::before`, `::after` pseudo-elements)
- JavaScript classNames applied at runtime for state management
- CSS custom property names (unless explicitly documented as public)
- Component HTML structure (number of children, nesting depth, etc.)

## Public BEM Classes by Component

### Button

```css
.btn                      /* Block: base button */
.btn--primary             /* Modifier: primary style */
.btn--secondary           /* Modifier: secondary style */
.btn--ghost               /* Modifier: ghost style */
.btn--destructive         /* Modifier: destructive/error style */
.btn__icon                /* Element: icon inside button */

/* Pseudo-class states (implicit) */
.btn:hover                /* Active state on hover */
.btn:focus                /* Keyboard focus state */
.btn:active               /* Pressed state */
.btn:disabled             /* Disabled state */
```

### Modal

```css
.modal                    /* Block: modal container */
.modal__dialog            /* Element: dialog box */
.modal__header            /* Element: header section */
.modal__title             /* Element: title text */
.modal__body              /* Element: body content */
.modal__footer            /* Element: footer section */
.modal__close             /* Element: close button */

/* State modifiers */
.modal.is-open            /* Open/visible state */
```

### TextInput / TextArea / Select

```css
.text-input               /* Block: text input */
.textarea                 /* Block: textarea */
.select                   /* Block: select dropdown */

.field                    /* Block: form field (wrapper) */
.field__label             /* Element: label */
.field__input             /* Element: input element */
.field__helper-text       /* Element: helper text */
.field__error-text        /* Element: error message */

/* Pseudo-class states (implicit) */
.text-input:focus         /* Focus state */
.text-input:disabled      /* Disabled state */
.text-input[aria-invalid] /* Invalid state */
```

### Table

```css
.table                    /* Block: table */
.table thead              /* Element: table header section */
.table th                 /* Element: table header cell */
.table tbody              /* Element: table body section */
.table tr                 /* Element: table row */
.table td                 /* Element: table data cell */
.table__header-cell       /* Element: styled header cell */
.table__body-cell         /* Element: styled body cell */
```

### Sidebar

```css
.sidebar                  /* Block: sidebar container */
.sidebar__section         /* Element: section */
.sidebar__section-title   /* Element: section title */
.sidebar__item            /* Element: navigation item */
.sidebar__item--active    /* Modifier: active item */
.sidebar__item-icon       /* Element: item icon */
.sidebar__item-label      /* Element: item label */
```

### Modal Variants (Dialog, Drawer, Toast)

```css
.modal                    /* Base modal */
.drawer                   /* Block: drawer/side modal */
.drawer__content          /* Element: drawer content */
.drawer--left             /* Modifier: left position */
.drawer--right            /* Modifier: right position */

.toast                    /* Block: toast notification */
.toast--success           /* Modifier: success state */
.toast--error             /* Modifier: error state */
.toast--warning           /* Modifier: warning state */
.toast--info              /* Modifier: info state */
```

### Topbar / Navbar

```css
.topbar                   /* Block: top navigation */
.topbar__section          /* Element: section */
.topbar__item             /* Element: item */
.topbar__item--active     /* Modifier: active item */
```

### Statusbar

```css
.statusbar                /* Block: status bar */
.statusbar__section       /* Element: section */
.statusbar__content       /* Element: content */
```

### Titlebar

```css
.titlebar                 /* Block: title bar */
.titlebar__title          /* Element: title text */
.titlebar__icon           /* Element: icon */
.titlebar__actions        /* Element: action buttons */
```

### Badges / Chips

```css
.badge                    /* Block: badge */
.badge--error             /* Modifier: error state */
.badge--success           /* Modifier: success state */
.badge--warning           /* Modifier: warning state */
.badge--info              /* Modifier: info state */

.chip                     /* Block: chip */
.chip--selectable         /* Modifier: selectable chip */
.chip__remove             /* Element: remove button */
```

### Panels / Cards

```css
.panel                    /* Block: panel/card */
.panel__header            /* Element: header */
.panel__body              /* Element: body */
.panel__footer            /* Element: footer */
```

### Form-Related Components

```css
.checkbox                 /* Block: checkbox */
.radio                    /* Block: radio button */
.toggle-switch            /* Block: toggle switch */
.number-input             /* Block: number input */
.file-input               /* Block: file input */
```

## Using BEM Classes for Theming

Theme layers can safely target these classes to apply visual customizations:

```css
/* Example: Hesperus theme override */
.btn {
  border-width: 2px;
  border-color: var(--canvas-fg-1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn:hover {
  /* Hesperus hover-flip pattern */
  background: var(--canvas-fg-1);
  color: var(--canvas-bg);
}

.modal__dialog {
  /* Remove shadow for flat aesthetic */
  box-shadow: none;
  border-width: 2px;
}

.sidebar__item:hover {
  /* Custom hover behavior */
  background: var(--canvas-secondary);
}
```

## Breaking Changes Policy

### Major Version (semver)
Renaming, removing, or restructuring any public BEM class requires a **major version bump**:
- `.btn` → `.button` ✗ Breaking change
- Removing `.modal__footer` ✗ Breaking change
- Changing `.modal__header` structure (remove elements) ✗ Breaking change
- Adding new modifiers (`.btn--accent`) ✓ Not breaking

### Minor Version (semver)
Adding new classes or modifiers is **not breaking**:
- New component (`.chip`) ✓ Minor version OK
- New modifier (`.btn--outline`) ✓ Minor version OK
- New element in component (`.modal__subtitle`) ✓ Minor version OK

### Patch Version (semver)
Implementation changes that don't affect public API:
- CSS property values ✓ Patch OK
- Internal styling adjustments ✓ Patch OK
- Bug fixes that change appearance ✓ Patch OK

## Testing for Stability

### Selector Coverage

CI should verify that all public BEM classes remain present in each release:

```bash
# Example: Verify key classes exist
grep -c "\.btn" dist/components.css          # Must have .btn
grep -c "\.modal__dialog" dist/components.css # Must have .modal__dialog
grep -c "\.sidebar__item" dist/components.css # Must have .sidebar__item
```

### Visual Regression Testing

Heimdall's visual regression test suite (Playwright) should be extended to verify:

1. **Baseline**: All components render correctly with default Heimdall tokens
2. **Theme integration**: All components render correctly with Hesperus theme loaded
3. **No regressions**: Visual diffs should be zero for patch/minor releases

```javascript
// Example Playwright test
test('Button classes remain stable', async ({ page }) => {
  const button = page.locator('.btn');
  expect(button).toHaveClass(/btn/); // Primary class present
  
  const primaryBtn = page.locator('.btn--primary');
  expect(primaryBtn).toBeDefined(); // Modifier present
});

test('Modal structure is stable', async ({ page }) => {
  const dialog = page.locator('.modal__dialog');
  expect(dialog).toBeDefined();
  
  const header = page.locator('.modal__header');
  expect(header).toBeDefined();
});
```

### Third-Party Theme Testing

Whenever Heimdall is updated, run the full test suite with third-party themes (e.g., Hesperus) loaded to catch BEM breakage:

```bash
npm run test:visual -- --with-theme hesperus
```

If visual diffs appear unexpectedly, investigate whether a BEM class was accidentally renamed or removed.

## Migration Guide for Theme Developers

If you maintain a theme for Heimdall:

1. **Document target classes** your theme customizes
2. **Validate against current release** to ensure all targets exist
3. **Pin to a Heimdall version range** in peerDependencies
4. **Test against new Heimdall versions** before releasing updates
5. **Report breaking changes** if a public class disappears in a supposedly minor/patch update

Example:

```json
{
  "peerDependencies": {
    "@tinkermonkey/heimdall-ui": "^0.3.0"
  },
  "devDependencies": {
    "@tinkermonkey/heimdall-ui": "^0.3.0"
  }
}
```

## FAQ

**Q: Can I target internal pseudo-elements or generated content?**
A: No. These are implementation details and may change at any time. Only target public BEM classes and standard pseudo-classes (`:hover`, `:focus`, `:disabled`).

**Q: What if I need to override something not covered by a public BEM class?**
A: This is a signal that the class should be added to the public API. Open an issue in Heimdall to request a new public class or element.

**Q: Can Heimdall change CSS property values in patch releases?**
A: Yes. Values like `transition-duration`, `border-color`, or `box-shadow` can be updated in patch releases. If you depend on specific values, pin to a more conservative version range.

**Q: What about CSS custom properties? Are they stable?**
A: Only explicitly documented custom properties (like `--canvas-bg`, `--border-width-default`) are stable. Internal implementation properties may change. See **HEIMDALL_TOKENS.css** for the documented public token list.

---

**This stability contract is effective starting with Heimdall v0.3.0.**
