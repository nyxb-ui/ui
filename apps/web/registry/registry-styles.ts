export const styles = [
   {
      name: 'miami',
      label: 'Miami',
   },
   {
      name: 'default',
      label: 'Default',
   },
] as const

export type Style = (typeof styles)[number]
