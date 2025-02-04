"use server"

import { track } from "@vercel/analytics/server"
import { capitalCase } from "change-case"

import { getRegistryItem } from "~/lib/registry"
import type { Style } from "~/registry/registry-styles"

export async function editInV0({
   name,
   style,
   url,
}: {
   name: string
   style?: Style["name"]
   url: string
}) {
   style = style ?? "miami"
   try {
      const registryItem = await getRegistryItem(name, style)

      if (!registryItem) {
         return { error: "Something went wrong. Please try again later." }
      }

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3333"
      const registryUrl = `${baseUrl}/v0/styles/${style}/${name}.json`

      await track("edit_in_v0", {
         name,
         title: capitalCase(registryItem.name),
         description:
            registryItem.description ?? capitalCase(registryItem.name),
         style,
         url,
      })

      return {
         url: `https://v0.dev/chat/api/open?url=${encodeURIComponent(registryUrl)}`,
      }
   } catch (error) {
      console.error(error)
      if (error instanceof Error) {
         return { error: error.message }
      }
   }
}
