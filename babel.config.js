module.exports = function(api) {
	api.cache(true);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					useBuiltIns: "entry",
					corejs: { version: 3, proposals: true },
				},
			],
			"@babel/preset-react",
		],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@actions": "./src/actions",
						"@components": "./src/components",
						"@config": "./config",
						"@containers": "./src/containers",
						"@images": "./src/images",
						"@pages": "./src/pages",
						"@reducers": "./src/reducers",
						"@root": "./src/root",
						"@routes": "./src/routes",
						"@styles": "./src/styles",
						"@types": "./src/types",
						"@utils": "./src/utils",
					},
				},
			],
			"@babel/plugin-transform-runtime",
			["@babel/plugin-proposal-decorators", { legacy: true }],
			"@babel/plugin-syntax-dynamic-import",
			["@babel/plugin-proposal-class-properties", { loose: true }],
			"lodash",
		],
	};
};
