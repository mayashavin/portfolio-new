import Card from '../components/Card.vue'
import '../plugins/cloudinary'

export default {
  title: 'Card'
}

export const Default = () => ({
  components: { Card },
  data() {
    return {
      post: {
        img: 'articles/CSSVariables/css_variables',
        title: 'Dynamic theme with CSS Variables',
        description:
          'Theming a web application is always a challenge, and it can easily lead to performance issues. CSS pre-processor variables are good, but not enough for dynamic theming. Luckily, CSS variables can help to solve this challenge efficiently. 🚀',
        createdAt: '15 Jul 2020',
        readingTime: '5 mins'
      }
    }
  },
  template: `
  <div class="font-display">
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Thumbnail Card for Blog post</h1>
    <div class="flex p-4 flex-wrap mx-3 bg-mayas text-white">
      <card :post="post" class="mr-2"/>
      <card :post="post" class="mx-2"/>
    </div>
  </div>
  `
})
