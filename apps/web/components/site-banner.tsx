'use client'

import { ChevronRight } from 'lucide-react'
import { Link } from 'next-view-transitions'

export function SiteBanner() {
   return (
      <div className="group relative top-0 bg-emerald-600 py-3 text-white transition-all duration-300 md:py-0">
         <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
            <Link
               href="#"
               target="_blank"
               rel="noreferrer"
               className="inline-flex text-xs leading-normal md:text-sm"
            >
               🤎
               {' '}
               <span className="ml-1 font-[580] dark:font-[550]">
                  {' '}
                  Enjoying my work? Buy me a coffee to support my coding
                  adventures! ☕
               </span>
               {' '}
               <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
            </Link>
         </div>
         <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
      </div>
   )
}
