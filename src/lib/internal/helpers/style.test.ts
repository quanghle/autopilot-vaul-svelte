import { describe, it, expect } from "vitest";
import { styleToString } from "./style.js";

describe("styleToString", () => {
	it("converts style object to CSS string", () => {
		const result = styleToString({ color: "red", "font-size": "16px" });
		expect(result).toBe("color:red;font-size:16px;");
	});

	it("skips undefined values", () => {
		const result = styleToString({ color: "red", "font-size": undefined });
		expect(result).toBe("color:red;");
	});

	it("returns empty string for empty object", () => {
		const result = styleToString({});
		expect(result).toBe("");
	});

	it("handles numeric values", () => {
		const result = styleToString({ "z-index": 10 });
		expect(result).toBe("z-index:10;");
	});

	it("returns empty string when all values are undefined", () => {
		const result = styleToString({ a: undefined, b: undefined });
		expect(result).toBe("");
	});
});
