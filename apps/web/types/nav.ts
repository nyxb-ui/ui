import type { Icons } from '~/components/icons'

export interface NavItem {
   title: string
   href?: string
   disabled?: boolean
   external?: boolean
   icon?: keyof typeof Icons
   label?: string
   items?: NavItem[] // Added for dropdown menus
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
