
const config = require('./src/utils/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const targetAddress = `${process.env.GATSBY_TARGET_ADDRESS}` || `http://navd.local`;

module.exports = {
  siteMetadata: {
    title: 'The AI maritime Platform | NavD',
    description:
      'NavD is a cutting edge platform for AI solutions and large scale spatial analytics in the marine domain.',
    author: 'christos.charmatzis',
    siteUrl: targetAddress,
  },
  proxy: {
    prefix: "/api",
    url: `${process.env.GATSBY_contactapi}`,
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
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: targetAddress,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
