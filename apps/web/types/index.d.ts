import type { Icons } from "~/components/icons"

declare global {
   interface Window {
      ApplePaySession: any
   }
}

export interface NavItem {
   title: string
   href?: string
   disabled?: boolean
   external?: boolean
   icon?: keyof typeof Icons
   label?: string
}

export interface NavItemWithChildren extends NavItem {
   items?: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DashboardConfig {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
}

export interface SubscriptionPlan {
   name: string
   description: string
   stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
   Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
      stripeCurrentPeriodEnd: number
      isPro: boolean
   }

export type UserPayments = Pick<User> & {
   payments: Payment[]
}
