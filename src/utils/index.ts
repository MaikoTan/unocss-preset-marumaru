import { h } from '@unocss/preset-mini/utils'

export function parseValue(value: string) {
  if (value === 'full') {
    return '9999px'
  }

  return h.bracket.cssvar.global.rem(value)
}
