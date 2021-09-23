<template>
  <article
    class="rounded w-320 border-violet-400 dark:border-mayas-sky-dark border bg-mayas-dark-20 dark:bg-mayas-dark-80 shadow-lg h-300"
  >
    <a
      :aria-label="`Click to visit demo of ${project.name}`"
      :href="project.demo"
      @click="
        track(
          'projects',
          'view project',
          `project: ${project.name}`,
          project.name
        )
      "
      rel="noopener noreferrer"
      target="_blank"
    >
      <nuxt-img
        :src="project.thumbnail"
        :alt="project.name"
        class="mb-2 w-320 bg-mayas-light-20 dark:bg-mayas project-thumbnail hover:opacity-75 rounded-t lazyload"
        responsive
        height="160"
        quality="auto"
        fetchFormat="auto"
        aria-hidden="true"
        loading="lazy"
      />
    </a>
    <div class="px-3 pb-2 pt-1">
      <a
        :href="project.repo"
        rel="noopener noreferrer"
        target="_blank"
        class="text-xl font-bold underline"
      >
        {{ project.name }}
      </a>
      <p class="dark:text-gray-500 text-sm mt-1">{{ project.description }}</p>
    </div>
  </article>
</template>
<script>
import track from '../mixins/track'

export default {
  mixins: [track],
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.project-thumbnail img {
  @apply rounded-t;
}
</style>
