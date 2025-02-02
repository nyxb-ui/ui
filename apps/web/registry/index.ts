import type { Registry } from "nyxb/registry"

import { blocks } from "~/registry/registry-blocks"
import { charts } from "~/registry/registry-charts"
import { examples } from "~/registry/registry-examples"
import { hooks } from "~/registry/registry-hooks"
import { internal } from "~/registry/registry-internal"
import { lib } from "~/registry/registry-lib"
import { themes } from "~/registry/registry-themes"
import { ui } from "~/registry/registry-ui"

export const registry = {
   name: "nyxb/ui",
   homepage: "https://nyxbui.design",
   items: [
      ...ui,
      ...blocks,
      ...charts,
      ...lib,
      ...hooks,
      ...themes,

      // Internal use only.
      ...internal,
      ...examples,
   ],
} satisfies Registry
