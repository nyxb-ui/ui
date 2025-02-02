import FlipText from "~/registry/miami/ui/flip-text"

export default async function FlipTextDemo() {
   return (
      <FlipText
         className="text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-[5rem] dark:text-white"
         word="Flip Text"
      />
   )
}
