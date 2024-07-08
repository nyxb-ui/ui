import { siteConfig } from '~/config/site'

export function SiteFooter() {
   return (
      <footer className="relative py-6 md:py-0">
         <div
            className="absolute top-0 h-px w-full"
            style={{
               background:
            'radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)',
            }}
         >
         </div>
         <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
               Cooked up for you by
               {' '}
               <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
               >
                  nyxb
               </a>
               .
            </p>
         </div>
      </footer>
   )
}
