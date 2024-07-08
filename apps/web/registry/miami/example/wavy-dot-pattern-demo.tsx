import WavyDotPattern from '~/registry/miami/ui/wavy-dot-pattern'

export default function WavyDotPatternDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl ">
         <p className="z-10 whitespace-pre-wrap text-center text-4xl font-semibold tracking-tighter text-black dark:text-white">
            Wavy Dot Pattern
         </p>

         <WavyDotPattern
            gridWidth={30}
            gridHeight={15}
            dotWidth={8}
            dotHeight={8}
         />
      </div>
   )
}
