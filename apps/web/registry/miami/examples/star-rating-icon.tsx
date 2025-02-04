import { Heart } from "lucide-react"
import * as React from "react"
import { StarRating } from "~/registry/miami/ui/star-rating"

export default function StarRatingIcon() {
   const [value, setValue] = React.useState<number>(3)
   return <StarRating value={value} setValue={setValue} icon={Heart} />
}
