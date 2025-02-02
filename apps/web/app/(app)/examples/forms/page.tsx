import { ProfileForm } from "~/app/(app)/examples/forms/profile-form"
import { Separator } from "~/registry/miami/ui/separator"

export default function SettingsProfilePage() {
   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-lg font-medium">Profile</h3>
            <p className="text-sm text-muted-foreground">
               This is how others will see you on the site.
            </p>
         </div>
         <Separator />
         <ProfileForm />
      </div>
   )
}
