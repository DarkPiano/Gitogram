module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  core: {
    builder: "webpack5",
  },
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
    return config;
  },
}