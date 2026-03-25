<script lang="ts">
	import { Drawer } from "$lib/index.js";
	import CenteredContent from "./(components)/centered-content.svelte";
	import DirectionDrawer from "./(components)/direction-drawer.svelte";
	import NestedDrawer from "./examples/nested-drawer.svelte";
	import ScrollableDrawer from "./examples/scrollable-drawer.svelte";
	import SnapPointDrawer from "./examples/snap-point-drawer.svelte";
	import NonDraggableDrawer from "./examples/non-draggable-drawer.svelte";

	const directions = ["top", "left", "bottom", "right"] as const;
</script>

<!-- Hero Section -->
<div class="relative">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute top-0 left-1/2 z-10 h-[400px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
		style:--background-image="radial-gradient(#A4A4A3, transparent 50%)"
	></div>
	<svg
		class="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] stroke-gray-200 opacity-50"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="grid-pattern"
				width={200}
				height={200}
				x="50%"
				y={-1}
				patternUnits="userSpaceOnUse"
			>
				<path d="M100 200V.5M.5 .5H200" fill="none" />
			</pattern>
		</defs>
		<svg x="50%" y={-1} class="overflow-visible fill-gray-50">
			<path
				d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
				stroke-width={0}
			/>
		</svg>
		<rect width="100%" height="100%" stroke-width={0} fill="url(#grid-pattern)" />
	</svg>

	<div class="mx-auto max-w-3xl px-6 pt-32 pb-16 text-center sm:pt-48">
		<h1 class="relative mb-4 text-5xl font-bold tracking-tight sm:text-7xl">Auto Vaul Svelte</h1>
		<p class="text-lg text-gray-600 sm:text-xl">
			An unstyled, gesture-driven drawer component for Svelte. Use as a Dialog replacement on mobile
			and tablet devices.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Drawer.Root shouldScaleBackground>
				<Drawer.Trigger
					class="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
				>
					Try it out
				</Drawer.Trigger>
				<Drawer.Portal>
					<Drawer.Overlay class="fixed inset-0 bg-black/40" />
					<Drawer.Content
						class="fixed right-0 bottom-0 left-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-gray-100"
					>
						<div class="flex-1 rounded-t-[10px] bg-white p-4">
							<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
							<CenteredContent>
								<p class="mb-4 text-gray-600">
									👋 Welcome! This is a drawer built with <strong>autopilot-vaul-svelte</strong>.
								</p>
								<p class="mb-4 text-gray-600">
									Swipe down to dismiss, or explore the demos below to see everything the library
									can do.
								</p>
								<p class="text-gray-600">
									Scroll down to see the full documentation and interactive examples.
								</p>
							</CenteredContent>
						</div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
			<a
				href="https://github.com/quanghle/autopilot-vaul-svelte"
				class="rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				target="_blank"
			>
				GitHub <span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</div>

<!-- Basic Usage Section -->
<section class="relative mx-auto max-w-3xl px-6 py-16">
	<h2 class="mb-6 text-3xl font-bold tracking-tight">Basic Usage</h2>
	<p class="mb-6 text-gray-600">
		Import the <code class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm">Drawer</code>
		component and compose a drawer using its sub-components:
	</p>
	<div class="overflow-hidden rounded-lg bg-gray-900 shadow-lg">
		<div class="flex items-center gap-2 border-b border-gray-700 px-4 py-2">
			<span class="text-xs text-gray-400">Svelte</span>
		</div>
		<pre class="overflow-x-auto p-4 text-sm text-gray-100"><code
				>&lt;script&gt;
  import &lbrace; Drawer &rbrace; from "autopilot-vaul-svelte";
&lt;/script&gt;

&lt;Drawer.Root&gt;
  &lt;Drawer.Trigger&gt;Open Drawer&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Overlay class="fixed inset-0 bg-black/40" /&gt;
    &lt;Drawer.Content&gt;
      &lt;Drawer.Title&gt;Drawer Title&lt;/Drawer.Title&gt;
      &lt;Drawer.Description&gt;Drawer description.&lt;/Drawer.Description&gt;
      &lt;p&gt;Your content here&lt;/p&gt;
      &lt;Drawer.Close&gt;Close&lt;/Drawer.Close&gt;
    &lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
			></pre>
	</div>

	<div class="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
		<p class="text-sm text-amber-800">
			<strong>💡 Tip:</strong> Add
			<code class="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs"
				>data-vaul-drawer-wrapper</code
			>
			to your main content wrapper element to enable background scaling with
			<code class="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">shouldScaleBackground</code>.
		</p>
	</div>
</section>

<!-- Interactive Examples Section -->
<section class="relative mx-auto max-w-3xl px-6 py-16">
	<h2 class="mb-2 text-3xl font-bold tracking-tight">Interactive Examples</h2>
	<p class="mb-10 text-gray-600">
		Click any button below to see the drawer in action. Each example showcases a different feature
		of the library.
	</p>

	<!-- Basic Drawer -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Basic Drawer</h3>
		<p class="mb-4 text-sm text-gray-600">
			The simplest drawer with background scaling enabled. Swipe down to dismiss.
		</p>
		<Drawer.Root shouldScaleBackground>
			<Drawer.Trigger
				class="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
			>
				Open Basic Drawer
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay class="fixed inset-0 bg-black/40" />
				<Drawer.Content
					class="fixed right-0 bottom-0 left-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-gray-100"
				>
					<div class="flex-1 rounded-t-[10px] bg-white p-4">
						<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
						<CenteredContent>
							<p class="mb-2 text-gray-600">
								This is a basic drawer with <code
									class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
									>shouldScaleBackground</code
								> enabled.
							</p>
							<p class="text-gray-600">
								Notice how the background content scales down when the drawer opens.
							</p>
						</CenteredContent>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;Drawer.Root shouldScaleBackground&gt;
  &lt;Drawer.Trigger&gt;Open&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Overlay class="fixed inset-0 bg-black/40" /&gt;
    &lt;Drawer.Content class="..."&gt;
      &lt;p&gt;Your content here&lt;/p&gt;
    &lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
				></pre>
		</div>
	</div>

	<!-- Snap Points -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Snap Points</h3>
		<p class="mb-4 text-sm text-gray-600">
			Define multiple stop positions for the drawer. Users can drag between snap points. Supports
			pixel values and percentage of screen height.
		</p>
		<SnapPointDrawer />
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;script&gt;
  const snapPoints = ["148px", "355px", 1];
  let activeSnapPoint = $state("148px");
&lt;/script&gt;

&lt;Drawer.Root &lbrace;snapPoints&rbrace; bind:activeSnapPoint&gt;
  &lt;Drawer.Trigger&gt;Open&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Content&gt;...&lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
				></pre>
		</div>
	</div>

	<!-- Nested Drawers -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Nested Drawers</h3>
		<p class="mb-4 text-sm text-gray-600">
			Open a drawer inside another drawer using <code
				class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">Drawer.NestedRoot</code
			>. The parent drawer automatically scales when the nested drawer opens.
		</p>
		<NestedDrawer />
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;Drawer.Root&gt;
  &lt;Drawer.Trigger&gt;Open&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Overlay /&gt;
    &lt;Drawer.Content&gt;
      &lt;Drawer.NestedRoot&gt;
        &lt;Drawer.Trigger&gt;Open Nested&lt;/Drawer.Trigger&gt;
        &lt;Drawer.Portal&gt;
          &lt;Drawer.Overlay /&gt;
          &lt;Drawer.Content&gt;Nested content&lt;/Drawer.Content&gt;
        &lt;/Drawer.Portal&gt;
      &lt;/Drawer.NestedRoot&gt;
    &lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
				></pre>
		</div>
	</div>

	<!-- Scrollable Content -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Scrollable Content</h3>
		<p class="mb-4 text-sm text-gray-600">
			Drawers handle scrollable content naturally. The drawer won't dismiss while scrolling inside
			the content area. A brief scroll lock prevents accidental dismissal.
		</p>
		<ScrollableDrawer />
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;Drawer.Root&gt;
  &lt;Drawer.Trigger&gt;Open&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Overlay /&gt;
    &lt;Drawer.Content class="... max-h-[96%]"&gt;
      &lt;div class="overflow-auto"&gt;
        &lt;!-- Long scrollable content --&gt;
      &lt;/div&gt;
    &lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
				></pre>
		</div>
	</div>

	<!-- Direction Control -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Direction Control</h3>
		<p class="mb-4 text-sm text-gray-600">
			Drawers can open from any edge of the screen: <code
				class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">top</code
			>,
			<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">bottom</code>,
			<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">left</code>, or
			<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">right</code>.
		</p>
		<div class="flex flex-wrap gap-3">
			{#each directions as direction}
				<DirectionDrawer {direction} />
			{/each}
		</div>
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;Drawer.Root direction="right"&gt;
  &lt;Drawer.Trigger&gt;Open&lt;/Drawer.Trigger&gt;
  &lt;Drawer.Portal&gt;
    &lt;Drawer.Overlay /&gt;
    &lt;Drawer.Content class="..."&gt;
      Content slides in from the right
    &lt;/Drawer.Content&gt;
  &lt;/Drawer.Portal&gt;
&lt;/Drawer.Root&gt;</code
				></pre>
		</div>
	</div>

	<!-- Non-Draggable Areas -->
	<div class="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
		<h3 class="mb-2 text-lg font-semibold">Non-Draggable Areas</h3>
		<p class="mb-4 text-sm text-gray-600">
			Add <code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">data-vaul-no-drag</code>
			to any element to prevent drawer drag interactions on that area. Useful for interactive content
			like maps, sliders, or canvases.
		</p>
		<NonDraggableDrawer />
		<div class="mt-4 overflow-hidden rounded-lg bg-gray-900">
			<pre class="overflow-x-auto p-3 text-xs text-gray-100"><code
					>&lt;Drawer.Content&gt;
  &lt;!-- This area can be dragged to dismiss --&gt;
  &lt;p&gt;Drag here to close the drawer&lt;/p&gt;

  &lt;!-- This area won't trigger drawer dismiss --&gt;
  &lt;div data-vaul-no-drag&gt;
    &lt;p&gt;Interactions here won't close the drawer&lt;/p&gt;
  &lt;/div&gt;
&lt;/Drawer.Content&gt;</code
				></pre>
		</div>
	</div>
</section>

<!-- API Reference Section -->
<section class="relative mx-auto max-w-3xl px-6 py-16">
	<h2 class="mb-6 text-3xl font-bold tracking-tight">API Reference</h2>

	<!-- Root -->
	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Root</h3>
		<p class="mb-4 text-gray-600">
			The root component that contains all parts of the drawer. Wraps the Bits UI Dialog primitive.
		</p>
		<div class="overflow-x-auto">
			<table class="w-full text-left text-sm">
				<thead>
					<tr class="border-b border-gray-200">
						<th class="py-3 pr-4 font-semibold">Prop</th>
						<th class="py-3 pr-4 font-semibold">Type</th>
						<th class="py-3 pr-4 font-semibold">Default</th>
						<th class="py-3 font-semibold">Description</th>
					</tr>
				</thead>
				<tbody class="text-gray-600">
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">open</td>
						<td class="py-3 pr-4 font-mono text-xs">boolean</td>
						<td class="py-3 pr-4 font-mono text-xs">false</td>
						<td class="py-3"
							>Controlled open state. Use <code class="rounded bg-gray-100 px-1 font-mono text-xs"
								>bind:open</code
							> for two-way binding.</td
						>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">onOpenChange</td>
						<td class="py-3 pr-4 font-mono text-xs">(open: boolean) =&gt; void</td>
						<td class="py-3 pr-4 font-mono text-xs">—</td>
						<td class="py-3">Callback fired when the open state changes.</td>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">shouldScaleBackground</td>
						<td class="py-3 pr-4 font-mono text-xs">boolean</td>
						<td class="py-3 pr-4 font-mono text-xs">false</td>
						<td class="py-3"
							>Scale the background when open. Requires <code
								class="rounded bg-gray-100 px-1 font-mono text-xs">[data-vaul-drawer-wrapper]</code
							> on wrapper element.</td
						>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">closeThreshold</td>
						<td class="py-3 pr-4 font-mono text-xs">number</td>
						<td class="py-3 pr-4 font-mono text-xs">0.25</td>
						<td class="py-3">Value between 0 and 1 — the percentage swiped to trigger close.</td>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">scrollLockTimeout</td>
						<td class="py-3 pr-4 font-mono text-xs">number</td>
						<td class="py-3 pr-4 font-mono text-xs">100</td>
						<td class="py-3">Milliseconds the drawer is not draggable after scrolling content.</td>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">snapPoints</td>
						<td class="py-3 pr-4 font-mono text-xs">(number | string)[]</td>
						<td class="py-3 pr-4 font-mono text-xs">—</td>
						<td class="py-3"
							>Array of snap points. Use numbers (0-1) for percentage or strings like <code
								class="rounded bg-gray-100 px-1 font-mono text-xs">"148px"</code
							>.</td
						>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">activeSnapPoint</td>
						<td class="py-3 pr-4 font-mono text-xs">number | string | null</td>
						<td class="py-3 pr-4 font-mono text-xs">—</td>
						<td class="py-3"
							>The currently active snap point. Supports <code
								class="rounded bg-gray-100 px-1 font-mono text-xs">bind:activeSnapPoint</code
							>.</td
						>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">fadeFromIndex</td>
						<td class="py-3 pr-4 font-mono text-xs">number</td>
						<td class="py-3 pr-4 font-mono text-xs">last snap point</td>
						<td class="py-3">Index of snap point from which overlay fade starts.</td>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">direction</td>
						<td class="py-3 pr-4 font-mono text-xs">"top" | "bottom" | "left" | "right"</td>
						<td class="py-3 pr-4 font-mono text-xs">"bottom"</td>
						<td class="py-3">Which edge the drawer slides in from.</td>
					</tr>
					<tr class="border-b border-gray-100">
						<td class="py-3 pr-4 font-mono text-xs">backgroundColor</td>
						<td class="py-3 pr-4 font-mono text-xs">string</td>
						<td class="py-3 pr-4 font-mono text-xs">"black"</td>
						<td class="py-3"
							>Background color behind the scaled content when <code
								class="rounded bg-gray-100 px-1 font-mono text-xs">shouldScaleBackground</code
							> is true.</td
						>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Other Components -->
	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Trigger</h3>
		<p class="text-gray-600">
			The button that opens the drawer. Accepts all standard button props and Bits UI
			<a
				href="https://www.bits-ui.com/docs/components/dialog#trigger"
				class="underline"
				target="_blank">Dialog.Trigger</a
			> props.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Content</h3>
		<p class="text-gray-600">
			The drawer panel that slides into view. Style this with position, size, and appearance
			classes. Accepts Bits UI
			<a
				href="https://www.bits-ui.com/docs/components/dialog#content"
				class="underline"
				target="_blank">Dialog.Content</a
			> props.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Overlay</h3>
		<p class="text-gray-600">
			The backdrop that covers the page when the drawer is open. Typically styled with <code
				class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">fixed inset-0 bg-black/40</code
			>. Accepts Bits UI
			<a
				href="https://www.bits-ui.com/docs/components/dialog#overlay"
				class="underline"
				target="_blank">Dialog.Overlay</a
			> props.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Portal</h3>
		<p class="text-gray-600">
			Portals the drawer content to the document body, ensuring it renders above all other content.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Title</h3>
		<p class="text-gray-600">
			An accessible title announced when the drawer opens. Wraps Bits UI Dialog.Title.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Description</h3>
		<p class="text-gray-600">
			An optional accessible description announced when the drawer opens. Wraps Bits UI
			Dialog.Description.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.Close</h3>
		<p class="text-gray-600">
			A button that programmatically closes the drawer. Accepts Bits UI
			<a
				href="https://www.bits-ui.com/docs/components/dialog#close"
				class="underline"
				target="_blank">Dialog.Close</a
			> props.
		</p>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 text-xl font-semibold">Drawer.NestedRoot</h3>
		<p class="text-gray-600">
			Use inside a <code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
				>Drawer.Content</code
			>
			to create a nested drawer. The parent drawer automatically transitions when the nested drawer opens.
		</p>
	</div>
</section>

<!-- Footer -->
<footer class="mx-auto max-w-3xl border-t border-gray-200 px-6 py-12">
	<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
		<p class="text-sm text-gray-500">
			Built with <a href="https://svelte.dev" class="underline" target="_blank">Svelte</a> and
			<a href="https://www.bits-ui.com" class="underline" target="_blank">Bits UI</a>.
		</p>
		<div class="flex gap-6">
			<a
				class="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
				href="https://github.com/quanghle/autopilot-vaul-svelte"
				target="_blank"
			>
				GitHub
				<svg
					fill="none"
					height="16"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					width="16"
					aria-hidden="true"
					class="ml-0.5 h-3 w-3"
				>
					<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
					<path d="M15 3h6v6"></path>
					<path d="M10 14L21 3"></path>
				</svg>
			</a>
		</div>
	</div>
</footer>
