<template>
  <div class="p-4 w-320">
    <a
      :href="episode.url"
      :aria-label="episode.title"
      rel=" noopener noreferrer"
      target="_blank"
    >
      <div>
        <div>
          <div class="flex">
            <nuxt-img
              :src="host.logo"
              :alt="host.title"
              :modifiers="{ dpr: '2.0' }"
              loading="lazy"
              fit="scale"
              width="40"
              height="40"
            />
            <div class="flex flex-col ml-2">
              <span>{{ host.title }}</span>
              <span class="text-sm">
                {{ publishedTime }}
              </span>
            </div>
          </div>
        </div>
        <div class="my-2">
          <span class="text-xl text-left flex">
            {{ episode.title }}
          </span>
        </div>
      </div>
      <div class="flex items-center text-sm">
        <icon v-bind="play" size="24px" class="text-mayas-sky-light" />
        <span class="black-60 ml-2">{{ episode.duration }}</span>
      </div>
    </a>
  </div>
</template>
<script>
import { play } from '../assets/icons'

export default {
  props: {
    episode: {
      type: Object,
      required: true
    },
    host: {
      type: Object,
      required: true
    },
    publishedTime: {
      type: String,
      required: true
    }
  },
  data() {
    return { play }
  }
}
</script>
