import type { Props } from "./types.js";
import type { Snippet } from "svelte";
type $$ComponentProps = Props & {
    children?: Snippet;
};
declare const NestedRoot: import("svelte").Component<$$ComponentProps, {}, "open">;
type NestedRoot = ReturnType<typeof NestedRoot>;
export default NestedRoot;
