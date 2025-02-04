import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"
import { Separator } from "~/components/ui/separator"
import { ny } from "~/lib/utils"
import AnimatedGradientText from "~/registry/default/ui/animated-gradient-text"

interface SuperAnnouncementProps {
   href: string
   text: string
}

export const SuperAnnouncement: FC<SuperAnnouncementProps> = ({
   href,
   text,
}) => {
   return (
      <Link href={href} className="relative inline-flex items-center">
         <AnimatedGradientText>
            <div
               className={ny(
                  `animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
                  `p-px ![mask-composite:subtract]`,
               )}
            />
            🎉
            <Separator className="mx-2 h-4" orientation="vertical" />
            <span
               className={ny(
                  `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  `inline`,
               )}
            >
               {text}
            </span>
            <ChevronRight className="ml-1 size-4 text-gray-500" />
         </AnimatedGradientText>
      </Link>
   )
}
