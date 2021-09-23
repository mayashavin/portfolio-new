<template>
  <section
    class="mt-3 flex-col justify-center overflow-y-auto md:w-9/12 mx-auto"
  >
    <div class="flex justify-evenly items-center flex-col md:flex-row">
      <div class="about--img md:mr-3 lg:mr-0">
        <nuxt-img
          :modifiers="{ ar: '1:1', gravity: 'auto', roundCorner: 'max' }"
          alt="Maya Shavin - Web developer, writer and speaker"
          loading="lazy"
          src="mayashavin/Maya_2020"
          width="150"
          height="150"
          fit="fill"
          aria-hidden="true"
          class="mx-3"
          fetchFormat="auto"
        />
      </div>
      <div class="mx-5 md:mx-0 md:w-8/12 text-left">
        <h2 class="mx-auto text-2xl w-fit pr-4 pb-1 my-3 flex items-center">
          <hr class="w-6 border-black dark:border-white" />
          <span class="mx-4">{{ page.title }}</span>
          <hr class="w-6 border-black dark:border-white" />
        </h2>
        <nuxt-content :document="page" class="text-lg md:mr-3" />
        <div class="my-3 flex justify-start md:justify-left pt-3">
          <a
            href="https://www.buymeacoffee.com/VTLRKH6"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee"
            target="_blank"
          >
            <nuxt-img
              src="mayashavin/default-orange"
              height="42"
              fit="scale"
              alt="Buy Me A Coffee"
              class="hover:shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-center m-3 justify-center">
      <nuxt-img
        v-for="(framework, key) in frameworks"
        :key="key"
        :alt="framework.label"
        :src="framework.publicId"
        loading="lazy"
        width="32px"
        class="m-2"
      />
    </div>
    <div class="mt-5">
      <h2 class="mx-auto text-2xl w-fit pr-4 pb-1 my-3 flex items-center">
        <hr class="w-6 border-black dark:border-white" />
        <span class="mx-4">My projects</span>
        <hr class="w-6 border-black dark:border-white" />
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
import { newsletter } from '../assets/icons'

export default {
  head() {
    return {
      title: this.$t('about.title'),
      description: this.$t('about.description'),
      meta: [
        // Twitter Card
        {
          hid: 'description',
          name: 'description',
          content: this.$t('about.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('about.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('about.description')
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('about.title')
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$t('about.description')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('about.description')
        }
      ]
    }
  },
  data() {
    return {
      newsletter,
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
<style scoped>
.about--img {
  width: 250px;
  height: 250px;
  @apply flex justify-center items-center relative;
}

.about--img::after {
  background-image: url('https://res.cloudinary.com/mayashavin/image/upload/w_250,h_250,c_scale/v1594814559/mayashavin/white-logo.png');
  background-repeat: no-repeat;
  content: '';
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
