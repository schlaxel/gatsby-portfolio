/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/_posts/projects/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Arvo`,
            variants: [`400`, `700`]
          }
        ],
      },
    }
  ]
}
