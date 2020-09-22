<template>
  <div class="h-full flex flex-col bg-mayash-main-light">
    <m-header />
    <nuxt class="flex-1" />
    <m-footer />
  </div>
</template>

<style>
:root {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html {
  @apply font-display text-md box-border text-white;
  height: 100%;
}

.dark-mode {
  --page-background: linear-gradient(
    to bottom right,
    #4e1992 0%,
    #4e1992 50%,
    #3d1472 50%,
    #3d1472 100%
  );
  @apply text-white border-white;
}

.light-mode {
  --page-background: linear-gradient(
    to bottom right,
    #c9a3f9 0%,
    #c9a3f9 50%,
    #bd96ef 50%,
    #bd96ef 100%
  );

  @apply text-black;
}

body {
  background: var(--page-background);
  overflow: hidden;
  height: 100%;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}

/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply flex items-center text-center mx-auto;
}

#__layout,
#__nuxt {
  @apply h-full;
}
</style>
<style>
.nuxt-content * {
  @apply mb-3;
}

.nuxt-content a {
  @apply underline;
}
</style>
<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<style>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-violet-400;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-violet-500;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-violet-500;
}

/* Track */
.dark-mode ::-webkit-scrollbar-track {
  @apply bg-mayas;
}

/* Handle */
.dark-mode ::-webkit-scrollbar-thumb {
  @apply bg-mayas-dark-40;
}

/* Handle on hover */
.dark-mode ::-webkit-scrollbar-thumb:hover {
  @apply bg-mayas-dark-40;
}
</style>
