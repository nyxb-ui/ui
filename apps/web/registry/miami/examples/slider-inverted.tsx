import { ny } from "~/lib/utils"
import { Slider } from "~/registry/miami/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderInverted({ className, ...props }: SliderProps) {
   return (
      <Slider
         defaultValue={[50]}
         max={100}
         step={1}
         className={ny("w-3/5", className)}
         inverted
         {...props}
      />
   )
}
