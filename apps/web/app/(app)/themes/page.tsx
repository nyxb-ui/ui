import type { Metadata } from 'next'

import 'public/registry/themes.css'
import { SuperAnnouncement } from '~/components/super-announcement'
import {
   PageActions,
   PageHeader,
   PageHeaderDescription,
   PageHeaderHeading,
} from '~/components/page-header'
import { ThemeCustomizer } from '~/components/theme-customizer'
import { ThemeWrapper } from '~/components/theme-wrapper'
import { ThemesTabs } from '~/app/(app)/themes/tabs'

export const metadata: Metadata = {
   title: 'Themes',
   description: 'Hand-picked themes that you can copy and paste into your apps.',
}

export default function ThemesPage() {
   return (
      <div className="container">
         <ThemeWrapper
            defaultTheme="zinc"
            className="relative flex flex-col items-start md:flex-row md:items-center"
         >
            <PageHeader>
               <SuperAnnouncement href="/docs/changelog" text="Introducing Lift Mode" />
               <PageHeaderHeading className="hidden md:block">
                  Add colors. Make it yours.
               </PageHeaderHeading>
               <PageHeaderHeading className="md:hidden">
                  Make it yours
               </PageHeaderHeading>
               <PageHeaderDescription>
                  Hand-picked themes that you can copy and paste into your apps.
               </PageHeaderDescription>
               <PageActions>
                  <ThemeCustomizer />
               </PageActions>
            </PageHeader>
         </ThemeWrapper>
         <ThemesTabs />
      </div>
   )
}
