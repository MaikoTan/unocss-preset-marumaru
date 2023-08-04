import { Preset } from 'unocss'

import { getRules } from './_rules'

export function presetMarumaru(): Preset {
  return {
    name: 'unocss-preset-marumaru',
    rules: getRules(),
    shortcuts: {
      'flex-center': 'flex items-center justify-center',
    },
  }
}
