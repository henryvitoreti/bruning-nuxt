// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/custom.scss',
  ],
  plugins: [
    '~/plugins/bootstrap.client.js',
  ]
})
