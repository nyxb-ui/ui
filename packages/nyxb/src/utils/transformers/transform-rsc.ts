import { SyntaxKind } from "ts-morph"
import type { Transformer } from "~/src/utils/transformers"

const directiveRegex = /^["']use client["']$/g

export const transformRsc: Transformer = async ({ sourceFile, config }) => {
   if (config.rsc) {
      return sourceFile
   }

   // Remove "use client" from the top of the file.
   const first = sourceFile.getFirstChildByKind(SyntaxKind.ExpressionStatement)
   if (first && directiveRegex.test(first.getText())) {
      first.remove()
   }

   return sourceFile
}
