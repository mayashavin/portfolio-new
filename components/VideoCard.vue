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
        <img
          :src="image"
          :alt="video.title"
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
        <span class="dark:text-gray-500">- {{ publishedTime }}</span>
      </div>
    </slot>
  </div>
</template>
<script>
import { buildImageUrl } from 'cloudinary-build-url'
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
    },
    publishedTime: {
      type: String,
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
    },
    image() {
      return buildImageUrl(
        `https://img.youtube.com/vi/${this.video.id}/hqdefault.jpg`,
        {
          cloud: {
            storageType: 'fetch',
            cloudName: 'mayashavin'
          },
          transformations: {
            resize: {
              width: 280
            },
            dpr: '2.0'
          }
        }
      )
    }
  }
}
</script>
