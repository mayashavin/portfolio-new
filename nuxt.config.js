import pkg from './package'
import formatTime from './helpers/formatTime'

export default {
  mode: 'universal',
  target: 'static',
  components: true,
  router: {
    middleware: 'tab'
  },
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
  plugins: ['~/plugins/i18n', '~/plugins/cloudinary', '~/plugins/lazysizes'],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed'
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
    dir: 'content',
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      // remarkPlugins: ['remark-emoji'],
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
      }

      if (document.slug === 'events') {
        const events = document.events

        document.events = events.map(event => {
          const date = formatTime(new Date(event.organizer.date))

          return {
            organizer: { ...event.organizer, time: date },
            talk: event.talk
          }
        })
      }

      if (['.md', '.yaml'].includes(document.extension)) {
        const time = formatTime(
          document.publishedAt
            ? new Date(document.publishedAt)
            : document.createdAt || document.updatedAt
        )

        document.publishedTime = `${time.month} ${time.day}, ${time.year}`
      }
    }
  },
  feed: async () => {
    const { $content } = require('@nuxt/content')
    const { tags } = await $content('posts/tags').fetch()
    const posts = await $content('posts', { deep: true, text: true })
      .where({
        extension: '.md'
      })
      .fetch()

    return tags.map(tag => {
      const relevantPosts = posts.filter(post => post.tags.includes(tag))

      return {
        path: `/${tag}.xml`,
        create(feed) {
          feed.options = {
            title: `Category: ${tag} - Maya's Blog`,
            link: `https://mayashavin.com/${tag}.xml`,
            description: `All post related to ${tag} of my blog`
          }

          relevantPosts.forEach(post => {
            feed.addItem({
              title: post.title,
              id: post.slug,
              link: `https://mayashavin.com/articles/${post.slug}`,
              description: post.description,
              content: post.text
            })
          })
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2'
      }
    })
  }
}
