require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Jamgoose Web Development`,
    description: `We raise your business to a better online presence with a better online presence.`,
    author: `@rodrigorocha`,
    siteUrl: `https://jamgoose.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/content/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social`,
        path: `${__dirname}/content/social`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `metodology`,
        path: `${__dirname}/content/metodology`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
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
            family: `Poppins`,
            variants: ['400', '700']
          },
          {
            family: `Merienda`,
            variants: [`700`]
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamgoose Web Development`,
        short_name: `jamgoose`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e63786`,
        display: `minimal-ui`,
        icon: `static/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preact`,
    // `gatsby-plugin-offline`,
  ],
}
