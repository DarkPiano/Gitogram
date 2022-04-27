// const custom = require("../node_modules/@vue/cli-service/webpack.config")(null, "development");
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      // vue$: 'vue/dist/vue.esm.js',
    }
    return config
  }

  // "webpackFinal": config => {
  //   return {
  //     ...config,
  //     module: {...config.module, rules: custom.module.rules},
  //     resolve: custom.resolve
  //   };
  // }
};
