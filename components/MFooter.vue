<template>
  <footer class="w-full mx-auto py-2">
    <div class="flex justify-center">
      <a
        v-for="(social, key) in socials"
        :key="key"
        :href="social"
        :aria-label="$t(`socials.${key}`)"
        target="_blank"
        rel="noopener noreferrer"
        class="m-2"
      >
        <icon v-bind="icons[key]" size="24px" />
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
