# Hesperus v1.0.0: Migration Guide

> **For consumers upgrading from the old Flowbite-based theme (v0.x) to the new CSS-only Heimdall-based theme (v1.0.0).**

This document covers the breaking changes and migration path for existing Hesperus users.

---

## What's changing?

Hesperus is **transitioning from a Flowbite React theme object to a pure CSS theme layer**. The new architecture is simpler, lighter, and framework-agnostic:

| Aspect | Old (v0.x) | New (v1.0.0) |
|---|---|---|
| **Architecture** | Flowbite `customTheme` (JS object) | CSS tokens + BEM component overrides |
| **Import pattern** | `import { hesperusTheme } from '@tinkermonkey/hesperus-theme'` | `import '@tinkermonkey/hesperus-theme'` |
| **Provider** | `<Flowbite theme={{ theme: hesperusTheme }}>` | Not needed — CSS auto-applies |
| **Component source** | Flowbite React | Heimdall UI (or any component library with matching BEM classes) |
| **Bundle size** | Larger (JS theme object) | Smaller (CSS only) |
| **Dark mode** | Via Flowbite provider | Add `.dark` class to `<html>` |

---

## Migration steps

### Step 1: Update imports

**Old:**
```jsx
import { Flowbite } from 'flowbite-react';
import { hesperusTheme } from '@tinkermonkey/hesperus-theme';
import '@tinkermonkey/hesperus-theme/styles';

export default function App() {
  return (
    <Flowbite theme={{ theme: hesperusTheme }}>
      {/* Your app */}
    </Flowbite>
  );
}
```

**New:**
```jsx
import '@tinkermonkey/hesperus-theme';
// No provider needed

export default function App() {
  // Your app components (using Heimdall UI or any component library)
}
```

### Step 2: Add Hesperus CSS to your app entry point

In your main entry file (`main.jsx`, `index.js`, or equivalent):

```jsx
import '@tinkermonkey/hesperus-theme'; // Applies CSS tokens + BEM overrides globally
```

Optional: If you only want tokens (to build custom components):
```jsx
import '@tinkermonkey/hesperus-theme/tokens'; // Just the CSS variables, no component overrides
```

### Step 3: Update component imports

**Old (Flowbite components):**
```jsx
import { Button, TextInput, Card } from 'flowbite-react';
```

**New (use Heimdall UI components or custom HTML):**
```jsx
// Option A: Use Heimdall UI library (recommended)
import { Button, TextInput, Card } from '@tinkermonkey/heimdall-ui';

// Option B: Use Hesperus React component wrappers (lightweight)
import { Button, Accordion, Dropdown } from '@tinkermonkey/hesperus-theme/components';

// Option C: Use raw HTML with BEM classes
function MyButton() {
  return <button className="btn">Click me</button>;
}
```

### Step 4: Component name changes

Hesperus v1.0.0 uses Heimdall's component names. Some components have been renamed from Flowbite equivalents:

| Old Name (Flowbite) | New Name (Heimdall) | BEM Class | Notes |
|---|---|---|---|
| `<Card>` | `<Panel>` | `.panel` | Renamed to avoid "card" ambiguity |
| `<Navbar>` | `<Topbar>` + `<Nav>` | `.topbar`, `.nav` | Split: header nav vs sidebar |
| `<Tabs>` | `<TabBar>` | `.tab-bar` | More explicit name |
| `<Spinner>` | `<Spinner>` | `.spinner` | Same name, new BEM structure |
| `<Toast>` | `<Toast>` | `.toast` | Same name, new token mapping |
| N/A | `<ShellLayout>` | `.shell-layout` | New: full page layout with header + sidebar |
| N/A | `<CommandPalette>` | `.command-palette` | New: keyboard-driven search |
| N/A | `<ConfirmDialog>` | `.confirm-dialog` | New: specialized modal for binary choice |
| N/A | `<StatTile>` / `<StatGrid>` | `.stat-tile`, `.stat-grid` | New: data visualization tiles |

### Step 5: Removed exports

The old v0.x theme package exported:
- `hesperusTheme` (JS object)
- Type definitions for `CustomFlowbiteTheme`

**These no longer exist.** Replace with CSS imports:

**Old:**
```jsx
import type { CustomFlowbiteTheme } from '@tinkermonkey/hesperus-theme';

const myCustomTheme: CustomFlowbiteTheme = { /* ... */ };
```

**New:**
CSS imports are untyped. To extend the theme, override CSS variables in your own CSS:

```css
/* my-theme.css */
:root {
  --canvas-fg-1: #your-color;
  --canvas-bg: #your-color;
  /* etc. */
}

html.dark {
  --canvas-fg-1: #your-dark-color;
  --canvas-bg: #your-dark-bg;
}
```

```jsx
import '@tinkermonkey/hesperus-theme';
import './my-theme.css'; // Override after Hesperus

export default function App() {
  // Your custom theme now active
}
```

### Step 6: Dark mode control

**Old (Flowbite):**
```jsx
import { useThemeMode } from 'flowbite-react';

export default function ThemeToggle() {
  const { toggleMode } = useThemeMode();
  return <button onClick={toggleMode}>Toggle dark</button>;
}
```

**New (DOM-based):**
```jsx
export default function ThemeToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };
  return <button onClick={toggleDark}>Toggle dark</button>;
}
```

Or use a hook:
```jsx
function useDarkMode() {
  const [isDark, setIsDark] = React.useState(false);
  
  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(html.classList.contains('dark'));
  };
  
  return { isDark, toggleDark };
}

export default function ThemeToggle() {
  const { isDark, toggleDark } = useDarkMode();
  return <button onClick={toggleDark}>{isDark ? 'Light' : 'Dark'}</button>;
}
```

### Step 7: Update peerDependencies

Hesperus v1.0.0 requires React ≥18.2.0. If you're using an older version, upgrade:

```bash
npm install react@latest react-dom@latest
```

Your `package.json` should have:
```json
{
  "peerDependencies": {
    "react": ">=18.2.0",
    "react-dom": ">=18.2.0"
  }
}
```

---

## Common migration patterns

### Pattern 1: Simple button with variants

**Old:**
```jsx
import { Button } from 'flowbite-react';

export function MyButton() {
  return (
    <>
      <Button>Primary</Button>
      <Button color="failure">Error</Button>
      <Button color="gray" outline>Outline</Button>
    </>
  );
}
```

**New:**
```jsx
// Option A: Using Heimdall UI library
import { Button } from '@tinkermonkey/heimdall-ui';

export function MyButton() {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="error">Error</Button>
      <Button variant="ghost">Outline</Button>
    </>
  );
}

// Option B: Using raw HTML (Hesperus applies CSS)
export function MyButton() {
  return (
    <>
      <button className="btn">Primary</button>
      <button className="btn btn--error">Error</button>
      <button className="btn btn--ghost">Outline</button>
    </>
  );
}
```

### Pattern 2: Form with validation

**Old:**
```jsx
import { TextInput, Label } from 'flowbite-react';

export function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <TextInput
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        color={error ? 'failure' : undefined}
        helperText={error && <span color="failure">{error}</span>}
      />
    </div>
  );
}
```

**New:**
```jsx
// Using Heimdall UI
import { Field, TextInput } from '@tinkermonkey/heimdall-ui';

export function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  return (
    <Field
      label="Email"
      error={error}
      helperText={error}
    >
      <TextInput
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Field>
  );
}

// Or with raw HTML
export function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  return (
    <div className="field">
      <label className="field__label">Email</label>
      <input
        className={`text-input ${error ? 'text-input--error' : ''}`}
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
```

### Pattern 3: Modal dialog

**Old:**
```jsx
import { Modal, Button } from 'flowbite-react';

export function ConfirmDialog({ open, onConfirm, onCancel }) {
  return (
    <Modal show={open} onClose={onCancel}>
      <Modal.Header>Confirm action</Modal.Header>
      <Modal.Body>
        <p>Are you sure?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}
```

**New:**
```jsx
// Using Heimdall UI
import { ConfirmDialog, Button } from '@tinkermonkey/heimdall-ui';

export function MyConfirmDialog({ open, onConfirm, onCancel }) {
  return (
    <ConfirmDialog
      open={open}
      title="Confirm action"
      description="Are you sure?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

// Or custom modal with HTML
export function CustomDialog({ open, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="modal">
      <div className="modal__header">
        <h2>Confirm action</h2>
        <button className="modal__close" onClick={onCancel}>×</button>
      </div>
      <div className="modal__body">
        <p>Are you sure?</p>
      </div>
      <div className="modal__footer">
        <button className="btn btn--ghost" onClick={onCancel}>Cancel</button>
        <button className="btn" onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}
```

---

## Troubleshooting

### Q: Styles aren't applying
**A:** Make sure you're importing Hesperus CSS at the top of your app:
```jsx
import '@tinkermonkey/hesperus-theme'; // Before any other imports
```

### Q: Colors look wrong in dark mode
**A:** Add the `.dark` class to `<html>`:
```jsx
React.useEffect(() => {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
}, []);
```

### Q: Components look unstyled
**A:** Make sure your component library uses the same BEM class names as Hesperus. If using custom components, manually add the BEM classes:
```jsx
<button className="btn btn--error">Delete</button>
```

### Q: Old Flowbite components still in my bundle
**A:** You can safely remove the `flowbite-react` dependency:
```bash
npm uninstall flowbite-react
```
(Unless you're using other Flowbite components in your app.)

---

## Support & resources

- **Documentation:** See `/design/design_handoff_hesperus/system/HEIMDALL_MAPPING.md` for component specs
- **Examples:** Check `/src/App.jsx` in the Hesperus repository for usage examples
- **Issues:** Report bugs at https://github.com/tinkermonkey/hesperus/issues

---

## Rollback (if needed)

If you need to stay on Flowbite for now, pin to v0.x:

```json
{
  "devDependencies": {
    "@tinkermonkey/hesperus-theme": "^0.x"
  }
}
```

(Replace `0.x` with the latest 0.x version.)

---

**Happy upgrading!** The new theme is faster, smaller, and easier to customize. Let us know how it goes.
