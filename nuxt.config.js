import { $content } from '@nuxt/content'
import reading from 'reading-time'
import pkg from './package'
import formatTime from './helpers/formatTime'

export default {
  target: 'static',
  components: true,
  router: {
    middleware: 'tab'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
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
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/i18n'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
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
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],
  purgeCSS: {
    whitelist: ['dark-mode', 'bg-mayas-green-dark']
  },
  pwa: {
    meta: {
      name: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
      description: 'Everything about me as Web developer, blogger and speaker',
      ogImage:
        'https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto/v1595759984/mayashavin/portfolio_cover_2.jpg',
      ogHost: 'https://mayashavin.com',
      twitterCard: 'summary_large_image',
      twitterSite: '@MayaShavin',
      twitterCreator: '@MayaShavin'
    },
    manifest: {
      name: 'Maya Shavin - Web developer | Speaker | Blogger | Bookworm',
      short_name: 'Maya Shavin - Web developer',
      description: 'Everything about me as Web developer, blogger and speaker',
      theme_color: '#a069e8'
    }
  },
  content: {
    dir: 'content',
    liveEdit: false,
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      remarkPlugins: [
        // ['remark-emoji', { emoticon: true }],
        // ['remark-footnotes', { inlineNotes: true }]
      ],
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/mayashavin/image/upload/'
    }
  },
  hooks: {
    'content:file:beforeInsert': document => {
      if (document.extension === '.md') {
        const { text } = reading(document.text)

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
        if (document.publishedAt) {
          document.publishedAt = new Date(document.publishedAt)
        }

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
  },
  sitemap: {
    hostname: 'https://mayashavin.com',
    exclude: ['/secret', '/admin/**'],
    routes: async () => {
      const posts = await $content('posts', { deep: true, text: true })
        .where({
          extension: '.md'
        })
        .fetch()

      return posts.map(post => ({
        url: `/articles/${post.slug}`,
        lastmod: post.updatedAt || post.createdAt
      }))
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false,
    autoTracking: {
      screenview: true,
      pageviewTemplate(route) {
        return {
          page: route.path,
          title: document.title,
          location: window.location.href
        }
      },
      skipSamePath: true
    }
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      dev: false
    }
  }
}
