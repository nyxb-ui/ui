import { cn } from '~/lib/utils'
import { Slider } from '~/registry/miami/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderTickMarksFull({ className, ...props }: SliderProps) {
   return (
      <Slider
         defaultValue={[2]}
         max={5}
         step={1}
         className={cn('w-[60%]', className)}
         showSteps="full"
         {...props}
      />
   )
}