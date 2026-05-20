# Hesperus Theme v1.0.0

A retro-inspired **CSS-only theme** for Heimdall UI components, featuring a distinctive monospace aesthetic with vintage CRT monitor effects including film grain and grid backgrounds.

## Features

- **CSS-only theme** — No JavaScript theme object, just pure CSS tokens + BEM component overrides
- **Framework-agnostic** — Works with Heimdall UI, custom HTML, or any component library using BEM classes
- **Dark Mode Support** — Seamless light/dark switching via `.dark` class on `<html>`
- **Retro CRT Aesthetic** — Grid backgrounds with noise filters and glow effects
- **Monospace Typography** — Space Mono font throughout, uppercase labels with wide tracking
- **Component Browser** — Interactive demo app showcasing all themed components
- **Lightweight** — Just CSS (< 100KB uncompressed), ~7KB gzipped
- **Small React components** — Optional thin JSX wrappers for semantic component names

## Design Philosophy

Hesperus draws inspiration from vintage computer terminals and early CRT monitors:

- Uppercase typography with 0.05em letter-spacing
- 2px solid borders for sharp, defined edges
- Warm beige + dark brown light mode, charcoal + warm gray dark mode
- SVG noise filters and CRT grid for authentic film grain
- Square corners (3–6px max border radius)
- Monospace fonts (Space Mono) for terminal feel
- **No shadows** — visual weight from borders alone
- **No gradients** — flat design throughout
- Mechanical motion (100ms button flip, 150ms default transitions)

## Getting Started

### 1. Install

```bash
npm install @tinkermonkey/hesperus-theme
```

### 2. Import CSS at app root

In your main React file (`main.jsx`, `index.js`, or equivalent):

```jsx
import '@tinkermonkey/hesperus-theme'; // Applies CSS tokens + BEM overrides globally

export default function App() {
  return (
    <div>
      {/* Your app with Heimdall UI or custom components */}
    </div>
  );
}
```

If you only want tokens (to build custom components):
```jsx
import '@tinkermonkey/hesperus-theme/tokens'; // Just CSS variables, no component overrides
```

### 3. Use Heimdall components

Option A: Use [Heimdall UI](https://github.com/tinkermonkey/heimdall-ui) components (recommended):
```jsx
import { Button, TextInput, Accordion } from '@tinkermonkey/heimdall-ui';

export function MyApp() {
  return (
    <>
      <Button>Click me</Button>
      <TextInput placeholder="Type here" />
      <Accordion>
        <AccordionItem>Content</AccordionItem>
      </Accordion>
    </>
  );
}
```

Option B: Use Hesperus React wrappers:
```jsx
import { Button, TextInput, Accordion } from '@tinkermonkey/hesperus-theme/components';

export function MyApp() {
  return <Button>Click me</Button>;
}
```

Option C: Use raw HTML with BEM classes (no dependencies):
```jsx
export function MyApp() {
  return (
    <>
      <button className="btn">Click me</button>
      <input className="text-input" placeholder="Type here" />
      <div className="accordion">
        <div className="accordion__panel">
          <div className="accordion__title">Title</div>
          <div className="accordion__content">Content</div>
        </div>
      </div>
    </>
  );
}
```

### 4. Dark Mode

Add a theme toggle:

```jsx
function ThemeToggle() {
  const handleToggle = () => {
    document.documentElement.classList.toggle('dark');
  };
  return <button onClick={handleToggle}>Toggle Dark Mode</button>;
}
```

Or persist to localStorage:
```jsx
function useTheme() {
  const [isDark, setIsDark] = React.useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const toggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return { isDark, toggle };
}

function App() {
  const { isDark, toggle } = useTheme();
  return <button onClick={toggle}>{isDark ? '☀️ Light' : '🌙 Dark'}</button>;
}
```

## Component Overview

All Hesperus components use **BEM class naming**:
- `.btn`, `.badge`, `.text-input`, `.select`, `.checkbox`
- `.accordion`, `.dropdown`, `.modal`, `.drawer`
- `.table`, `.pagination`, `.tab-bar`, `.topbar`, `.sidebar`
- `.spinner`, `.progress`, `.toast`, `.tooltip`
- And 30+ more...

See `HEIMDALL_MAPPING.md` for the complete component reference.

## Color System

All colors use CSS custom properties for automatic light/dark switching:

### Light Mode
- Background: `--canvas-bg` (#efeed0 warm beige)
- Primary text: `--canvas-fg-1` (#2c2416 dark brown)
- Secondary text: `--canvas-fg-2` (#8a7e6a muted tan)
- Dividers: `--canvas-border` (#b8a878 tan)

### Dark Mode
- Background: `--canvas-bg` (#222627 charcoal)
- Primary text: `--canvas-fg-1` (#d4ccaa warm gray)
- Secondary text: `--canvas-fg-2` (#8a8471 muted gray)
- Dividers: `--canvas-border` (#4a4030 medium brown)

### Semantic Colors (Fixed, no light/dark variants)
- Error: `--color-error` (#AA3322 brick red)
- Success: `--color-success` (#5C7A28 olive green)
- Warning: `--color-warning` (#C4A232 faded gold)
- Info: `--color-info` (#5566AA dusty blue)

### Accent Colors
- Orange, Purple, Cyan, Red, Green, Yellow, Blue (fixed values for graph nodes, badges)

## Upgrading from v0.x?

If you're upgrading from the old Flowbite-based theme (v0.x), see `MIGRATION_GUIDE.md` for detailed migration steps.

**TL;DR:**
- Remove: `import { hesperusTheme } from '@tinkermonkey/hesperus-theme'`
- Remove: `<Flowbite theme={{ theme: hesperusTheme }}>` wrapper
- Add: `import '@tinkermonkey/hesperus-theme'` at app root
- Replace Flowbite components with Heimdall UI components or raw HTML with BEM classes
- Component names changed: `Card` → `Panel`, `Navbar` → `Topbar`, `Tabs` → `TabBar`

## Documentation

- **`HEIMDALL_MAPPING.md`** — Complete component specs (BEM classes, tokens, states)
- **`MIGRATION_GUIDE.md`** — Upgrading from v0.x to v1.0.0
- **`/design/design_handoff_hesperus/system/`** — Design tokens, visual targets, brand guidelines

## License

MIT

## Installation

Install the Hesperus theme package via npm:

```bash
npm install @tinkermonkey/hesperus-theme
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install flowbite-react react react-dom
```

## Development Setup

Want to contribute or run the component browser locally?

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

```bash
# Clone the repository
git clone git@github.com:tinkermonkey/hesperus.git
cd hesperus

# Install dependencies
npm install

# Start development server
npm run dev
```

The component browser will be available at `http://localhost:5173/`

### Building the Package

```bash
npm run build:package
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on development and release processes.

### Project Structure

```
hesperus/
├── src/
│   ├── theme.js             # Main theme export (published to npm)
│   ├── index.css            # CSS & custom properties (published)
│   ├── App.jsx              # Component browser (dev only)
│   └── components/          # Example components (dev only)
├── public/
│   └── *.svg                # Grid backgrounds (published)
├── dist/                    # Built package (generated)
└── package.json
```

## Component Coverage

The theme includes comprehensive styling for:

### Core

- Button (4 variants: primary, outline, ghost, destructive)
- Badge (5 colors: default, success, failure, warning, info)
- Card
- Modal

### Forms

- TextInput
- Select
- Checkbox
- Radio
- FileInput
- Label
- ToggleSwitch

### Navigation

- Navbar (toolbar-style with fixed height)
- Sidebar
- Breadcrumb
- Tabs
- Pagination

### Data Display

- Table (with hover and striped variants)
- List (ordered, unordered, with icons)
- Avatar (5 sizes)
- Timeline
- Accordion

### Feedback

- Alert (5 colors)
- Toast
- Spinner (5 sizes)
- Progress (4 sizes)
- Rating

### Content

- Typography (all heading levels styled)
- HR
- Blockquote
- Kbd (keyboard shortcuts)

### Overlays

- Tooltip
- Dropdown
- Popover
- Banner

### Layout

- ButtonGroup
- Footer

## Dark Mode

Toggle dark mode by adding/removing the `dark` class on the root element:

```javascript
const [dark, setDark] = useState(false)

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [dark])
```

## Visual Effects

### Grid Background

The grid backgrounds use SVG filters to create:

- Fractal noise for film grain (baseFrequency: 0.9, 4 octaves)
- Gaussian blur for glow effects (stdDeviation: 5)
- Proper blend modes (multiply for light, screen for dark)

### Noise Overlay

Optional noise overlay class available:

```jsx
<div className="noise-overlay">{/* Content with subtle grain */}</div>
```

## Inspiration

- Vintage CRT monitors and terminal interfaces
- Classic film photography with grain and texture
- Retro video games and sci-fi aesthetics

![Hesperus Component Library](./inspiration/component-libraray.png)
![Hesperus Light Mode](./inspiration/graph-light-mode.png)
![Hesperus Dark Mode](./inspiration/graph-dark-mode.png)
![Hesperus Chat Interface](./inspiration/chat-ux.png)

## Built With

- [React](https://react.dev/) - UI framework
- [Vite](https://vite.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework (v4)
- [Flowbite React](https://flowbite-react.com/) - Component library
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) - Monospace font

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Acknowledgments

- Design inspired by vintage CRT monitors and terminal interfaces
- Grid and noise effects reference classic film photography
- Component library built on the excellent Flowbite React foundation
