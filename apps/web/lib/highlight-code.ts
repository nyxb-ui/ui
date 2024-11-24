'use server'

import { codeToHtml } from 'shiki'
import { lumosDarkTheme } from './lumos-dark'

export async function highlightCode(code: string) {
   const html = codeToHtml(code, {
      lang: 'jsx',
      theme: lumosDarkTheme,
      transformers: [
         {
            code(node) {
               node.properties['data-line-numbers'] = ''
            },
         },
      ],
   })

   return html
}
