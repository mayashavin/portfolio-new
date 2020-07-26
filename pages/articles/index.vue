<template>
  <section class="flex mx-auto flex-col items-start h-0 md:w-9/12">
    <div
      class="m-2 ml-4 md:mx-0 md:mt-5 flex items-start text-sm self-center md:self-start md:ml-2 min-h-fit"
    >
      <h4 class="w-2/6 sm:w-16 pt-1">{{ $t('sortBy') }}</h4>
      <div class="ml-3">
        <chip
          v-for="tag in tags"
          :key="tag"
          :text="tag"
          :class="tagClass(tag)"
          :active="isSelectedTag(tag)"
          v-on:chip-clicked="sortByTag"
          class="text-sm px-3 border-mayas-green-dark mx-1 mb-2"
          clickable
        />
      </div>
    </div>
    <transition-group
      name="page"
      tag="div"
      class="overflow-auto md:pr-8 flex justify-center md:justify-start flex-wrap"
    >
      <nuxt-link
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="`/articles/${post.slug}`"
        class="mx-2 my-3"
      >
        <card :post="post" />
      </nuxt-link>
    </transition-group>
  </section>
</template>
<script>
import sortByTag from '@/mixins/sortByTag'
export default {
  mixins: [sortByTag],
  head() {
    return {
      title: this.$t('articles.title'),
      description: this.$t('articles.description')
    }
  },
  data() {
    return {
      byTag: ''
    }
  },
  computed: {
    filteredPosts() {
      return this.byTag
        ? this.posts.filter(post => post.tags.includes(this.byTag))
        : this.posts
    }
  },
  async asyncData({ $content }) {
    const [posts, { tags }] = await Promise.all([
      $content('posts', { deep: true })
        .only([
          'title',
          'img',
          'description',
          'createdAt',
          'slug',
          'publishedTime',
          'readingTime',
          'tags'
        ])
        .where({
          extension: '.md'
        })
        .sortBy('createdAt', 'desc')
        .fetch(),
      $content('posts/tags').fetch()
    ])

    return { posts, tags }
  }
}
</script>
