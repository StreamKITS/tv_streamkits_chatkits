import { defineNuxtConfig, NuxtConfig } from 'nuxt/config'
import pugPlugin from 'vite-plugin-pug'

/**
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig(<NuxtConfig>{
  telemetry: false,
  pages: true,
  srcDir: 'src',

  components: {
    global: true,
    dirs: [{ path: '~/components' }],
  },

  modules: ['nuxt-quasar-ui'],

  css: ['~/assets/sass/main.sass'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  quasar: {
    config: {
      brand: {
        primary: '#6441A5',
        secondary: '#6E46BA',
        accent: '#9C27B0',

        dark: '#1d1d1d',
        'dark-page': '#121212',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },

  vite: {
    define: {
      'process.env.DEBUG': !!process.env.DEBUG,
    },
    plugins: [
      pugPlugin({
        pretty: true,
      } as any),
    ],
  },
})
