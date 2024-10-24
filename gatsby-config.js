module.exports = {
    plugins: [
      `@marscollective/gatsby-theme-link-free`,
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("postcss-import"),
            require("postcss-nested"),
            require("postcss-custom-properties"),
            require("autoprefixer"),
          ],
        },
      },
    ],
  };
  