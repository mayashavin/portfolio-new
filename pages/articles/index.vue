<template>
  <section class="flex mx-auto flex-col items-start h-0 md:w-9/12">
    <div
      class="mt-3 md:mt-5 mb-3 flex items-center text-sm self-center md:self-start md:ml-2"
    >
      <h4>Sort by</h4>
      <div class="ml-3">
        <chip
          v-for="tag in tags"
          :key="tag.title"
          :text="tag.title"
          :class="tagClass(tag.active)"
          class="text-sm px-3 border-mayas-green-dark mx-1 mb-2"
          clickable
        />
      </div>
    </div>
    <div
      class="overflow-auto md:pr-8 flex justify-center md:justify-start flex-wrap"
    >
      <nuxt-link
        v-for="post in posts"
        :key="post.slug"
        :to="`/articles/${post.slug}`"
        class="mx-2 my-3"
      >
        <card :post="post" />
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        {
          title: 'Upcoming',
          active: true
        },
        {
          title: 'Past',
          active: false
        },
        {
          title: 'React',
          active: false
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('posts', { deep: true })
      .only([
        'title',
        'img',
        'description',
        'createdAt',
        'slug',
        'publishedTime',
        'readingTime'
      ])
      .where({
        extension: '.md'
      })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { posts }
  },
  methods: {
    tagClass(active) {
      return {
        'bg-mayas-green-dark': active
      }
    }
  }
}
</script>
