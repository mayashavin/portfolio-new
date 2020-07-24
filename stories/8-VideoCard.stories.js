import VideoCard from '../components/VideoCard.vue'

export default {
  title: 'VideoCard'
}

export const Default = () => ({
  components: { VideoCard },
  data() {
    return {
      video: {
        title:
          'Media for everyone - how to make your Vue Apps accessible for all users',
        url: 'https://www.youtube.com/watch?v=3hWTC5h0uAw',
        publishedAt: '29 April 2020',
        id: '3hWTC5h0uAw'
      },
      channel: {
        name: 'Vuejs Amsterdam',
        url: 'https://www.youtube.com/channel/UCxV7lO6dUhpB-IyzmGuVgqg'
      }
    }
  },
  template: `
  <div class="font-display">
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Thumbnail Card for Video</h1>
    <div class="flex p-4 flex-wrap mx-3 bg-mayas text-white">
      <video-card :video="video" :channel="channel" class="mr-2"/>
      <video-card :video="video" :channel="channel" class="mx-2"/>
    </div>
  </div>
  `
})
