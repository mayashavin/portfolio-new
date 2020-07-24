<template>
  <!--eslint-disable-next-line vue/require-component-is-->
  <component
    :is="container"
    @click="onClick"
    class="w-fit h-fit px-2 py-1 border rounded-full"
  >
    <span>{{ text }}</span>
  </component>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: ''
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    container() {
      return this.clickable ? 'button' : 'span'
    }
  },
  methods: {
    onClick() {
      return (
        this.clickable &&
        this.$emit('chip-clicked', this.active ? '' : this.text)
      )
    }
  }
}
</script>
