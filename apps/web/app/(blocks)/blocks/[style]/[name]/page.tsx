import * as React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '~/config/site'
import { getAllBlockIds } from '~/lib/blocks'
import { absoluteUrl, ny } from '~/lib/utils'
import type { Style } from '~/registry/registry-styles'
import { styles } from '~/registry/registry-styles'

import '~/styles/mdx.css'
import { getRegistryComponent, getRegistryItem } from '~/lib/registry'

const getCachedRegistryItem = React.cache(
   async (name: string, style: Style['name']) => {
      return await getRegistryItem(name, style)
   },
)

export async function generateMetadata({
   params,
}: {
   params: {
      style: Style['name']
      name: string
   }
}): Promise<Metadata> {
   const { name, style } = params
   const item = await getCachedRegistryItem(name, style)

   if (!item) {
      return {}
   }

   const title = item.name
   const description = item.description

   return {
      title: `${item.name}${item.description ? ` - ${item.description}` : ''}`,
      description,
      openGraph: {
         title,
         description,
         type: 'article',
         url: absoluteUrl(`/blocks/${style}/${item.name}`),
         images: [
            {
               url: siteConfig.ogImage,
               width: 1200,
               height: 630,
               alt: siteConfig.name,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: [siteConfig.ogImage],
         creator: '@shadny',
      },
   }
}

export async function generateStaticParams() {
   const blockIds = await getAllBlockIds()
   return styles
      .map(style =>
         blockIds.map(name => ({
            style: style.name,
            name,
         })),
      )
      .flat()
}

export default async function BlockPage({
   params,
}: {
   params: {
      style: Style['name']
      name: string
   }
}) {
   const { name, style } = params
   const item = await getCachedRegistryItem(name, style)
   const Component = getRegistryComponent(name, style)

   if (!item || !Component) {
      return notFound()
   }

   return (
      <>
         <div
            className={ny(
               'themes-wrapper bg-background',
               item.meta?.containerClassName,
            )}
         >
            <Component />
         </div>
      </>
   )
}
