import { ny } from '~/lib/utils'

function PageHeader({
   className,
   children,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <section
         className={ny(
            'mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10',
            className,
         )}
         {...props}
      >
         {children}
      </section>
   )
}

function PageHeaderHeading({
   className,
   ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
   return (
      <h1
         className={ny(
            'text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]',
            className,
         )}
         {...props}
      />
   )
}

function PageHeaderDescription({
   className,
   ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
   return (
      <p
         className={ny(
            'text-foreground max-w-2xl text-balance text-lg font-light',
            className,
         )}
         {...props}
      />
   )
}

function PageActions({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={ny(
            'flex w-full items-center justify-start gap-2 py-2',
            className,
         )}
         {...props}
      />
   )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
