require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  env: {
    spotifyId: process.env.SPOTIFY_CLIENT_ID,
    clientUrl: process.env.CLIENT_URL
  },
  /*
  ** Build configuration
  */
  build: {
    watch: ['api'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
        config.node = {
            fs: 'empty'
        }
    }
  },
  serverMiddleware: [
    '~/api'
  ]
}
