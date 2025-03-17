import {ComponentPropsWithoutRef, forwardRef, HTMLAttributes} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {X} from "lucide-react";
import * as React from "react";
import {ny} from "~/lib/utils";

const SlideOver = DialogPrimitive.Root;

const SlideOverTrigger = DialogPrimitive.Trigger;

const SlideOverPortal = DialogPrimitive.Portal;

const SlideOverOverlay = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={ny(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80',
      className,
    )}
    {...props}
  />
));
SlideOverOverlay.displayName = 'SlideOverOverlay';

const SlideOverContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SlideOverPortal>
    <SlideOverOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={ny(
        'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 fixed right-0 top-0 bottom-0 z-50 w-full max-w-[98%] lg:max-w-md border border-r-0 shadow-lg duration-200 sm:rounded-l-lg flex',
        className,
      )}
      {...props}
    >
      <SlideOverClose/>

      <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto">
        {children}
      </div>
    </DialogPrimitive.Content>
  </SlideOverPortal>
));
SlideOverContent.displayName = 'SlideOverContent';

const SlideOverClose = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={ny(
      'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 lg:right-[unset] lg:-left-8 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
      className,
    )}
    {...props}
  >
    <X className="size-4" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
));
SlideOverClose.displayName = 'SlideOverClose';

function SlideOverHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={ny(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  );
}
SlideOverHeader.displayName = 'SlideOverHeader';

function SlideOverFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={ny(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  )
}
SlideOverFooter.displayName = 'SlideOverFooter';

const SlideOverTitle = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={ny(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
SlideOverTitle.displayName = 'SlideOverTitle';

const SlideOverDescription = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={ny('text-muted-foreground text-sm', className)}
    {...props}
  />
));
SlideOverDescription.displayName = 'SlideOverDescription';

export {
  SlideOver,
  SlideOverTrigger,
  SlideOverPortal,
  SlideOverClose,
  SlideOverOverlay,
  SlideOverContent,
  SlideOverHeader,
  SlideOverFooter,
  SlideOverTitle,
  SlideOverDescription,
}
