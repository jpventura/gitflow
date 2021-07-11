module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@jpventura',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/app/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: `${__dirname}/src/app/images/gatsby-icon.png`,
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/app/pages`,
      },
    },
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-transformer-sharp',
  ],
};
