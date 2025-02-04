export function fixImport(content: string) {
   const atRegex =
      /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

   const atReplacement = (
      match: string,
      path: string,
      type: string,
      component: string,
   ) => {
      if (type.endsWith("components")) {
         return `@/components/${component}`
      } else if (type.endsWith("ui")) {
         return `@/components/ui/${component}`
      } else if (type.endsWith("hooks")) {
         return `@/hooks/${component}`
      } else if (type.endsWith("lib")) {
         return `@/lib/${component}`
      }

      return match
   }

   const tildeRegex =
      /~\/(registry\/miami\/)?((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

   const tildeReplacement = (
      match: string,
      _path: string,
      type: string,
      component: string,
   ) => {
      if (type.endsWith("components")) {
         return `@/components/${component}`
      } else if (type.endsWith("ui")) {
         return `@/components/ui/${component}`
      } else if (type.endsWith("hooks")) {
         return `@/hooks/${component}`
      } else if (type.endsWith("lib")) {
         return `@/lib/${component}`
      }

      return match
   }

   const importNyRegex = /import\s*{\s*ny\s*}\s*from\s*["']([^"']+)["']/g
   const importNyReplacement = 'import { cn } from "$1"'

   const nyUsageRegex = /\bny\(/g
   const nyUsageReplacement = "cn("

   return content
      .replace(atRegex, atReplacement)
      .replace(tildeRegex, tildeReplacement)
      .replace(importNyRegex, importNyReplacement)
      .replace(nyUsageRegex, nyUsageReplacement)
}
