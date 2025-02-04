import AvatarCircles from "~/registry/miami/ui/avatar-circles"

const avatarUrls = [
   "https://avatars.githubusercontent.com/u/98586665",
   "https://avatars.githubusercontent.com/u/20110627",
   "https://avatars.githubusercontent.com/u/106103625",
   "https://avatars.githubusercontent.com/u/59228569",
]

export default async function AvatarCirclesDemo() {
   return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
}
