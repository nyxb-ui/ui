import HeroVideoDialog from "~/registry/miami/ui/hero-video-dialog"

export default function HeroVideoDialogDemoTopInBottomOut() {
   return (
      <div className="relative">
         <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/oSgNzZifhEA?si=uLdYEP57m0bZEngR"
            thumbnailSrc="https://startup-nyxbui.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
         />
         <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/oSgNzZifhEA?si=uLdYEP57m0bZEngR"
            thumbnailSrc="https://startup-nyxbui.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
         />
      </div>
   )
}
