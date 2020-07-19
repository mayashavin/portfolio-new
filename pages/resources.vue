<template>
  <section class="mx-auto overflow-auto w-screen md:w-auto md:w-9/12">
    <div
      class="mb-5 md:mt-5 flex items-center self-center md:self-start text-sm mx-3"
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
    <div class="mx-3">
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
    <div class="mx-3">
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
    <div class="mx-3">
      <h2 class="text-2xl text-center md:text-left my-3">Courses</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        Coming soon
      </div>
    </div>
    <div class="mx-3">
      <h2 class="text-2xl text-center md:text-left my-3">Books</h2>
      <div class="flex md:justify-start justify-center flex-wrap">
        Coming soon
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        {
          title: 'Interviews',
          active: true
        },
        {
          title: 'Podcasts',
          active: false
        },
        {
          title: 'Talks',
          active: false
        }
      ]
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
