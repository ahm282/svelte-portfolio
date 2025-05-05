import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
	{
		ignores: ['**/build/**', '**/node_modules/**', '.svelte-kit/**', '**/lib/components/ui/**']
	},

	js.configs.recommended,
	...tseslint.configs.recommended,

	// Global settings
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 2022
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		settings: {
			svelte: {
				ignoreWarnings: false
			}
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			]
		}
	},

	// Svelte files
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser
			}
		},
		rules: {
			...sveltePlugin.configs.recommended.rules,
			'svelte/no-unused-svelte-ignore': 'error'
		}
	}
];
