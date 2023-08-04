import { Rule } from 'unocss'

export function getWhiteSpaceRule(): Rule[] {
  return [
    [/^space-(wrap|nowrap|pre|pre-line|pre-wrap)$/, ([, value]) => ({
      'white-space': value
    })],
  ]
}
