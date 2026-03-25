import { describe, it, expect } from "vitest";
import { writable, get } from "svelte/store";
import { getOptionUpdater } from "./options.js";

describe("getOptionUpdater", () => {
	it("updates the store value for a given key", () => {
		const options = {
			color: writable("red" as unknown),
			size: writable(10 as unknown),
		};
		const update = getOptionUpdater(options);

		update("color", "blue");
		expect(get(options.color)).toBe("blue");
	});

	it("does nothing when value is undefined", () => {
		const options = {
			color: writable("red" as unknown),
		};
		const update = getOptionUpdater(options);

		update("color", undefined);
		expect(get(options.color)).toBe("red");
	});

	it("does nothing when key does not exist in options", () => {
		const options = {
			color: writable("red" as unknown),
		};
		const update = getOptionUpdater(options);

		// non-existent key should not throw
		expect(() => update("nonexistent", "value")).not.toThrow();
	});

	it("allows setting falsy non-undefined values", () => {
		const options = {
			count: writable(5 as unknown),
			flag: writable(true as unknown),
			name: writable("hello" as unknown),
		};
		const update = getOptionUpdater(options);

		update("count", 0);
		expect(get(options.count)).toBe(0);

		update("flag", false);
		expect(get(options.flag)).toBe(false);

		update("name", "");
		expect(get(options.name)).toBe("");
	});
});
