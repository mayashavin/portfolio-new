<template>
  <section class="flex mx-auto flex-col items-start h-0">
    <div
      class="my-5 flex items-center text-sm self-center md:self-start md:ml-2"
    >
      <h4>Sort by</h4>
      <div class="ml-3">
        <chip
          v-for="tag in tags"
          :key="tag.title"
          :text="tag.title"
          :class="tagClass(tag.active)"
          class="text-sm px-3 border-mayas-green-dark mx-1"
          clickable
        />
      </div>
    </div>
    <div
      class="overflow-auto md:pr-8 flex justify-center md:justify-start flex-wrap"
    >
      <card
        v-for="post in posts"
        :key="post.slug"
        :post="post"
        class="mx-2 mb-3"
      />
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
