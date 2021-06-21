"use strict";

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  optimization: {
    concatenateModules: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 10,
      cacheGroups: {
        bundles: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          name: "bundles",
        },
        quillBundle: {
          test: /[\\/]node_modules[\\/](quill)/,
          priority: 2,
          name: "quillBundle",
        },
        swiperBundle: {
          test: /[\\/]node_modules[\\/](swiper)/,
          priority: 3,
          name: "swiperBundle",
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)/,
          priority: 4,
          name: "reactBundle",
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
});
