<template>
  <div class="card w-320">
    <div>
      <chip v-for="tag in post.tags" :key="tag" :text="tag" />
    </div>
    <cld-image
      :public-id="post.img"
      :alt="post.title"
      class="mb-2 w-320 bg-mayas-light-20 dark:bg-mayas"
      crop="fill"
      width="320"
      height="160"
      quality="auto"
      fetchFormat="auto"
    />
    <div class="mt-2">
      <div class="font-semibold capitalize text-2xl">
        {{ post.title }}
      </div>
      <p class="text-gray-300 text-sm mb-2 truncate visible">
        {{ post.description }}
      </p>
      <div class="text-gray-300 text-sm">
        <span>{{ post.publishedTime }}</span> ·
        <span>{{ post.readingTime }}</span>
      </div>
    </div>
    <p class="text-mayas-hot-pink underline">
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
