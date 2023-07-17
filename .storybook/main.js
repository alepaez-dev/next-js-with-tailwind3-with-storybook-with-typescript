module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // async webpackFinal(config) {
  //   config.resolve.alias["next/image"] = require.resolve("./NextImage.js");
  // },
  webpackFinal: async (config) => {
    config.resolve.alias["next/image"] = require.resolve("./NextImage.js");
    return config;
  },
};
