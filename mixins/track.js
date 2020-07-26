export default {
  methods: {
    track(...args) {
      this.$ga && this.$ga.event(...args)
    }
  }
}
