const pkg = require('./package')

module.exports = {

  /*
   ** Headers of the page
   */
  head: {
    title: "苏儿随访",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type:'image/x-icon', href: './favicon.png'}
    ],
    // script:[{
    //   src:'http://res.wx.qq.com/open/js/jweixin-1.2.0.js',
    // }]
  },
  router: {
    // middleware: ['wx-login']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3B8070'},

  /*
   ** Global CSS
   */
  css: [
    'mint-ui/lib/style.css',
    'assets/styles/reset.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src:'plugins/plugins.js',ssr:false}
  ],
  transition: {
    name: 'router-fade',
    mode: 'out-in'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
