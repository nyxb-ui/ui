'use client'

import { ChevronRight } from 'lucide-react'
import { Link } from 'next-view-transitions'
import AnimatedShinyText from '~/registry/default/ui/animated-shiny-text'
import WordPullUp from '~/registry/default/ui/word-pull-up'
import '~/styles/mdx.css'

export default function SidebarCTA() {
   return (
      <Link
         href="https://nyxb.gives"
         target="_blank"
         rel="noreferrer"
         className="group my-20 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-primary p-4 text-center text-lg font-medium leading-tight text-white"
      >
         <WordPullUp words="Enjoying my work?" className="text-4xl" />
         <AnimatedShinyText className="group inline-flex items-center justify-center whitespace-pre via-white/80 text-white dark:text-white">
            ☕ Buy me a coffee
            <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
         </AnimatedShinyText>

         <video
            autoPlay
            loop
            playsInline
            muted
            src="/videos/buy-me-coffee.mp4"
            className="w-full overflow-hidden rounded-xl shadow-2xl"
         />
      </Link>
   )
}
