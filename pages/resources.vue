<template>
  <section class="mx-auto overflow-auto w-screen md:w-auto md:w-9/12">
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
  async asyncData({ $content }) {
    const podcasts = await $content('podcasts', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    const videos = await $content('videos', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    console.log(videos) //eslint-disable-line

    return { podcasts, videos }
  }
}
</script>
