const presets = [
  [
    "@babel/preset-react",
    { targets: { browsers: ["last 2 versions", ">= 5% in KR"] } },
  ],
  [
    "@babel/preset-env",
    {
      modules: false,
      useBuiltIns: "usage",
      targets: "> 0.25%, not dead",
    },
  ],
];
const plugins = [
  "@babel/syntax-dynamic-import",
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
  ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
  "@babel/plugin-proposal-class-properties",
  [
    "@babel/plugin-transform-runtime",
    {
      regenerator: true,
    },
  ],
];

const env = {
  development: {
    plugins: ["babel-plugin-styled-components"],
  },
};

module.exports = { presets, plugins, env };
