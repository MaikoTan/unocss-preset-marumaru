import { h } from '@unocss/preset-mini/utils'

import type { Theme } from '@unocss/preset-mini/theme'
import type { RuleContext } from 'unocss'

export function parseValue(value: string, { theme }: RuleContext<Theme>) {
  if (value === 'full') {
    return '100%'
  }

  return theme.lineWidth?.[value || 'DEFAULT'] ?? h.bracket.cssvar.global.auto.fraction.rem(value)
}
