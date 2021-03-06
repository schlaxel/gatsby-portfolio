/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Alex Kiefer - Softwareentwickler',
    author: 'Alex Kiefer',
    siteUrl: `https://www.kiefer.media`,
    description: 'Ich bin Web - und App-Entwickler aus Freiburg im Breisgau. Hier findest du einen kleinen Überblick über mich und meine Projekte.' 
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/_posts/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sites`,
        path: `${__dirname}/_sites/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/static/images/uploads`,
        },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Arvo:400,700', 'Source Sans Pro:400']
        }
      }
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          bgColor1: '#c0bfbf',
          bgColor2: '#dfdede',
          contrast: '#4a4949',
          accent: '#79998b',
          font: '#222222',
          darker: '#ffffff'
        },
        dark: { 
          bgColor1: '#212121',
          bgColor2: '#333333',
          contrast: '#adadad',
          accent: '#a9beb5',
          font: '#eeeeee',
          darker: '#141414',
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Kiefer - Softwareentwickler`,
        short_name: `Alex Kiefer`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `browser`,
        icon: `src/img/icon.png`
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://api.covid19api.com/summary",
          rootKey: "corona"
      }
    }
  ]
}
