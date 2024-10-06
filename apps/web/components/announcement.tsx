import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Blocks, PieChart } from 'lucide-react'

import { Separator } from '~/registry/miami/ui/separator'

export function Announcement() {
   return (
      <Link
         href="/docs/changelog"
         className="group inline-flex items-center px-0.5 text-sm font-medium"
      >
         <PieChart className="size-4" />
         {' '}
         <Separator className="mx-2 h-4" orientation="vertical" />
         {' '}
         <span className="underline-offset-4 group-hover:underline">
            npx nyxb init
         </span>
         <ArrowRightIcon className="ml-1 size-4" />
      </Link>
   )
}
