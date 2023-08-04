import { Rule } from 'unocss'

import { parseValue } from '../utils'

export function getBorderRadiusRules(): Rule[] {
  return [
    [/^br-(t|b|l|r|top|bottom|left|right)-(-?.+)$/, ([, d, v]) => {
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
      }

      return Object.keys(directions).reduce((acc, key) => {
        if (directions[key]) {
          acc[`border-${key}-radius`] = parseValue(v)
        }

        return acc
      }, {})
    }],
    [/^br-(-?(\d+)|full)$/, ([, d]) => ({ 'border-radius': parseValue(d) })],
  ]
}
