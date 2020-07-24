<template>
  <section class="flex mx-3 md:mx-auto flex-col items-start h-0 max-w-5xl">
    <div
      class="mb-5 md:mt-5 flex items-start self-center md:self-start text-sm w-full"
    >
      <h4 class="pt-1 self-start">Sort by</h4>
      <div class="ml-3">
        <chip
          v-for="tag in tags"
          :key="tag"
          :text="tag"
          :class="tagClass(tag)"
          :active="isSelectedTag(tag)"
          v-on:chip-clicked="sortByTag"
          class="text-sm px-3 border-mayas-green-dark mx-1 mb-2"
          clickable
        />
      </div>
    </div>
    <transition-group
      class="overflow-auto md:pr-8 w-screen md:w-auto"
      tag="div"
      name="page"
    >
      <event
        v-for="event in filteredEvents"
        :key="event.organizer.date"
        :event="event.organizer"
        :talk="event.talk"
        class="mb-6"
      />
    </transition-group>
  </section>
</template>
<script>
import sortByTag from '@/mixins/sortByTag'
export default {
  mixins: [sortByTag],
  data() {
    return {
      tags: ['Upcoming', 'Past'],
      byTag: ''
    }
  },
  computed: {
    filteredEvents() {
      const currentDate = new Date()

      return this.events.filter(({ organizer }) => {
        switch (this.byTag) {
          case 'Upcoming':
            return new Date(organizer.date) > currentDate
          case 'Past':
            return currentDate >= new Date(organizer.date)
          default:
            return true
        }
      })
    }
  },
  async asyncData({ $content }) {
    const page = await $content('events')
      .only('events')
      .fetch()

    return {
      events: page.events.sort(
        (itemA, itemB) =>
          new Date(itemB.organizer.date) - new Date(itemA.organizer.date)
      )
    }
  }
}
</script>
