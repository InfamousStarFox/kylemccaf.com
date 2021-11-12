module.exports = {
  siteMetadata: {
    siteUrl: "https://www.kylemccaf.com",
    title: "Kyle McCaffery, Software Developer and Security Consultant.",
    description: "Kyle McCaffery, Software Developer and Security Consultant.",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
