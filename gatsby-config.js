module.exports = {
  siteMetadata: {
    title: `My Gatsby Blog`,
    description: `This is my coding blog.`,
    siteUrl: "https://www.gugul.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-webmentions",
      options: {
        DOMAIN: "pensive-boyd-f6323b.netlify.app", // without https and any slashes
        TOKEN: process.env.WEBMENTIONS_TOKEN, // token from webmention.io
        perPage: 100, // optional
      },
    }
  ],
};
