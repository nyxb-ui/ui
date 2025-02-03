import { NotificationsForm } from "~/app/(app)/examples/forms/notifications/notifications-form"
import { Separator } from "~/registry/miami/ui/separator"

export default function SettingsNotificationsPage() {
   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-sm text-muted-foreground">
               Configure how you receive notifications.
            </p>
         </div>
         <Separator />
         <NotificationsForm />
      </div>
   )
}
