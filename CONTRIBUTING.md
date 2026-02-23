# Contributing to Hesperus Theme

Thank you for your interest in contributing to Hesperus! This document provides guidelines for maintainers and contributors.

## Development Setup

### Prerequisites
- Node.js 18 or higher
- npm 8 or higher
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone git@github.com:tinkermonkey/hesperus.git
   cd hesperus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The component browser will be available at `http://localhost:5173/`

## Project Structure

```
hesperus/
├── src/
│   ├── theme.js           # Main theme export (published to npm)
│   ├── index.css          # CSS with custom properties (published)
│   ├── App.jsx            # Component browser (dev only)
│   ├── main.jsx           # Dev entry point (dev only)
│   └── components/        # Example components (dev only)
├── public/
│   └── *.svg              # Grid backgrounds (published)
├── scripts/
│   └── build-package.js   # Build script for npm package
├── .github/workflows/     # CI/CD pipelines
├── dist/                  # Built package (generated, not committed)
└── package.json
```

## Making Changes

### Theme Modifications

1. Edit `src/theme.js` to modify component themes
2. Test changes in the component browser at `http://localhost:5173/`
3. Ensure dark mode works by toggling the theme
4. Update documentation if needed

### Adding New Components

1. Add the component theme to `src/theme.js`
2. Add examples to `src/App.jsx` in the appropriate section
3. Test thoroughly in both light and dark modes
4. Document the component in README.md

### Testing Changes

```bash
# Build the package to verify it compiles
npm run build:package

# Check the generated files
ls -la dist/

# Test the build
npm run build
```

## Release Process

### Version Bumping

1. Update version in `package.json`
   ```bash
   # For patch release (0.1.0 -> 0.1.1)
   npm version patch
   
   # For minor release (0.1.0 -> 0.2.0)
   npm version minor
   
   # For major release (0.1.0 -> 1.0.0)
   npm version major
   ```

2. Update `CHANGELOG.md` with changes

3. Commit changes
   ```bash
   git add CHANGELOG.md package.json
   git commit -m "Release v0.x.x"
   ```

### Publishing

Publishing is automated via GitHub Actions:

1. **Push changes to main**
   ```bash
   git push origin main
   ```

2. **Create and push a version tag**
   ```bash
   git tag v0.1.1
   git push origin v0.1.1
   ```

3. **GitHub Actions will automatically:**
   - Run tests
   - Build the package
   - Verify package contents
   - Publish to npm
   - Create a GitHub release

### NPM Token Setup (One-time for maintainers)

1. Create an npm access token at https://www.npmjs.com/settings/tokens
2. Add it to GitHub repository secrets as `NPM_TOKEN`
3. Go to: Settings → Secrets and variables → Actions → New repository secret

## Code Style

- Use ES modules (`import`/`export`)
- Follow existing code formatting
- Use Tailwind utility classes consistently
- Keep dark mode variants aligned with light mode
- Comment complex theme configurations

## Testing Checklist

Before submitting changes:

- [ ] Component browser loads without errors
- [ ] Dark mode toggle works correctly
- [ ] All themed components render properly
- [ ] No console errors or warnings
- [ ] Grid backgrounds and noise effects work
- [ ] Typography is monospace and uppercase where appropriate
- [ ] Package builds successfully (`npm run build:package`)
- [ ] Documentation is updated

## Commit Messages

Use conventional commits format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Build process or auxiliary tool changes

Examples:
```
feat: add tooltip hover delay theme
fix: correct dark mode badge colors
docs: update installation instructions
```

## Questions?

Open an issue on GitHub for:
- Bug reports
- Feature requests
- Questions about the theme
- Suggestions for improvements

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
