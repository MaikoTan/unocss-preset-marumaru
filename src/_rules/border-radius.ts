import { Rule } from 'unocss'

import { parseValue } from '../utils'

export function getBorderRadiusRules(): Rule[] {
  return [
    [
      /^br-(t|b|l|r|top|bottom|left|right|tl|tr|bl|br)-(-?.+)$/,
      ([, d, v]) => {
        const directions = {
          'top-left': false,
          'top-right': false,
          'bottom-left': false,
          'bottom-right': false,
        }

        if (d === 't' || d === 'top') {
          directions['top-left'] = true
          directions['top-right'] = true
        } else if (d === 'b' || d === 'bottom') {
          directions['bottom-left'] = true
          directions['bottom-right'] = true
        } else if (d === 'l' || d === 'left') {
          directions['top-left'] = true
          directions['bottom-left'] = true
        } else if (d === 'r' || d === 'right') {
          directions['top-right'] = true
          directions['bottom-right'] = true
        } else if (d === 'tl') {
          directions['top-left'] = true
        } else if (d === 'tr') {
          directions['top-right'] = true
        } else if (d === 'bl') {
          directions['bottom-left'] = true
        } else if (d === 'br') {
          directions['bottom-right'] = true
        }

        return Object.entries(directions).reduce(
          (acc, [key, value]) => {
            if (directions[key]) {
              acc[`--un-marumaru-border-${key}-radius`] = value ? parseValue(v) : ''
            }
            return acc
          },
          {
            '--un-marumaru-border-radius': 'var(--un-marumaru-border-top-left-radius) var(--un-marumaru-border-top-right-radius) var(--un-marumaru-border-bottom-right-radius) var(--un-marumaru-border-bottom-left-radius)',
            'border-radius': 'var(--un-marumaru-border-radius)',
          },
        )
      },
    ],
    [
      /^br-(-?(\d+)|full)$/,
      ([, d]) => ({
        '--un-marumaru-border-top-left-radius': d === 'full' ? '9999px' : parseValue(d),
        '--un-marumaru-border-top-right-radius': d === 'full' ? '9999px' : parseValue(d),
        '--un-marumaru-border-bottom-right-radius': d === 'full' ? '9999px' : parseValue(d),
        '--un-marumaru-border-bottom-left-radius': d === 'full' ? '9999px' : parseValue(d),
        '--un-marumaru-border-radius': 'var(--un-marumaru-border-top-left-radius) var(--un-marumaru-border-top-right-radius) var(--un-marumaru-border-bottom-right-radius) var(--un-marumaru-border-bottom-left-radius)',
        'border-radius': 'var(--un-marumaru-border-radius)',
      }),
    ],
  ]
}
