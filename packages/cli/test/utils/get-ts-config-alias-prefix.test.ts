import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { getTsConfigAliasPrefix } from '../../src/utils/get-project-info'

describe('get ts config alias prefix', async () => {
   it.each([
      {
         name: 'next-app',
         prefix: '~',
      },
      {
         name: 'next-app-src',
         prefix: '#',
      },
      {
         name: 'next-pages',
         prefix: '~',
      },
      {
         name: 'next-pages-src',
         prefix: '~',
      },
      {
         name: 't3-app',
         prefix: '~',
      },
   ])(`getTsConfigAliasPrefix($name) -> $prefix`, async ({ name, prefix }) => {
      expect(
         await getTsConfigAliasPrefix(
            path.resolve(__dirname, `../fixtures/${name}`),
         ),
      ).toBe(prefix)
   })
})
