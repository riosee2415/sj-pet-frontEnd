const presets = [
  [
    "@babel/preset-react",
    { targets: { browsers: ["last 2 versions", ">= 5% in KR"] } },
  ],
  "@babel/preset-env",
];
const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
  ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
  "@babel/plugin-proposal-class-properties",
];

const env = {
  development: {
    plugins: ["babel-plugin-styled-components"],
  },
};

module.exports = { presets, plugins, env };
