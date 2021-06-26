/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `iamges`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:400,500,700`],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: "BitsToBytes | GEC Bhavanagr",
    description: "Official Programing club of GEC Bhavnagar",
    url: "https://bitstobytes.in/",
    icon: "./src/images/favicon.ico",
  },
}
