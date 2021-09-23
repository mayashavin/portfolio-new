<template>
  <header class="uppercase">
    <nav
      :class="sidebarClass"
      class="w-screen absolute top-0 h-screen md:h-auto md:relative justify-center md:my-3 md:text-xl flex-col z-20 md:z-0 md:flex"
    >
      <div
        class="bg-violet-400 md:flex-row dark:bg-mayas py-5 px-3 md:p-0 flex flex-col justify-center md:bg-transparent md:dark:bg-transparent"
      >
        <nuxt-link
          :class="highlightTab('about')"
          @click.native="toggleMenu"
          to="/about"
          class="mx-2 p-1 my-2 md:my-0 md:border-b flex items-center border-black dark:border-white"
        >
          {{ $t('navigation.about') }}
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('speaker')"
          @click.native="toggleMenu"
          to="/speaker"
          class="mx-2 p-1 my-2 md:my-0 md:border-b flex items-center border-black dark:border-white"
        >
          {{ $t('navigation.speaker') }}
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('home')"
          @click.native="toggleMenu"
          to="/"
          class="order-first md:order-none flex items-center my-2 mx-3 md:my-0"
          aria-label="Click to go back to homepage"
        >
          <nuxt-img
            :modifiers="effects"
            alt="Maya Shavin - Logo"
            loading="lazy"
            src="mayashavin/white-logo"
            width="48"
            fit="fill"
            aria-hidden="true"
            class="w-8 md:w-auto lazyload"
          />
          <span class="ml-3 md:hidden">Home</span>
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('articles')"
          @click.native="toggleMenu"
          to="/articles"
          class="mx-2 my-2 md:my-0 p-1 md:border-b flex items-center border-black dark:border-white"
        >
          {{ $t('navigation.articles') }}
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('resources')"
          @click.native="toggleMenu"
          to="/resources"
          class="mx-2 my-2 md:my-0 p-2 md:border-b flex items-center border-black dark:border-white"
        >
          {{ $t('navigation.resources') }}
        </nuxt-link>
        <button
          @click="toggleMenu"
          aria-label="Close"
          class="absolute top-0 right-0 m-5 md:hidden"
        >
          <icon v-bind="close" size="24px" />
        </button>
      </div>
      <div
        @click="toggleMenu"
        class="bg-gray-800 opacity-75 flex-1 md:hidden"
      />
    </nav>
    <div class="flex justify-end md:absolute top-0 right-0 m-5">
      <button
        @click="toggleMenu"
        class="md:hidden mx-3"
        aria-label="Open navigation menu"
      >
        <icon v-bind="menu" size="24px" />
      </button>
      <button
        @click="$colorMode.preference = mode.name"
        :aria-label="`${mode.name} Mode`"
      >
        <icon v-bind="mode.icon" size="24px" />
      </button>
    </div>
  </header>
</template>
<script>
import { dark, light, menu, close } from '~/assets/icons'

export default {
  data() {
    return {
      colors: {
        light: {
          name: 'light',
          icon: light
        },
        dark: {
          name: 'dark',
          icon: dark
        }
      },
      menu,
      close,
      menuActive: false,
      currentTab: 'Home'
    }
  },
  computed: {
    mode() {
      return this.$colorMode.value === this.colors.light.name
        ? this.colors.dark
        : this.colors.light
    },
    effects() {
      return this.$colorMode.value === this.colors.light.name
        ? {
            // effect: 'colorize',
            // color: '#3d1472', /** there is a bug in Nuxt image */
            ar: '1:1',
            dpr: '1.0'
          }
        : {
            ar: '1:1',
            dpr: '1.0'
          }
    },
    sidebarClass() {
      return {
        hidden: !this.menuActive,
        flex: this.menuActive
      }
    },
    selectedTab() {
      return this.$store.getters.tab.split('-')[0]
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    },
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    highlightTab(tab) {
      return {
        'font-bold': this.selectedTab === tab
      }
    }
  }
}
</script>
