import { ColorPalette } from "~/components/color-palette"
import { getColors } from "~/lib/colors"

export default function ColorsPage() {
   const colors = getColors()

   return (
      <div className="grid gap-8">
         {colors.map((colorPalette) => (
            <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
         ))}
      </div>
   )
}
