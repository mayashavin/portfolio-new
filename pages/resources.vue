<template>
  <section class="mx-auto w-screen md:w-auto md:w-9/12 min-h-0 flex flex-col">
    <div
      class="m-2 ml-4 md:mx-0 md:mt-5 flex items-start text-sm self-center md:self-start md:ml-2 min-h-fit"
    >
      <h4 class="w-1/6 self-start sm:w-16 pt-1">{{ $t('sortBy') }}</h4>
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
      class="overflow-auto md:pr-8 w-screen md:w-auto mt-3 md:mt-5"
    >
      <div key="books" v-show="!byTag || byTag === 'Books'" class="mx-3">
        <h2 class="text-2xl text-center md:text-left my-3">
          {{ $t('resources.sections.books') }}
        </h2>
        <div class="flex md:justify-start justify-center flex-wrap">
          <div
            v-for="book in books"
            :key="book.title"
            class="bg-mayas-dark-20 border-violet-400 dark:bg-mayas-dark-80 dark:border-mayas-dark-40 border mb-3 mx-2 p-4 w-320"
          >
            <a
              :href="book.url"
              :aria-label="book.title"
              rel=" noopener noreferrer"
              target="_blank"
            >
              <nuxt-img
                :src="book.thumbnail"
                :alt="book.title"
                :modifiers="{ dpr: '2.0' }"
                loading="lazy"
                fit="scale"
                class="mx-auto"
              />
              <div class="my-2">
                <span class="text-xl text-left flex">
                  {{ book.title }}
                </span>
                <p
                  class="dark:text-gray-300 text-sm mb-2 visible hover:shadow-xl"
                >
                  {{ book.description }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div key="podcast" v-show="!byTag || byTag === 'Podcasts'" class="mx-3">
        <h2 class="text-2xl text-center md:text-left mb-3">
          {{ $t('resources.sections.podcasts') }}
        </h2>
        <div class="flex md:justify-start justify-center flex-wrap">
          <podcast
            v-for="(podcast, index) in podcasts"
            :key="index"
            v-bind="podcast"
            class="bg-mayas-dark-20 border-violet-400 dark:bg-mayas-dark-80 dark:border-mayas-sky-dark border mb-3 mx-2"
          />
        </div>
      </div>
      <div key="videos" v-show="!byTag || byTag === 'Videos'" class="mx-3">
        <h2 class="text-2xl text-center md:text-left mb-3">
          {{ $t('resources.sections.videos') }}
        </h2>
        <div class="flex md:justify-start justify-center flex-wrap">
          <video-card
            v-for="release in videos"
            :key="release.video.id"
            v-bind="release"
            class="bg-mayas-dark-20 border-violet-400 dark:bg-mayas-dark-80 dark:border-mayas-dark-40 border mb-3 mx-2"
          />
        </div>
      </div>
      <div key="courses" v-show="!byTag || byTag === 'Courses'" class="mx-3">
        <h2 class="text-2xl text-center md:text-left my-3">
          {{ $t('resources.sections.courses') }}
        </h2>
        <div class="flex md:justify-start justify-center flex-wrap">
          {{ $t('resources.comingsoon') }}
        </div>
      </div>
    </transition-group>
  </section>
</template>
<script>
import sortByTag from '@/mixins/sortByTag'
export default {
  mixins: [sortByTag],
  head() {
    return {
      title: this.$t('resources.title'),
      description: this.$t('resources.description'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('resources.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('resources.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('resources.description')
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('resources.title')
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$t('resources.description')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('resources.description')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto/v1595759984/mayashavin/resources_cover_2.jpg'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto/v1595759984/mayashavin/resources_cover_2.jpg'
        }
      ]
    }
  },
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

    const books = await $content('books', { deep: true }).fetch()

    return { podcasts, videos, books }
  }
}
</script>
