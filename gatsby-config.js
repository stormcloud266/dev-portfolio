require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `My Gatsby Starter`,
    description: `Gatsby default plus SCSS, web fonts, Google Analytics`,
    author: `@gatsbyjs`,
    siteUrl: "https://www.test.com", // This is required for gatsby-plugin-robots-txt and gatsby-plugin-sitemap plugins
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 950,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Open Sans:400", "Yantramanav:900,400"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.example.com",
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tawnee dev`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F199B9`,
        theme_color: `#F199B9`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/styles/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/styles/theme.js`).darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@global": path.resolve(__dirname, "src/components/global"),
          "@images": path.resolve(__dirname, "src/assets/images"),
          "@styles": path.resolve(__dirname, "src/styles/"),
          "@animations": path.resolve(__dirname, "src/components/animations"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@data": path.resolve(__dirname, "src/data.js"),
        },
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
