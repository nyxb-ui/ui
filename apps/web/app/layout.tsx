import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '~/components/theme-provider'
import { Toaster } from '~/components/ui/sonner'
import { TooltipProvider } from '~/components/ui/tooltip'
import { fontSans } from '~/lib/fonts'
import { absoluteUrl, cn, constructMetadata } from '~/lib/utils'
import '~/styles/globals.css'
import '~/styles/mdx.css'

export const metadata: Metadata = constructMetadata({
   title: 'Nyxb UI',
   description:
    'Beautiful UI components and templates to make your landing page look stunning.',
   image: absoluteUrl('/api/og'),
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <ViewTransitions>
         <html lang="en" suppressHydrationWarning>
            <head />
            <body
               className={cn(
                  'relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased',
                  fontSans.variable,
               )}
            >
               <ThemeProvider attribute="class" defaultTheme="dark">
                  <TooltipProvider>
                     {children}
                     <Toaster />
                  </TooltipProvider>
               </ThemeProvider>
            </body>
         </html>
      </ViewTransitions>
   )
}
