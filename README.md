# Hesperus Design System

A retro-inspired design system built on top of [Flowbite React](https://flowbite-react.com/), featuring a distinctive monospace aesthetic with vintage CRT monitor effects including film grain and grid backgrounds.

## Features

- **Complete Flowbite React Theme** - Custom styling for 60+ components
- **Dark Mode Support** - Seamless light/dark theme switching
- **Retro CRT Aesthetic** - Grid backgrounds with noise filters and glow effects
- **Monospace Typography** - Space Mono font throughout
- **Component Browser** - Interactive showcase of all themed components
- **Vite + React** - Fast development with hot module replacement
- **Tailwind CSS v4** - Latest Tailwind with custom retro color tokens

## Design Philosophy

Hesperus draws inspiration from vintage computer terminals and early CRT monitors, combining:

- Uppercase typography with wide tracking
- 2px borders for sharp, defined edges
- Muted color palette (#efeed0 light, #222627 dark)
- SVG noise filters for authentic film grain
- Square corners (2-4px border radius maximum)
- Monospace fonts for that terminal feel

## Getting Started

To use the Hesperus theme in your Flowbite React project:

1. Install the package:
   ```bash
   npm install @tinkermonkey/hesperus-theme
   ```
2. Import the theme and styles:
   ```jsx
   import { Flowbite } from "flowbite-react"
   import { hesperusTheme } from "@tinkermonkey/hesperus-theme"
   import "@tinkermonkey/hesperus-theme/styles"
   function App() {
     return <Flowbite theme={{ theme: hesperusTheme }}>{/* Your app components */}</Flowbite>
   }
   ```
3. Add dark mode toggle (optional):

   ```jsx
   import { useState, useEffect } from "react"
   function App() {
     const [dark, setDark] = useState(false)

     useEffect(() => {
       if (dark) {
         document.documentElement.classList.add("dark")
       } else {
         document.documentElement.classList.remove("dark")
       }
     }, [dark])

     return (
       <Flowbite theme={{ theme: hesperusTheme }}>
         <button onClick={() => setDark(!dark)}>{dark ? "☀ Light" : "☾ Dark"}</button>
         {/* Your app */}
       </Flowbite>
     )
   }
   ```



## Component Overview

| Light Mode | Dark Mode |
|---|---|
| ![Hesperus Light Mode](./inspiration/hesperus-light.png) | ![Hesperus Dark Mode](./inspiration/hesperus-dark.png) |
| _Light mode with retro CRT aesthetics_ | _Dark mode with vintage terminal styling_ |

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
