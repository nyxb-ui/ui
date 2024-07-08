'use server'

import { codeToHtml } from 'shiki-v1'

export async function highlightCode(code: string) {
   const html = codeToHtml(code, {
      lang: 'typescript',
      theme: 'vitesse-dark',
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
