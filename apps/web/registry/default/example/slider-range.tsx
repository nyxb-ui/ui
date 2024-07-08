import { ny } from '~/lib/utils'
import { Slider } from '~/registry/default/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderRange({ className, ...props }: SliderProps) {
   return (
      <Slider
         defaultValue={[25, 75]}
         max={100}
         step={1}
         className={ny('w-3/5', className)}
         {...props}
      />
   )
}
