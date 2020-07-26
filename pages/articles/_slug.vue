<template>
  <section class="flex mx-auto flex-col items-center h-0 w-full">
    <post :post="page" class="max-w-5xl" />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.title,
      description: this.page.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://res.cloudinary.com/mayashavin/image/upload/${this.page.img}`
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.page.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/mayashavin/image/upload/${this.page.img}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://mayashavin.com${this.$route.path}`
        }
      ]
    }
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || ''
    const page = await $content(`posts/${slug}`)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })
    return { page }
  }
}
</script>
