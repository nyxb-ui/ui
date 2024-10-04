import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import type { BaseColor } from '~/styles/registry-base-colors'
import type { Style } from '~/styles/registry-styles'

interface Config {
   style: Style['name']
   theme: BaseColor['name']
   radius: number
}

const configAtom = atomWithStorage<Config>('config', {
   style: 'default',
   theme: 'zinc',
   radius: 0.5,
})

export function useConfig() {
   return useAtom(configAtom)
}
