import TextReveal from "~/registry/default/ui/text-reveal"

export default async function TextRevealDemo() {
   return (
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
         <TextReveal text="Nyxb UI will change the way you design." />
      </div>
   )
}
