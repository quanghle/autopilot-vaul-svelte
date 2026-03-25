<script lang="ts">
	import { Drawer, type DrawerDirection } from "$lib/index.js";
	import CenteredContent from "./centered-content.svelte";
	import type { Snippet } from "svelte";

	let { drawerDirection, children }: { drawerDirection: DrawerDirection; children?: Snippet } =
		$props();

	const contentDirectionClass = $derived(
		drawerDirection === "bottom"
			? "right-0 bottom-0 left-0 h-[50%] flex-col rounded-t-[10px]"
			: drawerDirection === "top"
				? "top-0 right-0 left-0 h-[50%] flex-col rounded-b-[10px]"
				: drawerDirection === "left"
					? "top-0 bottom-0 left-0 w-[50%] flex-row rounded-r-[10px]"
					: "top-0 right-0 bottom-0 w-[50%] flex-row rounded-l-[10px]"
	);

	const innerDirectionClass = $derived(
		drawerDirection === "bottom"
			? "flex-col"
			: drawerDirection === "top"
				? "flex-col-reverse"
				: drawerDirection === "left"
					? "flex-row-reverse"
					: "flex-row"
	);

	const handleDirectionClass = $derived(
		drawerDirection === "top" || drawerDirection === "bottom"
			? "mx-auto h-1.5 w-12"
			: "my-auto h-12 w-1.5"
	);
</script>

<Drawer.Content data-testid="content" class="fixed flex bg-zinc-100 p-6 {contentDirectionClass}">
	<div class="flex h-full w-full gap-8 rounded-full {innerDirectionClass}">
		<div class="rounded-full bg-zinc-300 {handleDirectionClass}"></div>
		<div class="grid h-full w-full place-content-center">
			<CenteredContent>
				{@render children?.()}
			</CenteredContent>
		</div>
	</div>
</Drawer.Content>
