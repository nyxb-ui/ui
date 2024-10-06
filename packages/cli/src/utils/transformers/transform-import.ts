import type { Transformer } from '~/src/utils/transformers'

export const transformImport: Transformer = async ({ sourceFile, config }) => {
   const importDeclarations = sourceFile.getImportDeclarations()

   for (const importDeclaration of importDeclarations) {
      const moduleSpecifier = importDeclaration.getModuleSpecifierValue()

      // Replace ~/registry/[style] with the components alias.
      if (moduleSpecifier.startsWith('~/registry/')) {
         if (config.aliases.ui) {
            importDeclaration.setModuleSpecifier(
               moduleSpecifier.replace(/^~\/registry\/[^/]+\/ui/, config.aliases.ui),
            )
         }
         else {
            importDeclaration.setModuleSpecifier(
               moduleSpecifier.replace(
                  /^~\/registry\/[^/]+/,
                  config.aliases.components,
               ),
            )
         }
      }

      // Replace `import { ny } from "~/lib/utils"`
      if (moduleSpecifier === '~/lib/utils') {
         const namedImports = importDeclaration.getNamedImports()
         const nyImport = namedImports.find(i => i.getName() === 'ny')
         if (nyImport) {
            importDeclaration.setModuleSpecifier(
               moduleSpecifier.replace(/^~\/lib\/utils/, config.aliases.utils),
            )
         }
      }
   }

   return sourceFile
}
