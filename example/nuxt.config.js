import { resolve } from 'path'
/**
 * @type {import('@nuxt/types').NuxtConfig} config
 */
const config = {
  buildModules: [
    '@nuxt/typescript-build',
    ...(process.env.NODE_ENV === 'development' ? ['@nuxtjs/tailwindcss'] : []),
    '../src/index.ts',
  ],
  sanity: {
    projectId: process.env.NODE_ENV === 'development' ? 'j1o4tmjp' : undefined,
    dataset: 'production',
  },
  build: {
    extend (config) {
      config.resolve.alias['@nuxtjs/sanity'] = resolve(
        __dirname,
        '../src/index.ts',
      )
    },
  },
}

export default config
