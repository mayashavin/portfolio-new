<template>
  <section class="flex mx-auto flex-col items-start h-0">
    <post :post="page" class="max-w-5xl" />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.title,
      description: this.page.description
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
