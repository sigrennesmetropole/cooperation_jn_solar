import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig, type Plugin } from 'vite'
import importMetaEnv from '@import-meta-env/unplugin'
import vue from '@vitejs/plugin-vue'
import rollupPluginStripPragma from 'rollup-plugin-strip-pragma'
import { determineHostFromArgv } from './build/determineHost.js'

type stripPragmas = (options: { pragmas: string[] }) => Plugin

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let transformMode: 'compile-time' | 'runtime' = 'compile-time'
  if (command === 'build') {
    transformMode = 'runtime'
  }

  const base: UserConfig = {
    plugins: [
      vue(),
      importMetaEnv.vite({
        env: '.env',
        example: '.env.example',
        transformMode: transformMode,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      dedupe: ['vue'],
    },
    assetsInclude: ['**/*.glb'],
  }

  if (command === 'build') {
    base.build = {
      rollupOptions: {
        plugins: [
          (rollupPluginStripPragma as stripPragmas)({
            pragmas: ['debug'],
          }),
        ],
      },
    }
  }

  // Heavily inspired from https://github.com/virtualcitySYSTEMS/map-ui/blob/main/vite.config.js
  const dev = command === 'serve'
  const https = false
  const port = dev ? 5173 : 8080
  const fullHost = determineHostFromArgv(port, https)
  if (dev) {
    base.server = {
      proxy: {
        '/node_modules/@vcmap-cesium/engine/Build/Assets': {
          target: fullHost,
          rewrite: (path) => path.replace(/Build/, 'Source'),
        },
      },
    }
  }

  return base
})
