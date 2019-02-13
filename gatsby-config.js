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
`gatsby-transformer-remark`,
],
}
