"use strict";
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    proxy: {
      "**": "http://localhost:7029",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  cache: true,
});
