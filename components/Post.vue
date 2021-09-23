<template>
  <article class="px-2 md:px-20 text-xl w-full bg-violet-400 dark:bg-mayas">
    <div class="my-4">
      <chip
        v-for="tag in post.tags"
        :key="tag"
        :text="tag"
        class="border-none bg-mayas-gray-light text-black text-xs mr-2 rounded-b-none rounded-t-none"
      />
      <h1 class="text-left text-4xl font-semibold w-fit my-2">
        {{ post.title }}
      </h1>
      <div class="flex justify-between items-center text-sm">
        <div class="text-gray-800 dark:text-gray-300 mr4">
          <span>{{ post.publishedTime }}</span> ·
          <span>{{ post.readingTime }}</span>
        </div>
        <div class="flex items-center">
          <a
            href="https://www.buymeacoffee.com/VTLRKH6"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee"
            target="_blank"
          >
            <nuxt-img
              src="mayashavin/BMC"
              fetchFormat="auto"
              quality="auto"
              height="24"
              fit="scale"
              alt="Buy Me A Coffee"
              class="hover:shadow-md mr-2"
            />
          </a>
          <share :title="post.title" :description="post.description" />
        </div>
      </div>
    </div>
    <nuxt-img
      v-if="post.img"
      :src="post.img"
      :alt="post.title"
      quality="auto"
      fetchFormat="auto"
      responsive
      loading="lazy"
      class="my-4 z-1"
    />
    <div>
      <nuxt-content :document="post" class="my-4" />
      <div class="flex items-center justify-end mb-4">
        <a
          href="https://www.buymeacoffee.com/VTLRKH6"
          rel="noopener noreferrer"
          aria-label="Buy me a coffee"
          target="_blank"
        >
          <nuxt-img
            src="mayashavin/BMC"
            fetchFormat="auto"
            quality="auto"
            height="24"
            fit="scale"
            alt="Buy Me A Coffee"
            class="hover:shadow-md mr-2"
          />
        </a>
        <share :title="post.title" :description="post.description" />
      </div>
    </div>
  </article>
</template>
<script>
import post from '@/mixins/post'
export default {
  mixins: [post]
}
</script>
<style>
.nuxt-content h2 {
  @apply text-3xl font-bold;
}

.nuxt-content h3 {
  @apply text-2xl font-bold;
}

.nuxt-content p {
  @apply leading-7;
}

.nuxt-content ul,
.nuxt-content ol {
  @apply list-disc pl-3 ml-3;
}

.nuxt-content p > code {
  @apply px-1 font-bold my-3;
}

.nuxt-content hr {
  @apply w-32 mx-auto;
  border-top-style: groove;
}

.nuxt-content blockquote {
  @apply border-l-2 pl-3 pt-1;
}
</style>
