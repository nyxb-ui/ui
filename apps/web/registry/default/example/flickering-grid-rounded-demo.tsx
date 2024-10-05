import FlickeringGrid from '~/registry/default/ui/flickering-grid'

export default function FlickeringGridRoundedDemo() {
   return (
      <div className="bg-background relative size-[600px] w-full overflow-hidden rounded-lg border">
         <FlickeringGrid
            className="absolute inset-0 z-0 [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={800}
            width={800}
         />
      </div>
   )
}
