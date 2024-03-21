import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"
import { ConverterProps } from "@/components/converter/text/converter"

export type NavItem = {
  external?: string
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
    | {
      href: string
      items?: never
    }
    | {
      href?: string
      items: NavLink[]
    }
  )

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github: string
  }
}


export type ConverterGroupIdToFunc = {
  text: [string, string]
  image: [File, string]
}

export type ConverterGroupId = keyof ConverterGroupIdToFunc
type ConverterGroupUnion = UnionOfGeneric<ConverterGroupId>

export type ConverterConfig = {
  mainNav: MainNavItem[]
  converterGroups: ConverterGroupUnion[]
}

export type ConverterGroup<T extends ConverterGroupId> = {
  id: T
  title: string
  converterFC: React.FC<ConverterProps>
  pages: ConverterPage<ConverterGroupIdToFunc[T][0], ConverterGroupIdToFunc[T][1]>[]
}

export type ConverterPage<TInput, TOutput> = {
  id: string
  title: string
  subtitle?: string
  converters: ConverterComponent<TInput, TOutput>[]
}

export type ConverterComponent<TInput, TOutput> = {
  name: string;
  convertFunc: (s: TInput) => TOutput | Promise<TOutput>;
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UnionOfGeneric<TUnion extends ConverterGroupId> = { [K in TUnion]: ConverterGroup<K> }[TUnion]
