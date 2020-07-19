<template>
  <div class="flex flex-wrap">
    <a
      :href="tweetFormatLink"
      :aria-label="`Tweet about ${title}`"
      class="share-button mr2 flex items-center justify-center mx-1"
      target="_blank"
      data-size="large"
      rel=" noopener noreferrer"
    >
      <icon v-bind="twitter" size="24px" />
    </a>
    <a
      :href="linkedInShareLink"
      :aria-label="`Share ${title} on LinkedIn`"
      class="mr2 share-button flex items-center justify-center mx-1"
      target="_blank"
      rel=" noopener noreferrer"
    >
      <icon v-bind="linkedin" size="24px" />
    </a>
    <a
      :href="facebookShare"
      :aria-label="`Share ${title} on Facebook`"
      target="_blank"
      rel=" noopener noreferrer"
      class="mr2 share-button flex items-center justify-center mx-1"
    >
      <icon v-bind="facebook" size="24px" />
    </a>
  </div>
</template>
<script>
import { twitter, facebook, linkedin } from '../assets/icons'
export default {
  name: 'ShareBtns',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      twitter,
      facebook,
      linkedin
    }
  },
  computed: {
    tweetFormatLink() {
      return `https://twitter.com/intent/tweet?text=${this.title}&via=mayashavin&url=https://mayashavin.com${this.$route.path}`
    },
    linkedInShareLink() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=https://mayashavin.com${this.$route.path}&title=${this.title}&summary=${this.description}&source=Maya`
    },
    facebookShare() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://mayashavin.com${this.$route.path}%2F&amp;src=sdkpreparse`
    }
  }
}
</script>
