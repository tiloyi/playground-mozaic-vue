let pluginList = require("@mozaic-ds/css-dev-tools/postcssPluginConfig");
const scssSyntax = require("postcss-scss");

// Remove stylelint plugin to use it as a webpack plugin due to an incompatibility
// between postcss stylelint plugin and vue-loader.
// See https://github.com/vuejs/vue-loader/issues/627#issuecomment-277753794
pluginList = pluginList.filter(
  ({ postcssPlugin }) => postcssPlugin !== "stylelint"
);

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("postcss-scss")
      .test(/\.scss$/)
      .use("vue-style-loader")
      .loader("postcss-loader")
      .tap((options) => {
        options = {
          postcssOptions: {
            syntax: scssSyntax,
            plugins: pluginList,
          },
        };
        return options;
      });
  },
};
