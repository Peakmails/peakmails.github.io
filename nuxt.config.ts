// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
      preset: 'github-pages'
  },

  app: {
      baseURL: '/'
  },

  ssr: false,
  modules: ['@nuxt/ui'],
})