'use client'

import { FileIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

interface CodeComparisonProps {
   beforeCode: string
   afterCode: string
   language: string
   filename: string
   lightTheme: string
   darkTheme: string
}

export default function CodeComparison({
   beforeCode,
   afterCode,
   language,
   filename,
   lightTheme,
   darkTheme,
}: CodeComparisonProps) {
   const { theme, systemTheme } = useTheme()
   const [highlightedBefore, setHighlightedBefore] = useState('')
   const [highlightedAfter, setHighlightedAfter] = useState('')

   useEffect(() => {
      const currentTheme = theme === 'system' ? systemTheme : theme
      const selectedTheme = currentTheme === 'dark' ? darkTheme : lightTheme

      async function highlightCode() {
         const before = await codeToHtml(beforeCode, {
            lang: language,
            theme: selectedTheme,
         })
         const after = await codeToHtml(afterCode, {
            lang: language,
            theme: selectedTheme,
         })
         setHighlightedBefore(before)
         setHighlightedAfter(after)
      }

      highlightCode()
   }, [
      theme,
      systemTheme,
      beforeCode,
      afterCode,
      language,
      lightTheme,
      darkTheme,
   ])

   const renderCode = (code: string, highlighted: string) => {
      if (highlighted) {
         return (
            <div
               className="bg-background h-full overflow-auto font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
               dangerouslySetInnerHTML={{ __html: highlighted }}
            />
         )
      }
      else {
         return (
            <pre className="bg-background text-foreground h-full overflow-auto break-all p-4 font-mono text-xs">
               {code}
            </pre>
         )
      }
   }
   return (
      <div className="mx-auto w-full max-w-5xl">
         <div className="border-border relative w-full overflow-hidden rounded-xl border">
            <div className="md:divide-border relative grid md:grid-cols-2 md:divide-x">
               <div>
                  <div className="bg-accent text-foreground flex items-center p-2 text-sm">
                     <FileIcon className="mr-2 size-4" />
                     {filename}
                     <span className="ml-auto">before</span>
                  </div>
                  {renderCode(beforeCode, highlightedBefore)}
               </div>
               <div>
                  <div className="bg-accent text-foreground flex items-center p-2 text-sm">
                     <FileIcon className="mr-2 size-4" />
                     {filename}
                     <span className="ml-auto">after</span>
                  </div>
                  {renderCode(afterCode, highlightedAfter)}
               </div>
            </div>
            <div className="bg-accent text-foreground absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md text-xs">
               VS
            </div>
         </div>
      </div>
   )
}
