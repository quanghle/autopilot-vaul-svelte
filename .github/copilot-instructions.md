# Copilot Instructions for autopilot-vaul-svelte

## Project Overview

This is **autopilot-vaul-svelte**, an unstyled, gesture-driven drawer component library for Svelte 5. It wraps the Bits UI `Dialog` primitive and provides swipe/drag interactions, snap points, directional drawers, and background scaling. The library is headless (unstyled) — consumers apply their own styles.

## Tech Stack

- **Svelte 5** with runes (`$state`, `$derived`, `$effect`, `$props`, `$bindable`)
- **SvelteKit** for the demo site and library packaging (`@sveltejs/package`)
- **TypeScript** (strict mode, `NodeNext` module resolution)
- **Vite 8** for bundling
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (CSS-first approach, `@import "tailwindcss"`)
- **Bits UI 2.x** as the accessible Dialog primitive (no builder pattern)
- **Vitest 4** + `@testing-library/svelte` for unit tests
- **Playwright** for E2E tests
- **ESLint 10** (flat config) + **Prettier** for linting/formatting
- **pnpm** as the package manager (`pnpm@9.6.0`)
- **Changesets** for versioning and changelogs
- **Dependabot** for automated dependency updates (npm and GitHub Actions, weekly)

## Commands

| Task         | Command               |
| ------------ | --------------------- |
| Dev server   | `pnpm run dev`        |
| Build        | `pnpm run build`      |
| Lint         | `pnpm run lint`       |
| Format       | `pnpm run format`     |
| Type-check   | `pnpm run check`      |
| Test (watch) | `pnpm run test`       |
| Test (CI)    | `pnpm run test --run` |
| E2E tests    | `pnpm run test:e2e`   |
| Package lib  | `pnpm run package`    |

## Project Structure

```
src/
├── lib/                        # Published library code
│   ├── index.ts                # Main entry: re-exports from vaul/
│   ├── vaul/                   # Public drawer components
│   │   ├── index.ts            # Exports `Drawer` namespace and types
│   │   ├── ctx.ts              # Svelte context (setCtx / getCtx)
│   │   └── components/         # Svelte components
│   │       ├── root.svelte     # Drawer.Root — sets up context, global CSS
│   │       ├── content.svelte  # Drawer.Content — drag handlers
│   │       ├── overlay.svelte  # Drawer.Overlay — backdrop
│   │       ├── trigger.svelte  # Drawer.Trigger — open button
│   │       ├── close.svelte    # Drawer.Close — close button
│   │       ├── nested-root.svelte
│   │       ├── visible.svelte  # Visibility state manager
│   │       └── types.ts        # Component prop types
│   └── internal/               # Internal utilities (not exported)
│       ├── vaul.ts             # Core drawer logic (createVaul)
│       ├── constants.ts        # Transition timing, thresholds, layout constants
│       ├── types.ts            # Shared types (DrawerDirection, etc.)
│       ├── snap-points.ts      # Snap point calculations
│       ├── prevent-scroll.ts   # Scroll lock logic
│       ├── escape-keydown.ts   # Escape key handling
│       ├── position-fixed.ts   # Fixed positioning detection
│       └── helpers/            # Small utility functions
│           ├── store.ts        # Reactive store utilities
│           ├── style.ts        # CSS style helpers, makeTranslate
│           ├── is.ts           # Type/platform guards (isInput, isVertical, isIOS, etc.)
│           ├── chain.ts        # Event handler chaining
│           ├── event-listener.ts
│           ├── object.ts       # omit, removeUndefined
│           ├── options.ts      # Option updater
│           └── noop.ts         # No-op function
├── routes/                     # Demo site (SvelteKit pages)
│   ├── +page.svelte            # Home page
│   ├── +layout.svelte          # Root layout (imports app.css)
│   └── examples/               # Example drawer demos
└── config/                     # Site configuration
```

## Svelte 5 Patterns

This codebase uses **Svelte 5 runes** exclusively. Never use legacy Svelte 4 patterns.

### Props

```svelte
<script lang="ts">
	import type { Props } from "./types.js";

	let { open = $bindable(false), direction = "bottom", children, ...restProps }: Props = $props();
</script>
```

- Use `$props()` with destructuring (never `export let`)
- Use `$bindable()` for two-way binding props
- Spread remaining props with `...restProps`
- Type props with a `Props` type alias defined in a sibling `types.ts`

### Reactivity

```ts
let count = $state(0); // mutable state
let doubled = $derived(count * 2); // derived value
$effect(() => {
	/* side effect */
}); // reactive effect
```

- Use `$state()` instead of `let x = value`
- Use `$derived()` instead of `$: x = ...`
- Use `$effect()` instead of `$: { ... }` blocks

### Rendering Children (Snippets)

```svelte
{@render children?.()}
```

- Use `Snippet` type from `"svelte"` for children props
- Never use `<slot>` — use `{@render}` with snippets instead

### Context

```ts
// Setting context (in root component)
import { setContext } from "svelte";
const VAUL_ROOT = Symbol("VAUL_ROOT");
setContext(VAUL_ROOT, value);

// Getting context (in child components)
import { getContext } from "svelte";
const ctx = getContext<ReturnType<typeof setCtx>>(VAUL_ROOT);
```

Use `Symbol` keys for type-safe context. See `src/lib/vaul/ctx.ts` for the pattern.

## Component Architecture

### Compound Component Pattern

The drawer is used as a set of composable sub-components:

```svelte
<Drawer.Root>
	<Drawer.Trigger>Open</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Content>...</Drawer.Content>
		<Drawer.Overlay />
	</Drawer.Portal>
</Drawer.Root>
```

### Bits UI Integration

Components wrap Bits UI Dialog primitives:

- `Drawer.Root` → `Dialog.Root`
- `Drawer.Content` → `Dialog.Content`
- `Drawer.Overlay` → `Dialog.Overlay`
- `Drawer.Trigger` → `Dialog.Trigger`
- `Drawer.Close` → `Dialog.Close`
- `Drawer.Portal` / `Drawer.Title` / `Drawer.Description` are re-exported from `Dialog`

### Data Attributes

The library uses `data-vaul-*` attributes for styling hooks:

- `data-vaul-drawer` — on the drawer content element
- `data-vaul-drawer-direction` — `"top"`, `"bottom"`, `"left"`, `"right"`
- `data-vaul-drawer-visible` — `"true"` when visible
- `data-vaul-overlay` — on the overlay element
- `data-vaul-snap-point-active` — indicates active snap point state
- `data-vaul-drawer-wrapper` — on the wrapper element for background scaling

## Internal Conventions

### Constants

All shared numeric/string constants live in `src/lib/internal/constants.ts`. This includes transition timing, thresholds, and layout values. Use the pre-built constants instead of inline values:

```ts
import {
	TRANSFORM_TRANSITION,
	OPACITY_TRANSITION,
	CLOSE_THRESHOLD,
	BORDER_RADIUS,
	DRAG_CLASS,
} from "$lib/internal/constants.js";
```

### Import Paths

Use the `$lib` alias for imports within the library:

```ts
import { createVaul } from "$lib/internal/vaul.js";
import { isVertical } from "$lib/internal/helpers/is.js";
```

Always include the `.js` extension in import paths (TypeScript `NodeNext` resolution).

### Type Definitions

- Public component prop types live in `src/lib/vaul/components/types.ts`
- Internal shared types live in `src/lib/internal/types.ts`
- Use `HTMLAttributes<HTMLElement>` from `"svelte/elements"` for component prop types that extend native HTML attributes
- The `DrawerDirection` type is `"left" | "right" | "top" | "bottom"`

### Helper Functions

- `isInput(el)` — checks if an element is a text input, textarea, or contenteditable
- `isVertical(direction)` — checks if direction is `"top"` or `"bottom"`
- `isBottomOrRight(direction)` — checks if direction is `"bottom"` or `"right"`
- `isIOS()` / `isSafari()` — platform detection (consolidated in `helpers/is.ts`)
- `makeTranslate(direction, value)` — builds a `translate3d` string for the correct axis
- `dampenValue(val)` — applies logarithmic dampening for drag overshoot

## Code Style

### Formatting (Prettier)

- **Tabs** for indentation (not spaces)
- **Double quotes** for strings
- **Trailing commas** in ES5 positions
- **Print width:** 100 characters
- Svelte files use the `svelte` parser

### Linting (ESLint)

- `no-console` → warn
- `@typescript-eslint/no-unused-vars` → warn (prefix unused params with `_`)
- Most Svelte-specific rules are relaxed (see `eslint.config.js`)

## Testing

### Test Files

Place test files adjacent to the source files they test, using `.test.ts` suffix:

```
src/lib/internal/vaul.test.ts
src/lib/internal/constants.test.ts
src/lib/internal/helpers/is.test.ts
```

### Test Framework

- **Vitest** for unit tests with `jsdom` environment
- **@testing-library/svelte** for component rendering
- **@testing-library/user-event** for simulating user interactions

### Test Style

```ts
import { describe, it, expect } from "vitest";

describe("functionName", () => {
	it("should do something", () => {
		expect(result).toBe(expected);
	});
});
```

## CI/CD

### Pull Request Checks (`ci.yml`)

Three parallel jobs run on every PR to `main`:

- **lint** — Prettier + ESLint + `svelte-check` type checking
- **test** — Vitest unit tests + Playwright E2E tests (Chromium)
- **build** — Full production build (`vite build` + `svelte-package` + `publint`)

Playwright test reports are uploaded as artifacts on failure.

### Release Automation (`release.yml`)

On push to `main`, the [changesets/action](https://github.com/changesets/action) either:

1. Opens a "Version Packages" PR that bumps versions and updates the changelog, or
2. Publishes to npm if the version PR was just merged.

Requires the `NPM_TOKEN` secret to be configured in repo settings.

### Demo Site (`static.yml`)

Deploys to **GitHub Pages** at `https://quanghle.github.io/autopilot-vaul-svelte` on push to `main`.

### Dependency Updates (`dependabot.yml`)

Dependabot opens weekly PRs for npm dependencies (dev deps grouped) and GitHub Actions versions.

## Versioning & Releases

- Use **Changesets** for version management: `pnpm changeset` to create a changeset
- Follow **semver** conventions
- Changelog is auto-generated using `@svitejs/changesets-changelog-github-compact`
- Publishing is automated via the release workflow; manual publish: `pnpm run release`
