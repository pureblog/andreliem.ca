module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Andre Liem - full stack web developer, VueJS, Laravel, PHP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: [
      '/',
      '/get-things-done-with-trello-repeats/',
      '/getting-started-nuxt-markdown/',
      '/my-top-10-favourites-of-being-a-freelancer-software-developer/',
      '/setting-up-php-xdebug-with-laravel-vagrant-and-phpstorm/',
      '/browser-testing-locally-ie-with-vagrant/'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~assets/css/highlightjs.min.css'
  ],
  plugins: [
    '~plugins/vue-highlightjs'
  ],
  modules: [
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', { ua: 'UA-104010-6' }],
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ]
}
