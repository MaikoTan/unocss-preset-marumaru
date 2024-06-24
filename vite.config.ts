import { readFileSync } from 'node:fs'

import { marked } from 'marked'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { presetUno } from 'unocss'
import { presetMarumaru } from './src'
import { presetTypography } from 'unocss'
import unocss from 'unocss/vite'

export default defineConfig(({ mode }) => ({
  base: '',
  plugins: [
    dts(),
    unocss({
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            code: {
              color: '#8b5cf6',
            },
            'a:hover': {
              color: '#f43f5e',
              'text-decoration': 'none',
            },
            'a:visited': {
              color: '#14b8a6',
            },
          },
        }),
        presetMarumaru(),
      ],
    }),
    {
      name: 'pre-render',
      async transformIndexHtml(html) {
        const readme = readFileSync('README.md', 'utf-8')
        const parsed = await marked.parse(readme)

        return html.replace('<!-- pre-render:readme -->', parsed)
      },
    }
  ],
  build: {
    minify: mode === 'demo',
    lib:
      mode === 'demo'
        ? false
        : {
          entry: './src/index.ts',
          formats: ['es'],
          fileName: () => 'index.js',
        },
    rollupOptions: {
      external: [
        'unocss',
        /^@unocss/,
        ...(mode === 'demo' ? ['shiki'] : [])
      ],
    },
  },
  resolve: {
    alias: {
      'marked': 'https://esm.sh/marked@12',
      'shiki': 'https://esm.sh/shiki@1.9.0',
    },
  },
}))
