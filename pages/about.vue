<template>
  <section class="mt-3 flex-col justify-center overflow-auto md:w-9/12 mx-auto">
    <div class="flex justify-evenly items-center flex-col md:flex-row">
      <cld-image
        alt="Maya Shavin - Web developer, writer and speaker"
        loading="lazy"
        public-id="mayashavin/Maya_2020"
        width="150"
        height="150"
        quality="auto"
        gravity="auto"
        radius="max"
        aspect-ratio="1:1"
        crop="fill"
        aria-hidden="true"
        class="mx-3"
        fetchFormat="auto"
      />

      <div class="mx-5 md:mx-0 md:w-8/12 text-left">
        <h2 class="mx-auto text-2xl w-fit pr-4 pb-1 my-3 flex items-center">
          <hr class="w-6" />
          <span class="mx-4">{{ page.title }}</span>
          <hr class="w-6" />
        </h2>
        <nuxt-content :document="page" class="text-lg" />
      </div>
    </div>
    <div class="flex items-center m-3 justify-center">
      <cld-image
        v-for="(framework, key) in frameworks"
        :key="key"
        :alt="framework.label"
        :public-id="framework.publicId"
        loading="lazy"
        width="32px"
        quality="auto"
        fetchFormat="auto"
        class="m-2"
      />
    </div>
    <div class="mt-5">
      <h2 class="mx-auto text-2xl w-fit pr-4 pb-1 my-3 flex items-center">
        <hr class="w-6" />
        <span class="mx-4">My projects</span>
        <hr class="w-6" />
      </h2>
      <div class="flex items-center flex-wrap justify-center md:justify-start">
        <project-card
          v-for="project in projects"
          :key="project.slug"
          :project="project"
          class="md:mr-3 mb-3"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.$t('about.title'),
      description: this.$t('about.description')
    }
  },
  data() {
    return {
      frameworks: {
        javascript: {
          label: 'JavaScript programming language',
          publicId: 'CSSinJS/javascript'
        },
        typescript: {
          label: 'TypeScript',
          publicId: 'mayashavin/typescript'
        },
        vue: {
          label: 'Vue Framework',
          publicId: 'vue'
        },
        react: {
          label: 'React Framework',
          publicId: 'CSSinJS/React.js_logo-512'
        },
        nuxt: {
          label: 'Nuxt Framework',
          publicId: 'articles/CSSVariables/nuxt-white'
        },
        gridsome: {
          label: 'Gridsome Framework',
          publicId: 'favicon'
        },
        svelte: {
          label: 'Svelte Framework',
          publicId: '23617963'
        }
      }
    }
  },
  async asyncData({ $content }) {
    const page = await $content('about').fetch()
    const projects = await $content('projects')
      .only(['name', 'description', 'demo', 'repo', 'thumbnail'])
      .sortBy('name', 'asc')
      .fetch()

    return { page, projects }
  }
}
</script>
