import { Preset } from 'unocss'

import { getRules } from './_rules'

export function presetMarumaru(): Preset {
  return {
    name: 'unocss-preset-marumaru',
    rules: getRules(),
    preflights: [
      {
        getCSS(ctx) {
          return `
            :root {
              --un-marumaru-border-top-left-radius: 0;
              --un-marumaru-border-top-right-radius: 0;
              --un-marumaru-border-bottom-right-radius: 0;
              --un-marumaru-border-bottom-left-radius: 0;
              --un-marumaru-border-radius: var(--un-marumaru-border-top-left-radius) var(--un-marumaru-border-top-right-radius) var(--un-marumaru-border-bottom-right-radius) var(--un-marumaru-border-bottom-left-radius);
            }
          `
        },
      },
    ],
    shortcuts: [
      [/^circle-(\w+)$/, ([, v]) => `circle b-${v}`],
      [/^circle-solid-(\w+)$/, ([, v]) => `circle-solid bg-${v} text-white`],
      {
        'circle': 'b-1 b-solid rounded-full',
        'circle-solid': 'b-transparent bg-gray-500 rounded-full',
        'flex-center': 'flex items-center justify-center',
        'flex-col-center': 'flex flex-col items-center justify-center',
        'btn': 'inline-block px-4 py-2 space-nowrap rounded-md cursor-pointer',
        'btn-xs': 'btn text-xs px-1 py-0.5',
        'btn-sm': 'btn text-sm px-2 py-1',
        'btn-lg': 'btn text-lg px-6 py-3',
        'btn-xl': 'btn text-xl px-8 py-4',
        'btn-pill': 'btn rounded-full',
        'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
        'btn-info': 'btn bg-white text-black border border-gray-300 hover:bg-gray-50',
        'btn-success': 'btn bg-green-500 text-white hover:bg-green-600',
        'btn-warning': 'btn bg-yellow-500 text-white hover:bg-yellow-600',
        'btn-danger': 'btn bg-red-500 text-white hover:bg-red-600',
        'btn-link': 'btn bg-transparent text-blue-500 hover:bg-blue-50',
      },
    ],
  }
}
