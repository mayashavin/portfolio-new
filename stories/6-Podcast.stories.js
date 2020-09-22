import Podcast from '../components/Podcast.vue'

export default {
  title: 'Podcast'
}

export const Default = () => ({
  components: { Podcast },
  data() {
    return {
      host: {
        title: 'ViewsOnVue',
        logo:
          'https://res.cloudinary.com/mayashavin/image/upload/c_scale,f_auto,h_40,q_auto,w_40/v1594635498/mayashavin/tv3wtL5s_400x400.jpg'
      },
      episode: {
        title: 'VoV 113: CSS and Components with Maya Shavin',
        url:
          'https://devchat.tv/views-on-vue/vov-113-css-and-components-with-maya-shavin/',
        duration: '30 mins'
      },
      publishedTime: '08 Feb 2020'
    }
  },
  template: `
  <div class="font-display">
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Podcast</h1>
    <div class="flex p-4 flex-wrap mx-3">
      <podcast :host="host" :episode="episode" :publishedTime="publishedTime" class=" bg-mayas text-white p-4"/>
      <podcast :host="host" :episode="episode" :publishedTime="publishedTime" class=" bg-violet-400 ml-5 p-4"/>
    </div>
  </div>
  `
})