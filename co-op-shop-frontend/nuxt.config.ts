import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['trpc-nuxt'],
  trpc: {
    baseURL: 'http://localhost:3000', // defaults to http://localhost:3000
    endpoint: '/trpc', // defaults to /trpc
  },
  typescript: {
    strict: true // required to make input/output types work
  }
})
