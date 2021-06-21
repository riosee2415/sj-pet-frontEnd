"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[ext]",
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
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin([
      {
        context: "./public",
        from: "*.*",
      },
    ]),
    new Dotenv(),
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    proxy: {
      "**": "http://localhost:7033",
    },
  },
  devtool: "eval-source-map",
};
