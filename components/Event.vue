<template>
  <article
    class="flex items-center md:items-start md:justify-start flex-col md:flex-row "
  >
    <div
      class="relative flex justify-center w-150 h-150 bg-violet-500 dark:bg-mayas-dark-40"
    >
      <div
        class="flex items-center flex-col bg-mayas-light-20 dark:bg-mayas px-5 h-fit z-10"
      >
        <span
          class="text-mayas-sky-light dark:text-mayas-sky-light text-4xl font-extrabold leading-none mt-2 mb-1"
          >{{ event.time.day }}</span
        >
        <span class="uppercase text-xl">{{ event.time.month }}</span>
        <span class="mb-1">{{ event.time.year }}</span>
      </div>
      <nuxt-img
        :src="talk.tech"
        :alt="`${talk.title}`"
        aria-hidden="true"
        class="absolute bottom-0 right-0 m-2"
        height="32"
        fit="scale"
        loading="lazy"
      />
    </div>
    <div
      class="pr-3 md:px-3 flex flex-col justify-between text-sm flex-1 mt-1 md:mt-0"
    >
      <a
        :aria-label="event.title"
        :href="event.url"
        rel="noopener noreferrer"
        target="_blank"
        class="underline text-md"
      >
        {{ event.title }}
      </a>
      <div class="my-1 flex items-center flex-wrap">
        <span class="text-xl font-bold mr-3">{{ talk.title }}</span>
        <chip
          :text="talk.type"
          :class="chipColor"
          class="text-xs uppercase font-extrabold text-white dark:text-white"
        />
      </div>
      <div class="flex items-center">
        <icon v-bind="location" size="14px" />
        <span class="ml-1">{{ event.location }}</span>
      </div>
      <div class="flex items-center">
        <icon v-bind="clock" size="14px" />
        <span class="ml-1">{{ talk.time }}</span>
      </div>
      <div class="text-left">{{ talk.description }}</div>
      <div class="flex items-end text-mayas-hot-pink">
        <a
          :aria-label="`${talk.title} - Slides`"
          :href="talk.slides"
          v-if="talk.slides"
          rel="noopener noreferrer"
          target="_blank"
          class="underline mr-2"
        >
          Slides
        </a>
        <a
          :aria-label="`${talk.title} - Demo`"
          :href="talk.demo"
          v-if="talk.demo"
          rel="noopener noreferrer"
          target="_blank"
          class="underline mx-2"
        >
          Demo
        </a>
        <a
          :aria-label="`${talk.title} - Video`"
          :href="talk.video"
          v-if="talk.video"
          rel="noopener noreferrer"
          target="_blank"
          class="underline mx-2"
        >
          Video
        </a>
        <a
          :aria-label="`${talk.title} - Writeup`"
          :href="talk.writeup"
          v-if="talk.writeup"
          rel="noopener noreferrer"
          target="_blank"
          class="underline ml-2"
        >
          Writeup
        </a>
      </div>
    </div>
  </article>
</template>
<script>
import { location, clock } from '../assets/icons'

export default {
  props: {
    event: {
      type: Object,
      required: true
    },
    talk: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      location,
      clock
    }
  },
  computed: {
    chipColor() {
      switch (this.talk.type) {
        case 'light talk':
          return 'border-violet-700 bg-violet-700'
        case 'talk':
        default:
          return 'border-mayas-navy bg-mayas-navy'
      }
    }
  }
}
</script>
