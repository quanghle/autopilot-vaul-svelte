import { describe, it, expect, vi } from "vitest";
import { writable, get } from "svelte/store";
import { overridable, toWritableStores } from "./store.js";

describe("overridable", () => {
	it("sets value on the underlying store", () => {
		const store = writable(0);
		const o = overridable(store);

		o.set(42);
		expect(get(store)).toBe(42);
	});

	it("updates value on the underlying store", () => {
		const store = writable(10);
		const o = overridable(store);

		o.update((curr) => curr + 5);
		expect(get(store)).toBe(15);
	});

	it("calls onChange when set is called", () => {
		const store = writable("hello");
		const onChange = vi.fn(({ next }) => next);
		const o = overridable(store, onChange);

		o.set("world");

		expect(onChange).toHaveBeenCalledWith({ curr: "hello", next: "world" });
		expect(get(store)).toBe("world");
	});

	it("calls onChange when update is called", () => {
		const store = writable(1);
		const onChange = vi.fn(({ next }) => next);
		const o = overridable(store, onChange);

		o.update((curr) => curr * 2);

		expect(onChange).toHaveBeenCalledWith({ curr: 1, next: 2 });
		expect(get(store)).toBe(2);
	});

	it("uses the return value of onChange as the final value", () => {
		const store = writable(0);
		// onChange overrides the next value
		const onChange = vi.fn(() => 999);
		const o = overridable(store, onChange);

		o.set(42);

		expect(get(store)).toBe(999);
	});

	it("calls sideEffect with the resolved value", () => {
		const store = writable(0);
		const sideEffect = vi.fn();
		const o = overridable(store);

		o.update((curr) => curr + 1, sideEffect);
		expect(sideEffect).toHaveBeenCalledWith(1);
	});

	it("subscribe works and reflects changes", () => {
		const store = writable(0);
		const o = overridable(store);
		const values: number[] = [];

		const unsub = o.subscribe((v) => values.push(v));
		o.set(1);
		o.set(2);
		unsub();

		expect(values).toEqual([0, 1, 2]);
	});
});

describe("toWritableStores", () => {
	it("converts an object of values to writable stores", () => {
		const stores = toWritableStores({ a: 1, b: "hello", c: true });

		expect(get(stores.a)).toBe(1);
		expect(get(stores.b)).toBe("hello");
		expect(get(stores.c)).toBe(true);
	});

	it("creates independent writable stores", () => {
		const stores = toWritableStores({ x: 10, y: 20 });

		stores.x.set(100);
		expect(get(stores.x)).toBe(100);
		expect(get(stores.y)).toBe(20);
	});

	it("handles empty object", () => {
		const stores = toWritableStores({});
		expect(stores).toEqual({});
	});
});
