import { describe, expect, it } from 'vitest'

import { resolveTargetDir } from '../../../src/utils/updaters/update-files'

describe('resolveTargetDir', () => {
   it('should handle a home target without a src directory', () => {
      const targetDir = resolveTargetDir(
         {
            isSrcDir: false,
         },
         {
            resolvedPaths: {
               cwd: '/foo/bar',
            },
         },
         '~/.env',
      )
      expect(targetDir).toBe('/foo/bar/.env')
   })

   it('should handle a home target even with a src directory', () => {
      const targetDir = resolveTargetDir(
         {
            isSrcDir: true,
         },
         {
            resolvedPaths: {
               cwd: '/foo/bar',
            },
         },
         '~/.env',
      )
      expect(targetDir).toBe('/foo/bar/.env')
   })

   it('should handle a simple target', () => {
      const targetDir = resolveTargetDir(
         {
            isSrcDir: false,
         },
         {
            resolvedPaths: {
               cwd: '/foo/bar',
            },
         },
         './components/ui/button.tsx',
      )
      expect(targetDir).toBe('/foo/bar/components/ui/button.tsx')
   })

   it('should handle a simple target with src directory', () => {
      const targetDir = resolveTargetDir(
         {
            isSrcDir: true,
         },
         {
            resolvedPaths: {
               cwd: '/foo/bar',
            },
         },
         './components/ui/button.tsx',
      )
      expect(targetDir).toBe('/foo/bar/src/components/ui/button.tsx')
   })
})
