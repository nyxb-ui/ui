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

      // Replace all registry imports with @/components
      if (
         "content" in registryItem &&
         typeof registryItem.content === "string"
      ) {
         registryItem.content = registryItem.content
            // First fix the ui components imports
            .replace(/~\/registry\/[^/]+\/ui\//g, "@/components/ui/")
            // Then fix any remaining registry imports
            .replace(/~\/registry\/[^/]+\/(components|hooks|lib)\//g, "@/$1/")
            // Finally catch any other registry paths
            .replace(/~\/registry\//g, "@/")
            // Fix any remaining ~/ paths
            .replace(/~\//g, "@/")
      }

      // Add registryDependencies to the JSON
      if ("registryDependencies" in registryItem) {
         registryItem.registryDependencies =
            registryItem.registryDependencies?.map(
               (dep) => `@/components/ui/${dep}`,
            )
      }

      // Prepare the registry item URL with modified content
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3333"
      const modifiedRegistryItem = {
         ...registryItem,
         files: registryItem.files?.map((file) => ({
            ...file,
            content: file.content
               ?.replace(/~\/registry\/[^/]+\/ui\//g, "@/components/ui/")
               .replace(
                  /~\/registry\/[^/]+\/(components|hooks|lib)\//g,
                  "@/$1/",
               )
               .replace(/~\/registry\//g, "@/")
               .replace(/~\//g, "@/"),
         })),
      }

      // Create temporary endpoint for modified content
      const response = await fetch(`${baseUrl}/api/v0-registry`, {
         method: "POST",
         body: JSON.stringify(modifiedRegistryItem),
      })

      const { url: tempUrl } = await response.json()

      await track("edit_in_v0", {
         name,
         title: capitalCase(registryItem.name),
         description:
            registryItem.description ?? capitalCase(registryItem.name),
         style,
         url,
      })

      // Use the simple GET endpoint as shown in the documentation
      return {
         url: `https://v0.dev/chat/api/open?url=${encodeURIComponent(tempUrl)}`,
      }
   } catch (error) {
      console.error(error)
      if (error instanceof Error) {
         return { error: error.message }
      }
   }
}
