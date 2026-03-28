<script lang="ts">
	import { Drawer } from "$lib/index.js";
</script>

<button id="outside-button">Outside Button</button>

<Drawer.Root>
	<Drawer.Trigger id="trigger">Open Drawer</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed right-0 bottom-0 left-0 flex h-[50%] flex-col rounded-t-[10px] bg-white p-4"
		>
			<button id="inside-first">First Button</button>
			<button id="inside-second">Second Button</button>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<button id="outside-button-after">After Button</button>
