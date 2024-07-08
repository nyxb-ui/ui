import { blocks } from '~/registry/blocks'
import { examples } from '~/registry/examples'
import type { Registry } from '~/registry/schema'
import { ui } from '~/registry/ui'
import { charts } from '~/registry/charts'

export const registry: Registry = [...ui, ...examples, ...blocks, ...charts]
