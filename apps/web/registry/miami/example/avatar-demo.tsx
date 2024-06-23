import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '~/registry/miami/ui/avatar'

export default function AvatarDemo() {
   return (
      <Avatar>
         <AvatarImage src="https://github.com/nyxb.png" alt="@nyxb" />
         <AvatarFallback>NY</AvatarFallback>
      </Avatar>
   )
}
