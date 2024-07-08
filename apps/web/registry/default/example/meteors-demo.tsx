import Meteors from '~/registry/default/ui/meteors'

export default function MeteorDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <Meteors number={30} />
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Meteors
         </p>
      </div>
   )
}
