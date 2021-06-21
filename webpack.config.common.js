"use strict";
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: [`.js`, `.jsx`],
  },
  entry: {
    main: ["./src/main.js"],
  },
  node: {
    fs: "empty",
    net: "empty",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename:
      process.env.NODE_ENV === "production"
        ? "[name].[contenthash].js"
        : "[name].js",
    chunkFilename:
      process.env.NODE_ENV === "production"
        ? "[name].[contenthash].chunk.js"
        : "[name].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name:
                process.env.NODE_ENV === "production"
                  ? "images/[name].[contenthash].[ext]"
                  : "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name:
                process.env.NODE_ENV === "production"
                  ? "fonts/[name].[contenthash].[ext]"
                  : "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          warnings: false,
          sourceMap: true,
          minimize: true,
          compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
          },
          output: {
            comments: false,
          },
        },
        exclude: [/\.min\.js$/gi],
      }),
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        context: "./public",
        from: "*.*",
      },
    ]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              keepClosingSlash: true,
              removeComments: true,
            }
          : false,
      inject: true,
      hash: true,
      xhtml: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundle-report.html",
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: "bundle-stats.json",
    }),
  ],
};
