<template>
  <div
    :class="`bg-${color}`"
    class="flex items-center justify-center px-3 palette"
  >
    <span class="text-white">{{ color }}</span>
  </div>
</template>
<script>
export default {
  props: {
    color: String
  }
}
</script>
<style scoped>
.palette {
  width: 150px;
  height: 150px;
}
</style>
