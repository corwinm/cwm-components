const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.(js|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  presets: [
    {
      name: "@storybook/preset-typescript",
      options: {
        include: [
          path.resolve(__dirname, "../packages"),
          path.resolve(__dirname, "../stories"),
        ],
      },
    },
  ],
};
