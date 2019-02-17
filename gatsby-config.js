module.exports = {
siteMetadata: {
    title: 'My Site',
},
plugins: [
  {
  resolve: `gatsby-plugin-typography`,
  options: {
    pathToConfigModule: `src/utils/typography`,
    }
  },
  {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `src/content`,
    name: "markdown-pages",
    }
  },
  {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`
          }
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false,
        }
      }
    ],
    }
  },
  {
  resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-110263445-2",
        },
  }
],
}
