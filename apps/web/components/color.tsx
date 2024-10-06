'use client'

import { Check, Clipboard } from 'lucide-react'
import { toast } from 'sonner'

import type { Color } from '~/lib/colors'
import { trackEvent } from '~/lib/events'
import { useColors } from '~/hooks/use-colors'
import { useCopyToClipboard } from '~/hooks/use-copy-to-clipboard'
import { copyToClipboardWithMeta } from '~/components/copy-button'

export function Color({ color }: { color: Color }) {
   const { format } = useColors()
   const { isCopied, copyToClipboard } = useCopyToClipboard()

   return (
      <button
         key={color.hex}
         className="group relative flex aspect-[3/1] w-full flex-1 flex-col gap-2 text-[--text] sm:aspect-[2/3] sm:size-auto [&>svg]:absolute [&>svg]:right-4 [&>svg]:top-4 [&>svg]:size-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
         style={
            {
               '--bg': `hsl(${color.hsl})`,
               '--text': color.foreground,
            } as React.CSSProperties
         }
         onClick={() => {
            copyToClipboard(color[format])
            trackEvent({
               name: 'copy_color',
               properties: {
                  color: color.id,
                  value: color[format],
                  format,
               },
            })
            toast.success(`Copied ${color[format]} to clipboard.`)
         }}
      >
         {isCopied
            ? (
                  <Check className="group-hover:opacity-100" />
               )
            : (
                  <Clipboard className="group-hover:opacity-100" />
               )}
         <div className="w-full flex-1 rounded-md bg-[--bg] md:rounded-lg" />
         <div className="flex w-full flex-col items-center justify-center gap-1">
            <span className="text-muted-foreground group-hover:text-foreground hidden font-mono text-xs tabular-nums transition-colors lg:flex">
               {color.className}
            </span>
            <span className="text-muted-foreground group-hover:text-foreground font-mono text-xs tabular-nums transition-colors lg:hidden">
               {color.scale}
            </span>
         </div>
      </button>
   )
}
