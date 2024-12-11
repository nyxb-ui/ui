'use client'

import * as React from 'react'
import { ny } from '~/lib/utils'

interface CrosshairConfig {
   topLeft?: boolean
   topRight?: boolean
   bottomLeft?: boolean
   bottomRight?: boolean
}

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode
   crosshairs?: CrosshairConfig
   gridLines?: boolean
   columns?: 8 | 12 | 16
   lineVariant?: 'all' | 'vertical' | 'horizontal' | 'center' | 'none'
   className?: string
}

function CrosshairIcon({ className }: { className?: string }) {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 16 16"
         fill="none"
         className={className}
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M8 1V15M1 8H15"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
         />
      </svg>
   )
}

export function GridLayout({
   children,
   crosshairs,
   gridLines = true,
   columns = 16,
   lineVariant = 'all',
   className,
   ...props
}: GridLayoutProps) {
   return (
      <div
         className={ny(
            'grid-layout',
            gridLines && 'grid-layout-lines',
            columns === 16 && 'grid-cols-grid-16',
            columns === 12 && 'grid-cols-grid-12',
            columns === 8 && 'grid-cols-grid-8',
            className,
         )}
         {...props}
      >
         {gridLines && (
            <div className="absolute inset-0 z-0">
               {/* Vertikale Linien */}
               {(lineVariant === 'all' || lineVariant === 'vertical' || lineVariant === 'center') && (
                  <div
                     className={ny(
                        'grid size-full',
                        columns === 16 && 'grid-cols-grid-16',
                        columns === 12 && 'grid-cols-grid-12',
                        columns === 8 && 'grid-cols-grid-8',
                     )}
                  >
                     {Array.from({ length: columns }).map((_, i) => {
                        if (lineVariant === 'center') {
                           // Nur die mittlere Linie anzeigen
                           const centerIndex = Math.floor((columns - 1) / 2)
                           if (i !== centerIndex)
                              return null
                        }

                        return (
                           <div
                              key={i}
                              className={ny(
                                 'border-grid-line border-r',
                                 i === 0 && 'border-l',
                              )}
                           />
                        )
                     })}
                  </div>
               )}

               {/* Horizontale Linien bleiben unverändert */}
               {(lineVariant === 'all' || lineVariant === 'horizontal') && (
                  <div className="absolute inset-0 grid grid-rows-[repeat(16,1fr)]">
                     {Array.from({ length: 17 }).map((_, i) => (
                        <div
                           key={i}
                           className={ny(
                              'border-grid-line border-t',
                              i === 16 && 'border-b',
                           )}
                        />
                     ))}
                  </div>
               )}
            </div>
         )}

         {/* Crosshairs bleiben unverändert */}
         {crosshairs?.topLeft && (
            <CrosshairIcon className="text-grid-line absolute -left-2 -top-2" />
         )}
         {crosshairs?.topRight && (
            <CrosshairIcon className="text-grid-line absolute -right-2 -top-2" />
         )}
         {crosshairs?.bottomLeft && (
            <CrosshairIcon className="text-grid-line absolute -bottom-2 -left-2" />
         )}
         {crosshairs?.bottomRight && (
            <CrosshairIcon className="text-grid-line absolute -bottom-2 -right-2" />
         )}

         <div className="relative z-10 col-span-full">{children}</div>
      </div>
   )
}

export default GridLayout
