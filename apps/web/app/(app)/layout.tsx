import { SiteBanner } from "~/components/site-banner"
import { SiteFooter } from "~/components/site-footer"
import { SiteHeader } from "~/components/site-header"
import { ThemesStyle } from "~/components/themes-styles"

interface MarketingLayoutProps {
   children: React.ReactNode
}

export default async function MarketingLayout({
   children,
}: MarketingLayoutProps) {
   return (
      <>
         <ThemesStyle />
         <SiteBanner />
         <SiteHeader />
         <main className="flex-1">{children}</main>
         <SiteFooter />
      </>
   )
}
