import { Rule, Shortcut } from 'unocss'

import { parseValue } from '../utils'

export function getBorderRadiusRules(): Rule[] {
  return [
    [
      /^br-(t|b|l|r|top|bottom|left|right|tl|tr|bl|br)-(-?.+)$/,
      ([, d, v], ctx) => {
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

        const ret = Object.entries(directions).reduce((acc, [key, value]) => {
          if (directions[key]) {
            acc[`border-${key}-radius`] = value ? (v === 'full' ? '9999px' : parseValue(v, ctx)) : undefined
          }
          return acc
        }, {} as Record<string, string | undefined>)

        return ret
      },
    ],
    [
      /^br-(.+)$/,
      ([, d], ctx) => ({
        'border-radius': parseValue(d, ctx),
      }),
    ],
  ]
}

export function getBorderRadiusShortcuts(): Shortcut[] {
  return [[/^br-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|10xl)$/, ([, v]) => `rounded-${v}`]]
}
