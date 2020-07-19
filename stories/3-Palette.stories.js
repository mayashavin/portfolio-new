import { theme } from '../tailwind.config'
import Palette from './Palette.story.vue'

export default {
  title: 'Palette'
}
const colors = Object.keys(theme.extend.colors.mayas)

export const mainPalettes = () => ({
  components: { Palette },
  data() {
    return {
      palettes: colors.map(
        theme => `mayas${theme !== 'default' ? `-${theme}` : ''}`
      )
    }
  },
  template: `
  <div>
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Maya Shavin's Main Palettes</h1>
    <div class="flex p-4 flex-wrap mx-3">
      <div
        v-for="(palette, index) in palettes" 
        :key="index"
        class="m-2 text-center"
      >
        <palette :color="palette"/>
      </div>      
    </div>
  </div>
  `
})
