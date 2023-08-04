import { getBorderRadiusRules } from './border-radius'
import { getWhiteSpaceRule } from './white-space'

export function getRules() {
  return [
    ...getBorderRadiusRules(),
    ...getWhiteSpaceRule(),
  ]
}
