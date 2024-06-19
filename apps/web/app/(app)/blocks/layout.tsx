import type { Metadata } from 'next'

import { SuperAnnouncement } from '~/components/super-announcement'
import {
   PageActions,
   PageHeader,
   PageHeaderDescription,
   PageHeaderHeading,
} from '~/components/page-header'
import { Button } from '~/registry/miami/ui/button'

export const metadata: Metadata = {
   title: 'Building Blocks.',
   description:
    'Beautifully designed. Copy and paste into your apps. Open Source.',
}

export default function BlocksLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className="container relative">
         <PageHeader className="max-w-3xl">
            <SuperAnnouncement href="/docs/changelog" text="Introducing Lift Mode" />
            <PageHeaderHeading className="text-balance">
               Building Blocks for the Web
            </PageHeaderHeading>
            <PageHeaderDescription>
               Beautifully designed. Copy and paste into your apps. Open Source.
            </PageHeaderDescription>
            <PageActions>
               <Button asChild>
                  <a href="#blocks">Browse</a>
               </Button>
               <Button asChild variant="outline">
                  <a
                     href="https://discord.gg/aBxNpG7fMP"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Request a block
                  </a>
               </Button>
            </PageActions>
         </PageHeader>
         <section id="blocks" className="grid scroll-mt-24 gap-24 lg:gap-48">
            {children}
         </section>
      </div>
   )
}
