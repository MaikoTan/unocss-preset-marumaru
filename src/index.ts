import { Preset } from 'unocss'

import { getRules } from './_rules'

export function presetMarumaru(): Preset {
  return {
    name: 'unocss-preset-marumaru',
    rules: getRules(),
    shortcuts: [
      [/^circle-(\w+)$/, ([, v]) => `circle b-${v}`],
      [/^circle-solid-(\w+)$/, ([, v]) => `circle-solid bg-${v} text-white`],
      {
        'circle': 'b-1 b-solid rounded-full',
        'circle-solid': 'b-transparent bg-gray-500 rounded-full',
        'flex-center': 'flex items-center justify-center',
        'flex-col-center': 'flex flex-col items-center justify-center',
        'btn': 'inline-block px-4 py-2 space-nowrap rounded-md cursor-pointer',
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
