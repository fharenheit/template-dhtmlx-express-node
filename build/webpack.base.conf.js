const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var pack = require("../package.json");

const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist"),
	assets: "assets/",
};

module.exports = {
	externals: {
		paths: PATHS,
	},
	entry: {
		app: ["@babel/polyfill", PATHS.src],
	},
	output: {
		filename: `[name].js`,
		path: PATHS.dist,
		publicPath: "",
		library: pack.name.replace(/[^a-z0-9]/gi, ""),
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
				},
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "./assets/fonts/[name].[ext]",
				},
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { sourceMap: true, url: false },
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							config: { path: `./postcss.config.js` },
						},
					},
					{
						loader: "sass-loader",
						options: { sourceMap: true },
					},
				],
			},
		],
	},
	devServer: {
		stats: "errors-only",
		proxy: {
			"/backend": "http://localhost:3000",
		},
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
		},
	},
	resolve: {
		mainFields: ["main", "module"],
		alias: {},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `[name].css`,
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/${PATHS.assets}`, to: `${PATHS.assets}` },
			{ from: `${PATHS.src}/lib/suite`, to: `lib/suite` },
			{ from: `${PATHS.src}/index.${process.env.DEMO_INDEX_SUFIX || ""}html`, to: "index.html" },
		]),
	],
};
