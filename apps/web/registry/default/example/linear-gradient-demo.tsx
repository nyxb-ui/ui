import LinearGradient from '~/registry/default/ui/linear-gradient'

export default function LinearGradientDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Linear Gradient
         </p>
         <LinearGradient />
      </div>
   )
}
