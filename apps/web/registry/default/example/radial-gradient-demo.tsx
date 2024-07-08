import RadialGradient from '~/registry/default/ui/radial-gradient'

export default function RadialGradientDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Radial Gradient
         </p>
         <RadialGradient />
      </div>
   )
}
