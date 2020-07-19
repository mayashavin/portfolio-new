<template>
  <section class="flex mx-3 md:mx-auto flex-col items-start h-0">
    <div
      class="mb-5 md:mt-5 flex items-center self-center md:self-start text-sm"
    >
      <h4>Sort by</h4>
      <div class="ml-3">
        <chip
          v-for="tag in tags"
          :key="tag.title"
          :text="tag.title"
          :class="tagClass(tag.active)"
          class="text-sm px-3 border-mayas-green-dark mx-1 mb-2"
          clickable
        />
      </div>
    </div>
    <div class="overflow-auto md:pr-8 w-screen md:w-auto">
      <event
        v-for="(event, index) in events"
        :key="index"
        :event="event.organizer"
        :talk="event.talk"
        class="mb-6"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        {
          title: 'Upcoming',
          active: true
        },
        {
          title: 'Past',
          active: false
        },
        {
          title: 'React',
          active: false
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const page = await $content('events')
      .only('events')
      .fetch()

    return { events: page.events }
  },
  methods: {
    tagClass(active) {
      return {
        'bg-mayas-green-dark': active
      }
    }
  }
}
</script>
