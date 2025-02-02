import { ny } from "~/lib/utils"
import { Slider } from "~/registry/default/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderFormatLabel({
   className,
   ...props
}: SliderProps) {
   return (
      <Slider
         defaultValue={[2]}
         max={5}
         step={1}
         className={ny("w-3/5", className)}
         formatLabel={(value) => `${value} points`}
         {...props}
      />
   )
}
