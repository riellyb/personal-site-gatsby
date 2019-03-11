module.exports = {
    siteMetadata: {
        title: 'Brendan Rielly'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Brendan Rielly',
                short_name: 'brielly',
                start_url: '/',
                background_color: '#222',
                theme_color: '#222',
                display: 'standalone',
                icon: 'src/images/icon.png',
                crossOrigin: `use-credentials`
            }
        },
        'gatsby-plugin-offline'
    ]
};
