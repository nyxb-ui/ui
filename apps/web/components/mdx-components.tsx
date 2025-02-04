// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
"use client"

import { useMDXComponent } from "@content-collections/mdx/react"
import Image from "next/image"
import Link from "next/link"
import type * as React from "react"
import type { NpmCommands } from "types/unist"

import { Callout } from "~/components/callout"
import { CodeBlockWrapper } from "~/components/code-block-wrapper"
import { ComponentExample } from "~/components/component-example"
import { ComponentInstallation } from "~/components/component-installation"
import { ComponentPreview } from "~/components/component-preview"
import { ComponentSource } from "~/components/component-source"
import { CopyButton, CopyNpmCommandButton } from "~/components/copy-button"
import { FrameworkDocs } from "~/components/framework-docs"
import { PropsTable } from "~/components/props-table"
import RepoDownload from "~/components/repo-download"
import { SimpleComponentPreview } from "~/components/simple-component-preview"
import { StyleWrapper } from "~/components/style-wrapper"
import TechStack from "~/components/tech-stack"
import TemplatePreview from "~/components/template-preview"
import { useConfig } from "~/hooks/use-config"
import type { Event } from "~/lib/events"
import { ny } from "~/lib/utils"
import TweetCard from "~/registry/default/ui/tweet-card"
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "~/registry/miami/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "~/registry/miami/ui/alert"
import { AspectRatio } from "~/registry/miami/ui/aspect-ratio"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "~/registry/miami/ui/tabs"
import type { Style } from "~/registry/registry-styles"

const components = {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
   Alert,
   AlertTitle,
   AlertDescription,
   RepoDownload,
   TechStack,
   TemplatePreview,
   Tweet: ({ id }: { id: string }) => <TweetCard id={id} className="mx-auto" />,
   h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
         className={ny(
            "font-heading mt-2 scroll-m-20 text-4xl font-bold",
            className,
         )}
         {...props}
      />
   ),
   h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
         className={ny(
            "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
            className,
         )}
         {...props}
      />
   ),
   h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
         className={ny(
            "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
            className,
         )}
         {...props}
      />
   ),
   h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
         className={ny(
            "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
            className,
         )}
         {...props}
      />
   ),
   h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h5
         className={ny(
            "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
            className,
         )}
         {...props}
      />
   ),
   h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h6
         className={ny(
            "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
            className,
         )}
         {...props}
      />
   ),
   a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <a
         className={ny("font-medium underline underline-offset-4", className)}
         {...props}
      />
   ),
   p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
         className={ny("leading-7 [&:not(:first-child)]:mt-6", className)}
         {...props}
      />
   ),
   ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={ny("my-6 ml-6 list-disc", className)} {...props} />
   ),
   ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={ny("my-6 ml-6 list-decimal", className)} {...props} />
   ),
   li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <li className={ny("mt-2", className)} {...props} />
   ),
   blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <blockquote
         className={ny("mt-6 border-l-2 pl-6 italic", className)}
         {...props}
      />
   ),
   img: ({
      className,
      alt,
      ...props
   }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img className={ny("rounded-md", className)} alt={alt} {...props} />
   ),
   hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-4 md:my-8" {...props} />
   ),
   table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
         <table
            className={ny(
               "relative w-full overflow-hidden border-none text-sm",
               className,
            )}
            {...props}
         />
      </div>
   ),
   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
         className={ny("last:border-b-none m-0 border-b", className)}
         {...props}
      />
   ),
   th: ({
      className,
      ...props
   }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
         className={ny(
            "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
            className,
         )}
         {...props}
      />
   ),
   td: ({
      className,
      ...props
   }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
         className={ny(
            "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
            className,
         )}
         {...props}
      />
   ),
   pre: ({
      className,
      __rawString__,
      __npmCommand__,
      __yarnCommand__,
      __pnpmCommand__,
      __bunCommand__,
      __withMeta__,
      __src__,
      __event__,
      __style__,
      ...props
   }: React.HTMLAttributes<HTMLPreElement> & {
      __style__?: Style["name"]
      __rawString__?: string
      __withMeta__?: boolean
      __src__?: string
      __event__?: Event["name"]
   } & NpmCommands) => {
      return (
         <StyleWrapper styleName={__style__}>
            <pre
               className={ny(
                  "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900",
                  className,
               )}
               {...props}
            />
            {__rawString__ && !__npmCommand__ && (
               <CopyButton
                  value={__rawString__}
                  src={__src__}
                  event={__event__}
                  className={ny(
                     "absolute right-4 top-4",
                     __withMeta__ && "top-16",
                  )}
               />
            )}
            {__npmCommand__ &&
               __yarnCommand__ &&
               __pnpmCommand__ &&
               __bunCommand__ && (
                  <CopyNpmCommandButton
                     commands={{
                        __npmCommand__,
                        __yarnCommand__,
                        __pnpmCommand__,
                        __bunCommand__,
                     }}
                     className={ny(
                        "absolute right-4 top-4",
                        __withMeta__ && "top-16",
                     )}
                  />
               )}
         </StyleWrapper>
      )
   },
   code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
         className={ny(
            "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
            className,
         )}
         {...props}
      />
   ),
   Image,
   Callout,
   ComponentPreview,
   SimpleComponentPreview,
   ComponentExample,
   ComponentSource,
   AspectRatio,
   CodeBlockWrapper: ({ ...props }) => (
      <CodeBlockWrapper className="rounded-md border" {...props} />
   ),
   Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
         className={ny(
            "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
            className,
         )}
         {...props}
      />
   ),
   Steps: ({ ...props }) => (
      <div
         className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
         {...props}
      />
   ),
   Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={ny("relative mt-6 w-full", className)} {...props} />
   ),
   TabsList: ({
      className,
      ...props
   }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
         className={ny(
            "w-full justify-start rounded-none border-b bg-transparent p-0",
            className,
         )}
         {...props}
      />
   ),
   TabsTrigger: ({
      className,
      ...props
   }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
         className={ny(
            "text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none",
            className,
         )}
         {...props}
      />
   ),
   TabsContent: ({
      className,
      ...props
   }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent
         className={ny(
            "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
            className,
         )}
         {...props}
      />
   ),
   FrameworkDocs: ({
      className,
      ...props
   }: React.ComponentProps<typeof FrameworkDocs>) => (
      <FrameworkDocs className={ny(className)} {...props} />
   ),
   Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
         className={ny("font-medium underline underline-offset-4", className)}
         {...props}
      />
   ),
   LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
         className={ny(
            "bg-card text-card-foreground hover:bg-muted/50 flex w-full flex-col items-center rounded-xl border p-6 shadow transition-colors sm:p-10",
            className,
         )}
         {...props}
      />
   ),
   PropsTable,
   ComponentInstallation,
}

interface MdxProps {
   code: string
}

export function Mdx({ code }: MdxProps) {
   const [config] = useConfig()
   const Component = useMDXComponent(code, {
      style: config.style,
   })

   return (
      <article className={ny("mx-auto max-w-[120ch]")}>
         <Component components={components} />
      </article>
   )
}
