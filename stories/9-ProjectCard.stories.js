import ProjectCard from '../components/ProjectCard.vue'

export default {
  title: 'ProjectCard'
}

export const Default = () => ({
  components: { ProjectCard },
  data() {
    return {
      project: {
        name: 'TFH-tours',
        description: 'Demo static blog using Nuxt Content module',
        demo: 'https://full-static.app-vercel.app',
        repo: 'https://github.com/mayashavin/tours-nuxt-full-static',
        thumbnail: 'projects/tfh-tours'
      }
    }
  },
  template: `
  <div class="font-display">
    <h1 class="text-mayas text-3xl font-semibold mx-3 mt-5">Thumbnail Card for Project</h1>
    <div class="flex p-4 flex-wrap mx-3 bg-mayas text-white">
      <project-card :project="project" class="mr-2"/>
    </div>
  </div>
  `
})
