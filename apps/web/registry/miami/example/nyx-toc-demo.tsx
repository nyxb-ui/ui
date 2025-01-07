'use client'

import * as React from 'react'
import { NyxTOCItems } from '~/registry/miami/ui/nyx-toc'

const demoItems = [
   {
      title: 'Introduction',
      url: '#introduction',
      depth: 1,
   },
   {
      title: 'Getting Started',
      url: '#getting-started',
      depth: 2,
   },
   {
      title: 'Installation',
      url: '#installation',
      depth: 3,
   },
   {
      title: 'Basic Usage',
      url: '#basic-usage',
      depth: 3,
   },
   {
      title: 'Advanced Features',
      url: '#advanced-features',
      depth: 2,
   },
   {
      title: 'API Reference',
      url: '#api-reference',
      depth: 2,
   },
]

export default function NyxTOCDemo() {
   return (
      <div className="flex gap-10">
         <div className="flex-1">
            <NyxTOCItems
               items={demoItems}
               label="On This Page"
            />
         </div>
      </div>
   )
}
