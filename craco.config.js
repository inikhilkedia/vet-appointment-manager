module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	babel: {
		plugins: ["@babel/plugin-proposal-optional-chaining"],
	},
	webpack: {
		configure: (webpackConfig) => {
			// Add rule to handle .mjs files
			webpackConfig.module.rules.push({
				test: /\.mjs$/,
				include: /node_modules/,
				type: "javascript/auto",
			});
			return webpackConfig;
		},
	},
};
