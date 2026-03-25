import js from "@eslint/js";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"no-console": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		rules: {
			"svelte/no-target-blank": "off",
			"svelte/button-has-type": "off",
			"svelte/require-each-key": "off",
			"svelte/no-at-html-tags": "off",
			"svelte/no-unused-svelte-ignore": "off",
			"svelte/css-unused-selector": "off",
			"svelte/no-navigation-without-resolve": "off",
		},
	},
	{
		ignores: [
			".DS_Store",
			"node_modules/",
			"build/",
			"dist/",
			".svelte-kit/",
			".vercel/",
			"package/",
			".env",
			".env.*",
			"!.env.example",
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
		],
	},
];
