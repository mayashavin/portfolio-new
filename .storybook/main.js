module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss")("tailwind.config.js"),
              require("autoprefixer"),
            ],
          },
        },
      ],
    });

    return config;
  },
};
