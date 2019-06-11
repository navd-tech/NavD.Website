const config = require('./src/utils/config');

module.exports = {
  siteMetadata: {
    title: 'The AI maritime Platform | NavD',
    description: 'NavD is a cutting edge platform for AI solutions and large scale spatial analytics in the marine domain.',
    author: 'christos.charmatzis',
    siteUrl: 'https://navd.ai'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `navd-website`,
        short_name: `NavD`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#522bac`,
        display: `minimal-ui`,
        icon: `src/images/navd-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:300,400,400i,700,700i,900`]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`
  ],
}
