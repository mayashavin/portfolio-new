<template>
  <div class="p-3 w-320 flex flex-col items-center">
    <slot name="video-card">
      <a
        :href="source"
        :aria-label="video.title"
        class="relative text-left"
        rel="noopener noreferrer"
        target="_blank"
      >
        <cld-image
          :public-id="`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`"
          :alt="video.title"
          type="fetch"
          width="280"
          quality="auto"
          fetch-format="auto"
          loading="lazy"
          aria-hidden="true"
        />
        <div
          class="absolute flex h-full items-center justify-center top-0 w-full opacity-75"
        >
          <icon v-bind="play" size="36px" />
        </div>
      </a>
      <div>
        <a
          :href="source"
          :aria-label="video.title"
          rel="noopener noreferrer"
          target="_blank"
          class="text-xl text-left flex my-2"
        >
          {{ video.title }}
        </a>
        <a
          :aria-label="channel.name"
          :href="channel.url"
          rel="noopener noreferrer"
          target="_blank"
          class="underline"
        >
          {{ channel.name }}
        </a>
        <span class="text-gray-500">- {{ video.publishedTime }}</span>
      </div>
    </slot>
  </div>
</template>
<script>
import { play } from '../assets/icons'

export default {
  props: {
    video: {
      type: Object,
      required: true
    },
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      play
    }
  },
  computed: {
    source() {
      return (
        this.video.url || `https://www.youtube.com/watch?v=${this.video.id}`
      )
    }
  }
}
</script>
