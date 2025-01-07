import type { Registry } from '~/registry/schema'

export const hooks: Registry = [
   {
      name: 'use-mobile',
      type: 'registry:hook',
      files: [
         {
            path: 'hooks/use-mobile.tsx',
            type: 'registry:hook',
         },
      ],
   },
   {
      name: 'use-toast',
      type: 'registry:hook',
      files: [
         {
            path: 'hooks/use-toast.ts',
            type: 'registry:hook',
         },
      ],
   },
   {
      name: 'use-anchor-observer',
      type: 'registry:hook',
      files: [
         {
            path: 'hooks/use-anchor-observer.ts',
            type: 'registry:hook',
         },
      ],
   },
   {
      name: 'use-on-change',
      type: 'registry:hook',
      files: [
         {
            path: 'hooks/use-on-change.ts',
            type: 'registry:hook',
         },
      ],
   },
]
