import type { Writable } from "svelte/store";
type Options = Record<string, Writable<unknown>>;
export declare function getOptionUpdater(options: Options): <K extends keyof typeof options>(key: K, value: unknown | undefined) => void;
export {};
