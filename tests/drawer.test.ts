import { expect, test } from "@playwright/test";

test.describe("Basic Drawer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("opens when trigger is clicked", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Basic Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();
	});

	test("displays drawer content", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Basic Drawer" });
		await trigger.click();

		await expect(page.getByText("Drawer for Svelte.")).toBeVisible();
	});

	test("closes with Escape key", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Basic Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		await page.keyboard.press("Escape");
		await expect(drawer).not.toBeVisible();
	});

	test("closes when overlay is clicked", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Basic Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		const overlay = page.locator("[data-vaul-overlay]");
		await overlay.click({ position: { x: 10, y: 10 }, force: true });
		await expect(drawer).not.toBeVisible();
	});
});

test.describe("Direction Drawers", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	for (const direction of ["top", "left", "bottom", "right"] as const) {
		test(`opens ${direction} drawer`, async ({ page }) => {
			const trigger = page.getByRole("button", { name: `Open ${direction} drawer` });
			await trigger.click();

			const drawer = page.locator("[data-vaul-drawer]");
			await expect(drawer).toBeVisible();
			await expect(drawer).toHaveAttribute("data-vaul-drawer-direction", direction);
		});
	}
});

test.describe("Nested Drawer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("opens nested drawer", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Nested Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]").first();
		await expect(drawer).toBeVisible();
		await expect(page.getByText("Drawer for Svelte.")).toBeVisible();

		const nestedTrigger = page.getByRole("button", { name: "Open Second Drawer" });
		await nestedTrigger.click();

		const nestedDrawer = page.locator("[data-vaul-drawer]").nth(1);
		await expect(nestedDrawer).toBeVisible();
		await expect(page.getByText("This drawer is nested.")).toBeVisible();
	});
});

test.describe("Scrollable Drawer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("opens scrollable drawer with input elements", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open Scrollable Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		const inputs = drawer.locator("input");
		await expect(inputs.first()).toBeVisible();
	});
});

test.describe("Snap Point Drawer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("opens snap point drawer", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open SnapPoints Drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();
		await expect(page.getByRole("heading", { name: "The Hidden Details" })).toBeVisible();
	});
});

test.describe("Non-draggable Drawer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("opens non-draggable drawer with no-drag area", async ({ page }) => {
		const trigger = page.getByRole("button", { name: "Open non-draggable drawer" });
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		const noDragArea = page.locator("[data-vaul-no-drag]");
		await expect(noDragArea).toBeVisible();
		await expect(noDragArea).toContainText("Try dragging me");
	});
});

test.describe("Focus Trap", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/autopilot-vaul-svelte/test/focus-trap");
	});

	test("traps focus within drawer by default", async ({ page }) => {
		const trigger = page.locator("#trigger");
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		// Focus the first button inside the drawer
		await page.locator("#inside-first").focus();
		expect(await page.evaluate(() => document.activeElement?.id)).toBe("inside-first");

		// Tab to second button
		await page.keyboard.press("Tab");
		expect(await page.evaluate(() => document.activeElement?.id)).toBe("inside-second");

		// Tab again — focus should wrap back to the first inside button (focus trapped in drawer)
		await page.keyboard.press("Tab");
		const focused = await page.evaluate(() => document.activeElement?.id);
		expect(focused).toBe("inside-first");
	});
});

test.describe("Focus Trap Disabled", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/autopilot-vaul-svelte/test/focus-trap-disabled");
	});

	test("allows focus to leave drawer when trapFocus is false", async ({ page }) => {
		const trigger = page.locator("#trigger");
		await trigger.click();

		const drawer = page.locator("[data-vaul-drawer]");
		await expect(drawer).toBeVisible();

		// Focus the last button inside the drawer
		await page.locator("#inside-second").focus();
		expect(await page.evaluate(() => document.activeElement?.id)).toBe("inside-second");

		// Tab — focus should be able to leave the drawer since trapFocus is false
		await page.keyboard.press("Tab");
		const focusState = await page.evaluate(() => {
			const drawer = document.querySelector("[data-vaul-drawer]");
			const activeElement = document.activeElement;

			return {
				activeElementId: activeElement?.id ?? "",
				isInsideDrawer: drawer?.contains(activeElement) ?? false,
			};
		});
		expect(focusState.activeElementId).not.toBe("inside-second");
		expect(focusState.isInsideDrawer).toBe(false);
	});
});

test.describe("Examples Page", () => {
	test("loads and displays example drawers", async ({ page }) => {
		await page.goto("/autopilot-vaul-svelte/examples");
		await page.waitForLoadState("networkidle");

		await expect(page.getByText("Usage Examples")).toBeVisible();
		await expect(page.getByRole("button", { name: "Open Nested Drawer" })).toBeVisible();
		await expect(page.getByRole("button", { name: "Open Scrollable Drawer" })).toBeVisible();
		await expect(page.getByRole("button", { name: "Open SnapPoints Drawer" })).toBeVisible();
	});
});
