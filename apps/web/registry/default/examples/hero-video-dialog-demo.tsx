import HeroVideoDialog from "~/registry/default/ui/hero-video-dialog"

export default function HeroVideoDialogDemo() {
   return (
      <div className="relative">
         <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/oSgNzZifhEA?si=uLdYEP57m0bZEngR"
            thumbnailSrc="https://startup-nyxbui.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
         />
         <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/oSgNzZifhEA?si=uLdYEP57m0bZEngR"
            thumbnailSrc="https://startup-nyxbui.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
         />
      </div>
   )
}
