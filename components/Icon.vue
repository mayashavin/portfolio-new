<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    preserveAspectRatio="xMidYMid"
  >
    <path :d="path" fill="currentColor" />
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: '20px'
    },
    path: {
      type: [String, Array],
      required: true
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  }
}
</script>
