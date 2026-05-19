# Phase 0: Upstream Heimdall Tokenization - Delivery Summary

## Executive Summary

Phase 0 implements CSS custom property tokens in Heimdall to enable consistent theming through token substitution rather than BEM class overrides. This unblocks Phase 1-5 of the Hesperus migration to Heimdall.

**Status**: Specification complete, ready for implementation in Heimdall repo  
**Effort**: 2-3 working days  
**Visual Impact**: Zero (tokens replace existing hardcoded values 1:1)  
**Risk**: Low (token values are current defaults, no behavioral changes)

---

## What is Phase 0?

Phase 0 addresses a critical architecture requirement: making Heimdall's token system comprehensive enough that Hesperus can override visual properties through token substitution rather than per-component BEM class overrides.

Currently:
- Heimdall has ~125 tokens but only 22% are used in components
- Components hardcode values like `border: 1px`, `opacity: 0.5`, `transition: 120ms`, `text-transform: none`, `letter-spacing: normal`
- Dark mode is implemented with per-component hardcoded hex values in `body.dark-canvas` selectors
- This forces theme layers to override individual components via BEM selectors, creating fragile coupling

Phase 0 solves this by:
1. Adding 10 new tokens for properties that Hesperus needs to customize
2. Refactoring component CSS to reference these tokens instead of hardcoding values
3. Consolidating dark mode rules to use `--canvas-*` token overrides
4. Documenting BEM class names as part of Heimdall's public API (breaking change guard)

---

## Deliverables

### 1. Token Definition File (`HEIMDALL_TOKENS.css`)

**Location**: Should be at `src/tokens.css` in Heimdall repo

Complete CSS custom property definitions including:

**New tokens (required by Phase 0)**:
- `--border-width-default` (1px)
- `--border-width-strong` (2px)
- `--disabled-opacity` (0.5)
- `--transition-fast` (80ms)
- `--transition-default` (120ms)
- `--transition-slow` (200ms)
- `--shadow-modal` (current modal shadow value)
- `--shadow-dropdown` (current dropdown shadow value)
- `--text-transform-heading` (none)
- `--letter-spacing-default` (normal)

**Existing tokens (documented)**:
- `--canvas-bg`, `--canvas-fg-1`, `--canvas-border` (light & dark mode)
- `--shell-bg`, `--shell-fg-1`, `--shell-border` (light & dark mode)
- `--font-sans`, `--font-mono`
- `--radius-*`, `--height-*`, `--padding-*`
- `--shadow-*`, `--timing-*`, `--focus-ring-*`

All tokens organized into logical groups with clear comments explaining purpose and use cases.

### 2. Component Refactoring Examples (`HEIMDALL_COMPONENT_REFACTORING_EXAMPLES.md`)

Shows before/after code for refactoring the highest-impact components:

- **Button** (26 hardcoded values)
- **Modal** (23 hardcoded values)
- **Sidebar** (25 hardcoded values)
- **Inputs** (10 hardcoded values)

Each example demonstrates:
- Replacing numeric values with token references
- Removing dark mode hex overrides (rely on token overrides instead)
- Applying typography tokens
- Maintaining visual equivalence (no changes to appearance)

Total: 105+ hardcoded values across 8 core components will be refactored.

### 3. BEM Class Stability Documentation (`HEIMDALL_BEM_STABILITY_DOCUMENTATION.md`)

**Location**: Should be added to Heimdall's README under "API Stability" section

Complete specification for Heimdall's public CSS class surface including:

- **Stability guarantees**: What is stable (BEM class names) vs. not (inline styles, pseudo-elements)
- **Per-component class lists**: All public `.block`, `.element`, `.modifier` names
- **Breaking change policy**: Renaming/removing classes = major version bump
- **Testing strategy**: CI verification, visual regression, theme integration
- **Migration guide**: For theme developers using Heimdall
- **FAQ**: Answers to common questions about class stability

Establishes Heimdall's BEM classes as part of its semver public API, protecting downstream themes from silent breakage.

### 4. Implementation Checklist (`PHASE_0_IMPLEMENTATION_CHECKLIST.md`)

Complete task list for implementing Phase 0:

**Sections**:
1. Token definition phase (4 tasks)
2. Component refactoring (8 components, 105+ values)
3. Dark mode refactoring (consolidate to `--canvas-*` tokens)
4. Documentation (README updates, code comments)
5. Testing (Playwright visual regression suite)
6. Quality assurance (verification checklist)
7. Acceptance criteria (6 acceptance tests)
8. Post-Phase 0 unblocking (steps to proceed to Phase 1)

Includes specific line-by-line refactoring guidance for each component.

### 5. Requirements Reference (`HEIMDALL_TOKENS_REFERENCE.md`)

High-level overview of Phase 0 requirements including:

- Required tokens and their default/override values
- Component impact analysis (which components need which tokens)
- Verification checklist
- Integration with Hesperus theme layer
- Related ADRs and architecture decisions

---

## How to Use These Deliverables

### In Heimdall Repository

1. **Copy `HEIMDALL_TOKENS.css`** to `src/tokens.css`
   - Ensure it's imported by your main CSS entry point
   - Verify `body.dark-canvas` rules exist for dark mode

2. **Follow `PHASE_0_IMPLEMENTATION_CHECKLIST.md`**
   - Work through each component in priority order
   - Use `HEIMDALL_COMPONENT_REFACTORING_EXAMPLES.md` as reference for patterns
   - Check off tasks as you complete them

3. **Add `HEIMDALL_BEM_STABILITY_DOCUMENTATION.md` to README**
   - Create "API Stability" or "Public CSS Classes" section
   - Include links to the full documentation
   - Make it discoverable for theme developers

4. **Run visual regression tests**
   - Before: baseline of current Heimdall appearance
   - After each component: verify zero visual changes
   - After all components: full suite must pass
   - With Hesperus theme: verify Hesperus styling works correctly

5. **Create pull request**
   - Include all refactored component CSS files
   - Include updated `tokens.css`
   - Include README changes
   - Reference related ADRs and issues

6. **Merge and tag release**
   - Merge to main branch
   - Tag as appropriate version (likely v0.3.0+)
   - Update changelog with token additions

### In Hesperus Repository (Phase 1)

Once Phase 0 is merged in Heimdall:

1. Update `package.json` to require new Heimdall version
2. Use `HEIMDALL_TOKENS.css` as reference for token overrides
3. Create `src/tokens.css` overriding key tokens:
   - `--border-width-default: 2px;`
   - `--disabled-opacity: 0.4;`
   - `--transition-*` values
   - `--shadow-modal: none;`, `--shadow-dropdown: none;`
   - `--text-transform-heading: uppercase;`
   - `--letter-spacing-default: 0.05em;`
4. Override `--canvas-*` tokens for Hesperus's retro aesthetic
5. Create minimal BEM overrides for hover-flip, focus rings, other Hesperus-specific behaviors

---

## Integration with Architecture Decisions

### ADR-3: Upstream Tokenization in Heimdall

**Decision**: ✓ Implemented in Phase 0

Heimdall adds 10 required tokens before Hesperus builds its override layer. This improves Heimdall's own architecture (better token usage, 22% → 100%) and makes all future themes feasible.

### ADR-2: BEM Override Stability Contract

**Decision**: ✓ Implemented in Phase 0

Heimdall documents its public BEM class names as semver-stable API, protecting Hesperus's CSS override layer from silent breakage when Heimdall updates.

### ADR-5: Dark Mode Selector

**Decision**: ✓ Supported in Phase 0

Heimdall maintains `body.dark-canvas` as its dark mode selector. All color overrides use `--canvas-*` tokens, enabling Hesperus to override dark mode with `html.dark` selector without per-component rewrites.

---

## Success Criteria

Phase 0 is complete when:

- ✓ All 10 required tokens exist in `tokens.css` with documented defaults
- ✓ Button, Sidebar, Modal, Table, inputs reference new tokens (no hardcoded equivalents)
- ✓ All dark-mode rules use `--canvas-*` overrides (no per-component dark hex values)
- ✓ Heimdall README documents public BEM classes and stability policy
- ✓ Playwright visual regression suite passes with zero diffs
- ✓ Code reviewed and approved in Heimdall repo
- ✓ Merged to main and tagged

---

## File Inventory

### New Files Created (for Heimdall repo)

1. **src/tokens.css** (copy from `HEIMDALL_TOKENS.css`)
   - ~200 lines of CSS custom properties
   - Organized into logical groups

2. **docs/BEM_STABILITY.md** or README section (from `HEIMDALL_BEM_STABILITY_DOCUMENTATION.md`)
   - ~350 lines of markdown documentation
   - Per-component class listings
   - Breaking change policy
   - Testing strategy

### Updated Files (in Heimdall repo)

1. **src/components/Button.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

2. **src/components/Sidebar.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

3. **src/components/Modal.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

4. **src/components/Table.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

5. **src/components/{TextInput,TextArea,Select,Field}.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

6. **src/components/{Statusbar,Titlebar}.css**
   - Replace hardcoded values with token references
   - Remove dark mode hex values
   - Maintain visual equivalence

7. **README.md**
   - Add "API Stability" or "Public Classes" section
   - Document required tokens
   - Link to full BEM stability guide

### Reference Files (for documentation/planning)

1. `HEIMDALL_TOKENS_REFERENCE.md` - Overview and planning
2. `HEIMDALL_COMPONENT_REFACTORING_EXAMPLES.md` - Before/after examples
3. `PHASE_0_IMPLEMENTATION_CHECKLIST.md` - Detailed task list
4. `PHASE_0_DELIVERY_SUMMARY.md` - This file

---

## Risks and Mitigations

| Risk | Mitigation |
|------|-----------|
| Token values don't match current defaults | Verify each token default matches current hardcoded value before refactoring |
| Visual regressions in specific browsers | Run Playwright suite on Chrome, Firefox, Safari; CSS custom properties have ~95% browser support |
| Dark mode breaks | Verify all `body.dark-canvas` rules use `--canvas-*` tokens; run full visual suite in dark mode |
| BEM classes accidentally renamed during refactoring | Use grep to verify all public classes still exist; ensure no unintended renames |
| Hesperus integration fails | Once Phase 0 is complete, test with Hesperus override sheet loaded; verify all token overrides work |

---

## Timeline Estimate

- **Token definition + comments**: 2-4 hours
- **Button refactoring**: 1-2 hours
- **Sidebar refactoring**: 1-2 hours
- **Modal refactoring**: 1-2 hours
- **Table refactoring**: 30 minutes
- **Inputs refactoring**: 1 hour
- **Statusbar + Titlebar refactoring**: 30 minutes
- **Dark mode consolidation**: 1-2 hours
- **Documentation (README + BEM guide)**: 2-3 hours
- **Testing (Playwright visual regression)**: 1-2 hours
- **Code review + fixes**: 1-2 hours
- **Total**: 12-22 hours (~2-3 working days)

---

## Next Steps

1. **Copy deliverables to Heimdall repo**
   - `HEIMDALL_TOKENS.css` → `src/tokens.css`
   - `HEIMDALL_BEM_STABILITY_DOCUMENTATION.md` → `docs/BEM_STABILITY.md` or README section
   - `HEIMDALL_COMPONENT_REFACTORING_EXAMPLES.md` → reference for component work

2. **Begin implementation**
   - Follow `PHASE_0_IMPLEMENTATION_CHECKLIST.md` in order
   - Refactor components in priority order (Button, Sidebar, Modal, Table, Inputs, Statusbar, Titlebar)
   - Run tests after each component

3. **Create pull request**
   - Include all refactored files + token definitions + documentation
   - Link to relevant ADRs and issues (#20, ADR-2, ADR-3)

4. **Merge and tag**
   - Merge to main
   - Tag release
   - Update changelog

5. **Unblock Phase 1**
   - Hesperus updates to require new Heimdall version
   - Proceeds with package refactoring (Phase 1)

---

**Prepared for**: Heimdall v0.3.0+ implementation  
**Date**: 2026-05-19  
**Related**: Issue #20, ADR-2 (BEM Stability), ADR-3 (Upstream Tokenization), ADR-5 (Dark Mode)  
**Status**: ✓ Specification complete, ready for implementation
