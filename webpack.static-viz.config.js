const webpack = require("webpack");

const SRC_PATH = __dirname + "/frontend/src/metabase";
const BUILD_PATH = __dirname + "/resources/frontend_client";

const BABEL_CONFIG = {
  cacheDirectory: process.env.BABEL_DISABLE_CACHE ? null : ".babel_cache",
};

module.exports = {
  mode: "production",
  context: SRC_PATH,

  performance: {
    hints: false,
  },

  entry: {
    "lib-static-viz": {
      import: "./static-viz/index.js",
      library: {
        name: "StaticViz",
        type: "var",
      },
    },
  },

  output: {
    path: BUILD_PATH + "/app/dist",
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es6",
              jsxFactory: "jsx",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      metabase: SRC_PATH,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      jsx: ["@emotion/core", "jsx"],
    }),
  ],
};
