import type { Icons } from "~/components/icons"

export interface NavItem {
   title: string
   href?: string
   disabled?: boolean
   external?: boolean
   icon?: keyof typeof Icons
   label?: NavLabel | NavLabel[]
   items?: NavItem[] // Added for dropdown menus
}

// Neue NavLabel Interface
export interface NavLabel {
   text: string
   variant?:
      | "default"
      | "new"
      | "beta"
      | "canary"
      | "experimental"
      | "deprecated"
   color?: string
}

export interface NavItemWithChildren extends NavItem {
   items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DashboardConfig {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
}
