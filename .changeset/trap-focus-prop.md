---
"autopilot-vaul-svelte": minor
---

Add `trapFocus` prop to `Drawer.Content` (default `true`)

Focus is now trapped within the drawer by default when an overlay is present,
matching WCAG modal dialog guidelines. Set `trapFocus={false}` to opt out for
non-modal use cases like side navigation.
