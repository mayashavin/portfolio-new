<template>
  <section class="flex mx-auto flex-col items-center w-full overflow-auto">
    <post :post="page" class="max-w-screen-xl" />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.title,
      description: this.page.description,
      meta: [
        // Twitter Card
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
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://res.cloudinary.com/mayashavin/image/upload/c_scale,q_auto,h_300/${this.page.img}.jpg`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.page.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/mayashavin/image/upload/c_scale,q_auto,h_300/${this.page.img}.jpg`
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
