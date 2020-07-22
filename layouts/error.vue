<template>
  <div
    class="container flex flex-col my-5 items-center justify-center text-2xl"
  >
    <h2 class="text-3xl mb-5">
      {{ errorMsg }}
    </h2>
    <div class="flex items-center flex-wrap justify-center">
      <span>
        {{ $t('error.message') }}
      </span>
      <nuxt-link to="/" class="mr-2 px-3 py-2 underline">
        {{ $t('error.actions.home') }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    errorMsg() {
      switch (this.error.statusCode) {
        case 404: {
          return this.$t('error.codes.404')
        }
        default: {
          return this.$t('error.codes.default')
        }
      }
    }
  }
}
</script>
