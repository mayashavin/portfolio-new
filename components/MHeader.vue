<template>
  <header class="uppercase">
    <nav class="hidden justify-center my-3 text-xl md:flex">
      <nuxt-link
        to="/about"
        class="mx-2 p-1 border-b flex items-center border-black dark:border-white"
      >
        {{ $t('navigation.about') }}
      </nuxt-link>
      <nuxt-link
        to="/speaker"
        class="mx-2 p-2 border-b flex items-center border-black dark:border-white"
      >
        {{ $t('navigation.speaker') }}
      </nuxt-link>
      <nuxt-link to="/" class="mx-3" aria-label="Click to go back to homepage">
        <cld-image
          :transformation="effects"
          alt="Maya Shavin - Logo"
          loading="lazy"
          public-id="mayashavin/white-logo"
          width="48"
          crop="fill"
          quality="auto"
          fetch-format="auto"
          aria-hidden="true"
        />
      </nuxt-link>
      <nuxt-link
        to="/articles"
        class="mx-2 p-2 border-b flex items-center border-black dark:border-white"
      >
        {{ $t('navigation.articles') }}
      </nuxt-link>
      <nuxt-link
        to="/resources"
        class="mx-2 p-2 border-b flex items-center border-black dark:border-white"
      >
        {{ $t('navigation.resources') }}
      </nuxt-link>
    </nav>
    <div class="flex justify-end md:absolute top-0 right-0 m-5">
      <button @click="toggleMenu" class="md:hidden mx-3">
        <icon v-bind="menu" size="24px" />
      </button>
      <button
        @click="$colorMode.preference = mode.name"
        :aria-label="`${mode.name} Mode`"
      >
        <icon v-bind="mode.icon" size="24px" />
      </button>
    </div>
    <side-bar
      :class="sidebarClass"
      v-on:close="toggleMenu"
      class="h-screen w-screen absolute top-0"
    >
      <template>
        <div class="bg-mayas-light-default dark:bg-mayas py-5 px-3">
          <nuxt-link
            @click.native="toggleMenu"
            to="/"
            class="mx-3 flex items-center my-2"
            aria-label="Click to go back to homepage"
          >
            <cld-image
              :transformation="effects"
              alt="Maya Shavin - Logo"
              loading="lazy"
              public-id="mayashavin/white-logo"
              width="32"
              crop="fill"
              quality="auto"
              fetch-format="auto"
              aria-hidden="true"
            />
            <span class="ml-3">Home</span>
          </nuxt-link>
          <nuxt-link
            @click.native="toggleMenu"
            to="/about"
            class="mx-2 p-1 my-2 underline flex items-center border-black dark:border-white"
          >
            {{ $t('navigation.about') }}
          </nuxt-link>
          <nuxt-link
            @click.native="toggleMenu"
            to="/speaker"
            class="mx-2 p-2 my-2 flex items-center border-black dark:border-white"
          >
            {{ $t('navigation.speaker') }}
          </nuxt-link>
          <nuxt-link
            @click.native="toggleMenu"
            to="/articles"
            class="mx-2 p-2 my-2 flex items-center border-black dark:border-white"
          >
            {{ $t('navigation.articles') }}
          </nuxt-link>
          <nuxt-link
            @click.native="toggleMenu"
            to="/resources"
            class="mx-2 p-2 my-2 flex items-center border-black dark:border-white"
          >
            {{ $t('navigation.resources') }}
          </nuxt-link>
          <button
            @click="toggleMenu"
            arial-label="Close"
            class="absolute top-0 right-0 m-5"
          >
            <icon v-bind="close" size="24px" />
          </button>
        </div>
      </template>
    </side-bar>
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
        ? [
            {
              effect: 'colorize',
              color: '#3d1472'
            }
          ]
        : []
    },
    sidebarClass() {
      return {
        hidden: !this.menuActive,
        flex: this.menuActive
      }
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
    }
  }
}
</script>
