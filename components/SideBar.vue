<template>
  <div class="flex flex-col z-20">
    <slot />
    <div @click="close" class="bg-gray-800 opacity-75 flex-1"></div>
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
