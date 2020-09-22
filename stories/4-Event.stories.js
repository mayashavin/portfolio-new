import Event from '../components/Event.vue'

export default {
  title: 'Event'
}

export const Row = () => ({
  components: { Event },
  data() {
    return {
      event: {
        title: 'JavaScriptIL Meetup',
        logo: 'CSSinJS/javascript',
        time: {
          date: '23',
          month: 'Jul',
          year: '2020'
        },
        url: 'https://www.meetup.com/JavaScript-Israel/events/264519426/',
        location: 'Virtual online'
      },
      talk: {
        title: 'Performant Components with Customization',
        description: 'sgsgfgsdbfdgfsdgfdgsdffgdsgfdsgfdgfd',
        type: 'talk',
        tech: 'React',
        video: 'ttps://www.youtube.com/watch?v=O5ImVMQtZOI',
        writeup:
          'https://slides.com/mayashavin/performant-components-customization-vue-ams',
        demo: 'https://github.com/mayashavin/storefrontui-demo-store',
        slides:
          'https://slides.com/mayashavin/performant-components-customization-vue-ams',
        time: '17:00pm CET +1'
      }
    }
  },
  template: `
  <div>
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Event Card</h1>
    <div class="flex p-4 flex-wrap mx-3 font-display bg-mayas text-white">
      <event :talk="talk" :event="event" />    
    </div>
    <div class="flex p-4 flex-wrap mx-3 font-display bg-violet-400">
      <event :talk="talk" :event="event" />    
    </div>
  </div>
  `
})
