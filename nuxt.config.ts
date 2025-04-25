// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: [
    '~/assets/styles/main.scss',
  ],
  typescript: {
    typeCheck: true
  },

  googleFonts: {
    families: {
        'Nunito Sans': [400, 500, 600, 700],
    },
  },
})