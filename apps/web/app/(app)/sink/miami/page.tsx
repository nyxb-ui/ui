import * as React from 'react'
import Link from 'next/link'

import { ny } from '~/lib/utils'
import AccordionDemo from '~/registry/miami/example/accordion-demo'
import AlertDialogDemo from '~/registry/miami/example/alert-dialog-demo'
import AspectRatioDemo from '~/registry/miami/example/aspect-ratio-demo'
import AvatarDemo from '~/registry/miami/example/avatar-demo'
import BadgeDemo from '~/registry/miami/example/badge-demo'
import BadgeDestructive from '~/registry/miami/example/badge-destructive'
import BadgeOutline from '~/registry/miami/example/badge-outline'
import BadgeSecondary from '~/registry/miami/example/badge-secondary'
import ButtonDemo from '~/registry/miami/example/button-demo'
import ButtonDestructive from '~/registry/miami/example/button-destructive'
import ButtonGhost from '~/registry/miami/example/button-ghost'
import ButtonLink from '~/registry/miami/example/button-link'
import ButtonLoading from '~/registry/miami/example/button-loading'
import ButtonOutline from '~/registry/miami/example/button-outline'
import ButtonSecondary from '~/registry/miami/example/button-secondary'
import ButtonWithIcon from '~/registry/miami/example/button-with-icon'
import CardDemo from '~/registry/miami/example/card-demo'
import CheckboxDemo from '~/registry/miami/example/checkbox-demo'
import CollapsibleDemo from '~/registry/miami/example/collapsible-demo'
import CommandDemo from '~/registry/miami/example/command-demo'
import ContextMenuDemo from '~/registry/miami/example/context-menu-demo'
import DatePickerDemo from '~/registry/miami/example/date-picker-demo'
import DialogDemo from '~/registry/miami/example/dialog-demo'
import DropdownMenuDemo from '~/registry/miami/example/dropdown-menu-demo'
import HoverCardDemo from '~/registry/miami/example/hover-card-demo'
import MenubarDemo from '~/registry/miami/example/menubar-demo'
import NavigationMenuDemo from '~/registry/miami/example/navigation-menu-demo'
import PopoverDemo from '~/registry/miami/example/popover-demo'
import ProgressDemo from '~/registry/miami/example/progress-demo'
import RadioGroupDemo from '~/registry/miami/example/radio-group-demo'
import ScrollAreaDemo from '~/registry/miami/example/scroll-area-demo'
import SelectDemo from '~/registry/miami/example/select-demo'
import SeparatorDemo from '~/registry/miami/example/separator-demo'
import SheetDemo from '~/registry/miami/example/sheet-demo'
import SkeletonDemo from '~/registry/miami/example/skeleton-demo'
import SliderDemo from '~/registry/miami/example/slider-demo'
import SwitchDemo from '~/registry/miami/example/switch-demo'
import TabsDemo from '~/registry/miami/example/tabs-demo'
import ToastDemo from '~/registry/miami/example/toast-demo'
import ToggleDemo from '~/registry/miami/example/toggle-demo'
import ToggleDisabled from '~/registry/miami/example/toggle-disabled'
import ToggleOutline from '~/registry/miami/example/toggle-outline'
import ToggleWithText from '~/registry/miami/example/toggle-with-text'
import TooltipDemo from '~/registry/miami/example/tooltip-demo'
import { Button } from '~/registry/miami/ui/button'

export default function KitchenSinkPage() {
   return (
      <div className="container">
         <div className="grid gap-4">
            <div className="grid grid-cols-3 items-start gap-4">
               <div className="grid gap-4">
                  <ComponentWrapper>
                     <CardDemo className="w-full" />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <SliderDemo className="w-full" />
                  </ComponentWrapper>
                  <ComponentWrapper
                     className="spa flex-col items-start space-x-0
            space-y-2"
                  >
                     <p className="text-muted-foreground text-sm">Documentation</p>
                     <p className="text-sm font-medium leading-none">
                        You can customize the theme using
                        {' '}
                        <code className="bg-muted text-foreground relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                           CSS variables
                        </code>
                        .
                        {' '}
                        <Link
                           href="#"
                           className="text-primary font-medium underline underline-offset-4"
                        >
                           Click here
                        </Link>
                        {' '}
                        to learn more.
                     </p>
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <CheckboxDemo />
                     <HoverCardDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="[&>div]:w-full">
                     <TabsDemo />
                  </ComponentWrapper>
               </div>
               <div className="grid gap-4">
                  <ComponentWrapper>
                     <MenubarDemo />
                     <AvatarDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
                     <div className="flex space-x-2">
                        <ButtonDemo />
                        <ButtonSecondary />
                        <ButtonDestructive />
                     </div>
                     <div className="flex space-x-2">
                        <ButtonOutline />
                        <ButtonLink />
                        <ButtonGhost />
                     </div>
                     <div className="flex space-x-2">
                        <ButtonWithIcon />
                        <ButtonLoading />
                     </div>
                     <div className="flex space-x-2">
                        <Button size="lg">Large</Button>
                        <Button size="sm">Small</Button>
                     </div>
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <DatePickerDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <AccordionDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="[&_ul>li:last-child]:hidden">
                     <NavigationMenuDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="justify-between">
                     <SwitchDemo />
                     <SelectDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <SeparatorDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <AspectRatioDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <PopoverDemo />
                     <ToastDemo />
                  </ComponentWrapper>
               </div>
               <div className="grid gap-4">
                  <ComponentWrapper>
                     <TooltipDemo />
                     <SheetDemo />
                     <ProgressDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <CommandDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
                     <RadioGroupDemo />
                     <ContextMenuDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <div className="flex space-x-2">
                        <DropdownMenuDemo />
                        <AlertDialogDemo />
                        <DialogDemo />
                     </div>
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <div className="flex space-x-2">
                        <BadgeDemo />
                        <BadgeSecondary />
                        <BadgeDestructive />
                        <BadgeOutline />
                     </div>
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <SkeletonDemo />
                  </ComponentWrapper>
                  <ComponentWrapper className="[&>div]:w-full">
                     <CollapsibleDemo />
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <div className="flex space-x-2">
                        <ToggleDemo />
                        <ToggleOutline />
                        <ToggleDisabled />
                        <ToggleWithText />
                     </div>
                  </ComponentWrapper>
                  <ComponentWrapper>
                     <ScrollAreaDemo />
                  </ComponentWrapper>
               </div>
            </div>
         </div>
      </div>
   )
}

function ComponentWrapper({
   className,
   children,
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={ny(
            'flex items-center justify-between space-x-4 rounded-md p-4',
            className,
         )}
      >
         {children}
      </div>
   )
}
