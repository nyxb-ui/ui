import type { Registry } from "nyxb/registry"

export const lib: Registry["items"] = [
   {
      name: "utils",
      type: "registry:lib",
      dependencies: ["clsx", "tailwind-merge"],
      files: [
         {
            path: "lib/utils.ts",
            type: "registry:lib",
         },
      ],
   },
]
