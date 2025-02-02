import { ny } from "~/lib/utils"
import Marquee from "~/registry/miami/ui/marquee"

const reviews = [
   {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
   },
   {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
   },
   {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
   },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
   img,
   name,
   username,
   body,
}: {
   img: string
   name: string
   username: string
   body: string
}) {
   return (
      <figure
         className={ny(
            "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <img
               className="rounded-full"
               width="32"
               height="32"
               alt=""
               src={img}
            />
            <div className="flex flex-col">
               <figcaption className="text-sm font-medium dark:text-white">
                  {name}
               </figcaption>
               <p className="text-xs font-medium dark:text-white/40">
                  {username}
               </p>
            </div>
         </div>
         <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
   )
}

function MarqueeDemoVertical() {
   return (
      <div className="bg-background relative flex h-96 flex-row items-center justify-center overflow-hidden rounded-lg border sm:px-20 md:shadow-xl">
         <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
      </div>
   )
}

export default MarqueeDemoVertical
