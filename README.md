# Hesperus Design System

A retro-inspired design system built on top of [Flowbite React](https://flowbite-react.com/), featuring a distinctive monospace aesthetic with vintage CRT monitor effects including film grain and grid backgrounds.

![Hesperus Light Mode](./inspiration/page-header.png)

## Features

- 🎨 **Complete Flowbite React Theme** - Custom styling for 60+ components
- 🌓 **Dark Mode Support** - Seamless light/dark theme switching
- 🖥️ **Retro CRT Aesthetic** - Grid backgrounds with noise filters and glow effects
- 🔤 **Monospace Typography** - Space Mono font throughout
- 📦 **Component Browser** - Interactive showcase of all themed components
- ⚡ **Vite + React** - Fast development with hot module replacement
- 🎯 **Tailwind CSS v4** - Latest Tailwind with custom retro color tokens

## Design Philosophy

Hesperus draws inspiration from vintage computer terminals and early CRT monitors, combining:
- Uppercase typography with wide tracking
- 2px borders for sharp, defined edges
- Muted color palette (#efeed0 light, #222627 dark)
- SVG noise filters for authentic film grain
- Square corners (2-4px border radius maximum)
- Monospace fonts for that terminal feel

## Color System

The design system uses CSS custom properties for automatic light/dark mode switching:

### Light Mode
- Background: `#efeed0` (warm beige)
- Foreground: `#2c2416` (dark brown)
- Muted: `#f2ecda` (lighter beige)
- Border: `#b8a878` (tan)

### Dark Mode
- Background: `#222627` (charcoal)
- Foreground: `#d4ccaa` (warm gray)
- Muted: `#332c22` (dark brown)
- Border: `#4a4030` (medium brown)

### Accent Colors
- Success: `#5C7A28` (olive green)
- Error: `#AA3322` (muted red)
- Warning: `#C4A232` (gold)
- Info: `#5566AA` (blue-gray)

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone git@github.com:tinkermonkey/hesperus.git
cd hesperus

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Project Structure

```
hesperus/
├── src/
│   ├── App.jsx              # Component browser showcase
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles & CSS custom properties
│   ├── theme.js             # Flowbite React theme customization
│   └── components/
│       ├── GraphNode.jsx    # Example component implementations
│       └── ConnectionLabel.jsx
├── public/
│   ├── grid-background-light.svg  # Light mode grid with noise
│   └── grid-background-dark.svg   # Dark mode grid with noise
├── inspiration/             # Design mockups and references
├── package.json
└── vite.config.js
```

## Using the Theme

### In Your Own Project

1. Install dependencies:
```bash
npm install flowbite-react react react-dom tailwindcss
```

2. Copy the theme file:
```bash
cp src/theme.js your-project/src/
cp src/index.css your-project/src/
```

3. Import and apply the theme:
```jsx
import { Flowbite } from "flowbite-react";
import { hesperusTheme } from "./theme";

function App() {
  return (
    <Flowbite theme={{ theme: hesperusTheme }}>
      {/* Your components */}
    </Flowbite>
  );
}
```

### Component Examples

```jsx
// Buttons
<Button color="primary" size="md">Primary Action</Button>
<Button color="outline" size="md">Secondary</Button>
<Button color="destructive" size="md">Delete</Button>

// Cards
<Card>
  <h5>Card Title</h5>
  <p>Card content with automatic styling</p>
</Card>

// Forms
<TextInput
  type="text"
  placeholder="Enter text..."
  color="gray"
/>

// Tables with hover and striped rows
<Table hoverable striped>
  <Table.Head>
    <Table.HeadCell>Column 1</Table.HeadCell>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Data</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
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
const [dark, setDark] = useState(false);

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [dark]);
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
<div className="noise-overlay">
  {/* Content with subtle grain */}
</div>
```

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
