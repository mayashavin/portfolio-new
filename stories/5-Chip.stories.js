import Chip from '../components/Chip.vue'

export default {
  title: 'Chip'
}

export const Default = () => ({
  components: { Chip },
  methods: {
    handler(value) {
      console.log(value)
    }
  },
  template: `
  <div>
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Chip</h1>
    <div class="flex p-4 flex-wrap mx-3">
      <chip text="Maya" class="text-xs px-3 border-mayas-green-dark text-mayas-green-dark"/>
      <chip text="Maya" class="text-xs px-3 bg-mayas-green-dark text-white ml-2"/>
      <chip text="Maya" class="text-xs px-3 bg-violet-600 border-mayas-violet-600 text-white ml-2 uppercase"/>
      <chip text="Maya" clickable @chipClicked="handler" class="text-xs px-3 bg-mayas-violet-600 border-mayas-violet-600 text-white ml-2 uppercase"/>
    </div>
  </div>
  `
})
