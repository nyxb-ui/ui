export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "miami",
    label: "New York",
  },
] as const;

export type Style = (typeof styles)[number];
