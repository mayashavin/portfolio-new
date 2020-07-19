import Icon from '../components/Icon'

import * as icons from '../assets/icons'

export default { title: 'Icon' }
export const listOfIcons = () => ({
  components: { Icon },
  data() {
    return {
      icons: Object.keys(icons).map(key => ({ ...icons[key], name: key }))
    }
  },
  template: `
  <div>
    <h2 class="text-mayas text-3xl font-semibold mx-3 mt-5">List of current used icons</h2>
    <div class="flex p-4 flex-wrap">
      <div
        v-for="(icon, index) in icons" :key="index"
        class="m-2 text-center"
      >
        <icon
          :path="icon.path"
          :viewBox="icon.viewBox"
          size="32px"
          class="mb-3 flex justify-center"
        />
        <span class="font-small">{{icon.name}}</span>
      </div>      
    </div>
  </div>
  `
})

export const iconWithSizes = () => ({
  components: { Icon },
  data() {
    return {
      icon: icons.search,
      sizes: ['24px', '32px', '48px']
    }
  },
  template: `
  <div>
    <h2 class="text-mayas text-3xl font-semibold mx-3 mt-5">Sizes</h2>
    <div class="flex p-4">
      <div
        v-for="size in sizes" :key="size"
        class="m-2 text-center"
      >
        <icon
          :path="icon.path"
          :viewBox="icon.viewBox"
          :size="size"
          class="mb-3 flex justify-center text-mayas"
        />
        <span class="font-small">{{size}}</span>
      </div>      
    </div>
  `
})

export const iconWithColors = () => ({
  components: { Icon },
  data() {
    return {
      icon: icons.search,
      colors: [
        'text-mayas-hot-pink',
        'text-mayas-dark-80',
        'text-mayas-sky-light'
      ]
    }
  },
  template: `
  <div>
    <h2 class="text-mayas text-3xl font-semibold mx-3 mt-5">Colors</h2>
    <p class="flex mx-3 mt-2">We use <pre class="bg-mayas-gray-light ml-1 px-1 text-mayas-green-dark">currentColor</pre></p>
    <div class="flex p-4">
      <div
        v-for="color in colors" :key="size"
        class="m-2 text-center"
        :class="color"
      >
        <icon
          :path="icon.path"
          :viewBox="icon.viewBox"
          size="32px"
          class="mb-3 flex justify-center"
        />
        <span class="font-small">{{color}}</span>
      </div>      
    </div>
  `
})
