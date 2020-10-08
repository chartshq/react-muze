const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    configurations: "./src/configurations/index.ts",
    components: "./src/components/index.ts",
    constants: "./src/constants/index.ts",
  },
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/index.js",
    libraryTarget: "umd",
    library: "@chartshq/react-muze/[name]",
    umdNamedDefine: true,
  },
  externals: {
    "@chartshq/muze": {
      root: "muze",
      amd: "@chartshq/muze",
      commonjs2: "@chartshq/muze",
      commonjs: "@chartshq/muze",
    },
    react: {
      root: "React",
      amd: "react",
      commonjs2: "react",
      commonjs: "react",
    },
    "react-dom": {
      root: "reactDOM",
      amd: "reactDOM",
      commonjs2: "reactDOM",
      commonjs: "reactDOM",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(s*)css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(".", "package.json"),
        to: ".",
      },
    ]),
  ],
  devServer: {
    inline: true,
    contentBase: "./",
  },
};
