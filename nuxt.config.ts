// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gumroadUrl: process.env.NUXT_PUBLIC_GUMROAD_URL || '',
      etsyUrl: process.env.NUXT_PUBLIC_ETSY_URL || '',
    },
  },
  
  modules: ['@nuxtjs/tailwindcss']
})