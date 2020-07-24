export default {
  methods: {
    tagClass(tag) {
      return {
        'bg-mayas-green-dark': this.isSelectedTag(tag)
      }
    },
    sortByTag(selected) {
      this.byTag = selected
    },
    isSelectedTag(tag) {
      return this.byTag === tag
    }
  }
}
