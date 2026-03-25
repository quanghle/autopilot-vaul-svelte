<script lang="ts">
	import "../app.css";
	import Metadata from "./metadata.svelte";

	let { children } = $props();
</script>

<Metadata />

<main data-vaul-drawer-wrapper="">
	{@render children?.()}
</main>
