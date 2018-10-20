const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelOptions = {
  presets: [["@babel/env", { targets: { esmodules: true } }]],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./.tmp/static"),
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
        ],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      title: "SpockGame Kata",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};