<template>
  <footer class="w-full mx-auto py-2">
    <div class="flex justify-center items-center">
      <a
        v-for="(social, key) in socials"
        :key="key"
        :href="social"
        :aria-label="$t(`socials.${key}`)"
        target="_blank"
        rel="noopener noreferrer"
        class="m-3 md:m-2"
      >
        <icon v-bind="icons[key]" size="24px" />
      </a>
      <a
        href="https://www.buymeacoffee.com/VTLRKH6"
        rel="noopener noreferrer"
        aria-label="Buy me a coffee"
        target="_blank"
      >
        <nuxt-img
          src="mayashavin/BMC"
          height="24"
          fit="scale"
          alt="Buy Me A Coffee"
          class="hover:shadow-md mx-2"
        />
      </a>
    </div>
    <p class="text-xs text-center">
      {{ $t('footer.disclaimer') }} - {{ date }}
    </p>
  </footer>
</template>
<script>
import socials from '~/assets/links/socials.json'
import {
  twitter,
  github,
  youtube,
  linkedin,
  facebook,
  medium
} from '~/assets/icons'

export default {
  data() {
    return {
      socials,
      icons: { twitter, github, youtube, linkedin, facebook, medium }
    }
  },
  computed: {
    date() {
      const date = new Date()

      return this.$t('footer.copyright', {
        date: date.getUTCFullYear()
      })
    }
  }
}
</script>
