"use client"

import { useRef, useState } from "react"

import {
   MultiSelect,
   MultiSelectContent,
   MultiSelectEmpty,
   MultiSelectList,
   type MultiSelectOption,
   type MultiSelectOptionGroup,
   MultiSelectSearch,
   MultiSelectTrigger,
   MultiSelectValue,
   renderMultiSelectOptions,
} from "~/registry/default/ui/multi-select"

const ALL_ITEMS = [
   { value: "react", label: "React", group: "React" },
   { value: "next", label: "Next.js", group: "React" },
   { value: "remix", label: "Remix", group: "React" },
   { value: "vue", label: "Vue", group: "Vue" },
   { value: "nuxt", label: "Nuxt.js", group: "Vue" },
   { value: "angular", label: "Angular", group: "Others" },
   { value: "svelte", label: "Svelte", group: "Others" },
]

function group(
   options: Array<(typeof ALL_ITEMS)[number]>,
): MultiSelectOptionGroup[] {
   return options.reduce((acc, item) => {
      const group = acc.find((g) => g.heading === item.group)
      if (group) group.children.push(item)
      else acc.push({ heading: item.group, children: [item] })

      return acc
   }, [] as MultiSelectOptionGroup[])
}

async function search(keyword?: string) {
   if (!keyword) return group(ALL_ITEMS)
   await new Promise((resolve) => setTimeout(resolve, 500))
   const lowerKeyword = keyword.toLowerCase()
   const filtered = ALL_ITEMS.filter((item) =>
      item.label.toLowerCase().includes(lowerKeyword),
   )
   return group(filtered)
}

export default function MultiSelectControllableSearchDemo() {
   const [loading, setLoading] = useState(false)
   const [options, setOptions] = useState<MultiSelectOption[]>(() =>
      group(ALL_ITEMS),
   )

   const indexRef = useRef(0)

   const handleSearch = async (keyword?: string) => {
      const index = ++indexRef.current
      setLoading(true)
      const newOptions = await search(keyword)
      if (indexRef.current === index) {
         setOptions(newOptions)
         setLoading(false)
      }
   }

   return (
      <MultiSelect onSearch={handleSearch}>
         <MultiSelectTrigger className="w-96">
            <MultiSelectValue placeholder="Select stack" />
         </MultiSelectTrigger>
         <MultiSelectContent>
            <MultiSelectSearch />
            <MultiSelectList>
               {loading ? null : renderMultiSelectOptions(options)}
               <MultiSelectEmpty>
                  {loading ? "Loading..." : "No results found"}
               </MultiSelectEmpty>
            </MultiSelectList>
         </MultiSelectContent>
      </MultiSelect>
   )
}
