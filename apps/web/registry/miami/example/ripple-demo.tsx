import Ripple from '~/registry/miami/ui/ripple'

function RippleDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Ripple
         </p>
         <Ripple />
      </div>
   )
}

export default RippleDemo
