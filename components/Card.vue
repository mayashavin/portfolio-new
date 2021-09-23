<template>
  <div class="card w-320">
    <nuxt-img
      :src="post.img"
      :alt="post.title"
      :modifiers="{ dpr: '2.0' }"
      class="mb-2 w-320 bg-mayas-light-20 dark:bg-mayas"
      fit="fill"
      width="320"
      height="160"
    />
    <div class="mt-2">
      <div class="font-semibold capitalize text-2xl">
        {{ post.title }}
      </div>
      <p class="dark:text-gray-300 text-sm mb-2 truncate visible">
        {{ post.description }}
      </p>
      <div class="dark:text-gray-300 text-sm">
        <span>{{ post.publishedTime }}</span> ·
        <span>{{ post.readingTime }}</span>
      </div>
    </div>
    <p class="text-eggplant-500 dark:text-rose-500 underline">
      Continue reading
    </p>
  </div>
</template>
<script>
import post from '../mixins/post'

export default {
  mixins: [post]
}
</script>
