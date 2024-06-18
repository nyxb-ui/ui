import { blocks } from '~/registry/blocks'
import { examples } from '~/registry/examples'
import type { Registry } from '~/registry/schema'
import { ui } from '~/registry/ui'
import { special } from '~/registry/special'

export const registry: Registry = [...ui, ...special, ...examples, ...blocks]
