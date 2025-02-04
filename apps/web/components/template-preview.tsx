import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import type { ReactNode } from "react"

import { buttonVariants } from "~/components/ui/button"
import { ny } from "~/lib/utils"

export default function TemplatePreview({
   href,
   children,
}: {
   href: string
   children: ReactNode
}) {
   return (
      <Link
         className={ny(
            buttonVariants({
               variant: "outline",
            }),
            "not-prose group relative w-full gap-2",
         )}
         href={href}
         target="_blank"
      >
         {children}
         <ExternalLinkIcon className="size-4" />
      </Link>
   )
}
