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
      },
      [
        /^flex(-col)?-(center|start|end|left|right|normal|between|around|evenly|stretch)-(normal|stretch|center|start|end|baseline)$/,
        ([, col, p1, p2]) => `flex ${col ? 'flex-col' : ''} justify-${p1} items-${p2}`,
      ],
      {
        'flex-center': 'flex items-center justify-center',
        'flex-col-center': 'flex flex-col items-center justify-center',
        'btn': 'inline-block px-4 py-2 space-nowrap break-keep rounded-md cursor-pointer',
        'btn-xs': 'btn text-xs px-1 py-0.5',
        'btn-sm': 'btn text-sm px-2 py-1',
        'btn-lg': 'btn text-lg px-6 py-3',
        'btn-xl': 'btn text-xl px-8 py-4',
        'btn-pill': 'btn rounded-full',
        'btn-text': 'btn bg-transparent b-transparent',
      },
    ],
  }
}
