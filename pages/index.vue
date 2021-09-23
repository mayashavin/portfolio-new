<template>
  <section class="container justify-evenly flex-col md:flex-row">
    <div
      class="self-start ml-5 md:self-center md:ml-0 flex flex-col md:items-center"
    >
      <nuxt-img
        :modifiers="{ ar: '1:1', roundCorner: 'max', gravity: 'auto' }"
        alt="Maya Shavin - Web developer, writer and speaker"
        loading="lazy"
        src="mayashavin/Maya_2020.png"
        width="200"
        height="200"
        fit="fill"
        aria-hidden="true"
        class="mx-3"
      />
      <h2 class="text-2xl md:text-3xl my-3">
        {{ $t('homepage.greeting') }}
      </h2>
    </div>
    <div
      class="flex flex-col items-end text-3xl self-end mr-8 md:text-5xl md:self-center md:mr-0"
    >
      <span>
        <nuxt-link
          :aria-label="$t('homepage.title.web')"
          to="/about"
          rel="noopener noreferrer"
          class="underline"
        >
          {{ $t('homepage.title.web') }}
        </nuxt-link>
      </span>
      <span>
        <nuxt-link
          :aria-label="$t('homepage.title.speaker')"
          to="/speaker"
          rel="noopener noreferrer"
          class="underline"
        >
          {{ $t('homepage.title.speaker') }}
        </nuxt-link>
      </span>
      <span>
        <nuxt-link
          :aria-label="$t('homepage.title.blogger')"
          to="/articles"
          rel="noopener noreferrer"
          class="underline"
        >
          {{ $t('homepage.title.blogger') }}
        </nuxt-link>
      </span>
      <span> {{ $t('homepage.title.organizer') }}</span>
      <span> {{ $t('homepage.title.bookworm') }}</span>
    </div>
  </section>
</template>

<script>
export default {}
</script>
