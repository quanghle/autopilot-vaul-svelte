import { describe, it, expect } from "vitest";
import { omit, removeUndefined } from "./object.js";

describe("omit", () => {
	it("removes specified keys from object", () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = omit(obj, "b");
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it("removes multiple keys", () => {
		const obj = { a: 1, b: 2, c: 3, d: 4 };
		const result = omit(obj, "a", "c");
		expect(result).toEqual({ b: 2, d: 4 });
	});

	it("returns a copy when no keys are specified", () => {
		const obj = { a: 1, b: 2 };
		const result = omit(obj);
		expect(result).toEqual({ a: 1, b: 2 });
		expect(result).not.toBe(obj);
	});

	it("handles empty object", () => {
		const result = omit({});
		expect(result).toEqual({});
	});
});

describe("removeUndefined", () => {
	it("removes keys with undefined values", () => {
		const obj = { a: 1, b: undefined, c: "hello" };
		const result = removeUndefined(obj);
		expect(result).toEqual({ a: 1, c: "hello" });
	});

	it("keeps null values", () => {
		const obj = { a: null, b: undefined };
		const result = removeUndefined(obj);
		expect(result).toEqual({ a: null });
	});

	it("keeps falsy non-undefined values", () => {
		const obj = { a: 0, b: "", c: false, d: undefined };
		const result = removeUndefined(obj);
		expect(result).toEqual({ a: 0, b: "", c: false });
	});

	it("returns empty object when all values are undefined", () => {
		const obj = { a: undefined, b: undefined };
		const result = removeUndefined(obj);
		expect(result).toEqual({});
	});

	it("returns copy when no values are undefined", () => {
		const obj = { a: 1, b: 2 };
		const result = removeUndefined(obj);
		expect(result).toEqual({ a: 1, b: 2 });
	});
});
