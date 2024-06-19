export const styles = [
   {
      name: 'default',
      label: 'Default',
   },
   {
      name: 'miami',
      label: 'Miami',
   },
] as const

export type Style = (typeof styles)[number]
