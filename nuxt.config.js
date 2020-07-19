import pkg from './package'
import formatTime from './helpers/formatTime'

export default {
  mode: 'universal',
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: "Maya Shavin's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'https://res.cloudinary.com/mayashavin/image/upload/w_16,c_fit/v1539936657/mayashavin/rainbow.png'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  css: ['~/assets/css/tailwind.css', '~/assets/css/button.css'],
  plugins: ['~/plugins/i18n', '~/plugins/cloudinary'],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: ['@nuxtjs/color-mode'],
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  pwa: {
    meta: {
      name: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
      description:
        'My personal site where I share about my blog posts, videos, OSS projects and the conferences I spoke/will speak at.',
      theme_color: 'transparent',
      ogSiteName: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
      ogTitle: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
      ogDescription:
        'My personal site where I share about my blog posts, videos, OSS projects and the conferences I spoke/will speak at.',
      ogUrl: 'https://mayashavin.com',
      ogImage:
        'https://res.cloudinary.com/mayashavin/image/upload/w_400,h_400,c_fill,g_auto,r_10/v1563826725/mayashavin/Maya_new.png',
      ogHost: 'https://mayashavin.com',
      twitterCard: 'summary_large_images',
      icons: [
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_48,h_48,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '48x48',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_72,h_72,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '72x72',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_96,h_96,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '96x96',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_144,h_144,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '144x144',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_168,h_168,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '168x168',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_192,h_192,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '192x192',
          type: 'image/png'
        },
        {
          src:
            'https://res.cloudinary.com/mayashavin/image/upload/w_512,h_512,c_fit,ar_1:1,q_auto,f_auto/v1539936657/mayashavin/rainbow.png',
          size: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  meta: {
    name: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
    ogTitle: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
    ogSiteName:
      'My personal site where I share about my blog posts, videos, OSS projects and the conferences I spoke/will speak at.',
    ogDescription:
      'My personal site where I share about my blog posts, videos, OSS projects and the conferences I spoke/will speak at.',
    ogUrl: 'https://mayashavin.com',
    ogImage:
      'https://res.cloudinary.com/mayashavin/image/upload/w_400,h_400,c_fill,g_auto,r_10/v1563826725/mayashavin/Maya_new.png',
    twitterCard: 'summary_large_images',
    twitterCreator: '@mayashavin',
    twitterSite: '@mayashavin',
    theme_color: '#424242'
  },
  icon: {
    iconSrc:
      'https://res.cloudinary.com/mayashavin/image/upload/v1539936657/mayashavin/rainbow.png'
  },
  content: {
    dir: 'assets/content',
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  },
  hooks: {
    'content:file:beforeInsert': document => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text

        const time = formatTime(document.createdAt || document.updatedAt)

        document.publishedTime = `${time.month} ${time.day}, ${time.year}`
      }
    }
  }
}
