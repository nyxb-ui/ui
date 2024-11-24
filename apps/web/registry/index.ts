import { charts } from './registry-charts'
import { examples } from './registry-examples'
import { hooks } from './registry-hooks'
import { lib } from './registry-lib'
import { themes } from './registry-themes'
import { ui } from './registry-ui'
import type { Registry } from './schema'
import { blocks } from './registry-blocks'

export const registry: Registry = [
   ...ui,
   ...examples,
   ...blocks,
   ...charts,
   ...lib,
   ...hooks,
   ...themes,
]
