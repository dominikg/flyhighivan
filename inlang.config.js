/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
	const { default: jsonPlugin } = await env.$import(
		'node_modules/@inlang/plugin-json/dist/index.js',
	);
	const { default: sdkPlugin } = await env.$import(
		'node_modules/@inlang/sdk-js-plugin/dist/index.js',
	);

	const { default: standardLintRules } = await env.$import(
		'node_modules/@inlang/plugin-standard-lint-rules/dist/index.js',
	);

	return {
		referenceLanguage: 'de',

		plugins: [
			jsonPlugin({
				pathPattern: './languages/{language}.json',
			}),
			sdkPlugin({
				languageNegotiation: {
					strategies: [{ type: 'url' }],
				},
			}),
			standardLintRules(),
		],
	};
}
