"use server"

import { codeToHtml } from "shiki"
import { lumosDarkTheme } from "./lumos-dark"

export async function highlightCode(code: string) {
   return await codeToHtml(code, {
      lang: "tsx",
      theme: lumosDarkTheme,
      transformers: [
         {
            pre(node) {
               node.properties.className = "overflow-x-auto py-4"
               node.properties.style = "background-color: rgb(9 9 11);" // zinc-950
            },
            code(node) {
               node.properties["data-line-numbers"] = ""
               node.properties.className = "grid min-w-full text-sm"
            },
         },
      ],
   })
}
