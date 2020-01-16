module.exports = {
  siteMetadata: {
    title: `Tanglez Hair Salon`,
    description: `Welcome to the Tanglez Hair Salon website. At Tanglez we pride ourselves in the quality of our work and offer satisfaction guaranteed. Our stylists are fully trained and up to date with all of the latest cut & color techniques, including but not limited to: all over color, color retouch, highlights, shampoo & blow dry, Moroccan hydrating mask treatments, facial waxing, and special occasion up-dos`,
    author: `Nick Andrews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Tanglez Hair Salon`,
        short_name: `tanglez`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
