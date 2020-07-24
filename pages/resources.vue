<template>
  <section class="mx-auto overflow-auto w-screen md:w-auto md:w-9/12">
    <div
      class="m-2 ml-4 md:mx-0 md:mt-5 flex items-start text-sm self-center md:self-start md:ml-2"
    >
      <h4 class="w-1/6 self-start sm:w-16 pt-1">Sort by</h4>
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
    <div v-show="!byTag || byTag === 'Podcasts'" class="mx-3">
      <h2 class="text-2xl text-center md:text-left mb-3">Podcasts</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        <podcast
          v-for="(podcast, index) in podcasts"
          :key="index"
          v-bind="podcast"
          class="bg-mayas-dark-20 border-mayas-light-default dark:bg-mayas-dark-80 dark:border-mayas-sky-dark border mb-3 mx-2"
        />
      </div>
    </div>
    <div v-show="!byTag || byTag === 'Videos'" class="mx-3">
      <h2 class="text-2xl text-center md:text-left mb-3">Videos</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        <video-card
          v-for="release in videos"
          :key="release.video.id"
          v-bind="release"
          class="bg-mayas-dark-20 border-mayas-light-default dark:bg-mayas-dark-80 dark:border-mayas-dark-40 border mb-3 mx-2"
        />
      </div>
    </div>
    <div v-show="!byTag || byTag === 'Courses'" class="mx-3">
      <h2 class="text-2xl text-center md:text-left my-3">Courses</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        Coming soon
      </div>
    </div>
    <div v-show="!byTag || byTag === 'Books'" class="mx-3">
      <h2 class="text-2xl text-center md:text-left my-3">Books</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        Coming soon
      </div>
    </div>
  </section>
</template>
<script>
import sortByTag from '@/mixins/sortByTag'
export default {
  mixins: [sortByTag],
  data() {
    return {
      tags: ['Podcasts', 'Videos', 'Courses', 'Books'],
      byTag: ''
    }
  },
  async asyncData({ $content }) {
    const podcasts = await $content('podcasts', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    const videos = await $content('videos', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { podcasts, videos }
  }
}
</script>
