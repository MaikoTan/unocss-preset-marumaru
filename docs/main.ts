import { createHighlighter } from 'shiki/bundle/web'

import 'uno.css'

;(async function() {
  const preBlocks = document.querySelectorAll('pre') || []
  
  createHighlighter({
    themes: [import('shiki/themes/material-theme-palenight.mjs')],
    langs: ['html', 'sh', 'js', 'ts'],
  })
  .then((hl) => {
    for (const block of preBlocks) {
      block.outerHTML = hl.codeToHtml(block.textContent ?? '', {
        lang: block.firstElementChild?.className.replace('language-', '') ?? 'text',
        theme: 'material-theme-palenight',
      })
    }
  })
})()
