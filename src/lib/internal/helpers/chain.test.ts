import { describe, it, expect, vi } from "vitest";
import { chain } from "./chain.js";

describe("chain", () => {
	it("calls all provided callback functions", () => {
		const fn1 = vi.fn();
		const fn2 = vi.fn();
		const fn3 = vi.fn();

		const chained = chain(fn1, fn2, fn3);
		chained();

		expect(fn1).toHaveBeenCalledOnce();
		expect(fn2).toHaveBeenCalledOnce();
		expect(fn3).toHaveBeenCalledOnce();
	});

	it("passes arguments to all callbacks", () => {
		const fn1 = vi.fn();
		const fn2 = vi.fn();

		const chained = chain(fn1, fn2);
		chained("a", 42);

		expect(fn1).toHaveBeenCalledWith("a", 42);
		expect(fn2).toHaveBeenCalledWith("a", 42);
	});

	it("skips non-function values", () => {
		const fn1 = vi.fn();

		const chained = chain(null, fn1, undefined, "not a function", fn1);
		chained();

		expect(fn1).toHaveBeenCalledTimes(2);
	});

	it("returns a function that can be called with no callbacks", () => {
		const chained = chain();
		expect(() => chained()).not.toThrow();
	});
});
