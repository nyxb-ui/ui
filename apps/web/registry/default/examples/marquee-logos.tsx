import { ny } from "~/lib/utils"
import Marquee from "~/registry/default/ui/marquee"

const logos = [
   {
      name: "Microsoft",
      img: "https://cdn.simpleicons.org/microsoft/000/fff",
   },
   {
      name: "Apple",
      img: "https://cdn.simpleicons.org/apple/000/fff",
   },
   {
      name: "Google",
      img: "https://cdn.simpleicons.org/google/000/fff",
   },
   {
      name: "Facebook",
      img: "https://cdn.simpleicons.org/facebook/000/fff",
   },
   {
      name: "LinkedIn",
      img: "https://cdn.simpleicons.org/linkedin/000/fff",
   },
   {
      name: "Twitter",
      img: "https://cdn.simpleicons.org/twitter/000/fff",
   },
]

function Logo({ name, img }: { name: string; img: string }) {
   return (
      <div className={ny("size-12 cursor-pointer")}>
         <img src={img} alt={name} />
      </div>
   )
}

function MarqueeLogos() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border py-20 md:shadow-xl">
         <Marquee className="[--gap:3rem]">
            {logos.map((logo, idx) => (
               <Logo key={idx} {...logo} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}

export default MarqueeLogos
