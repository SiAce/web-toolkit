import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"
import { ConverterProps } from "@/components/converter/text/converter"

type NavItem = Readonly<{
  external?: string
  title: string
  href: string
  disabled?: boolean
}>

type MainNavItem = NavItem

type SidebarNavItem = Readonly<{
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
>
type SiteConfig = Readonly<{
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github: string
  }
}>


type ConverterGroupIdToFunc = Readonly<{
  text: [string, string]
  image: [File, string]
}>

type ConverterGroupId = keyof ConverterGroupIdToFunc
type ConverterGroupUnion = UnionOfGeneric<ConverterGroupId>

type ConverterConfig = Readonly<{
  mainNav: MainNavItem[]
  converterGroups: ConverterGroupUnion[]
}>

type ConverterGroup<T extends ConverterGroupId> = Readonly<{
  id: T
  title: string
  converterFC: React.FC<ConverterProps>
  pages: ConverterPage<ConverterGroupIdToFunc[T][0], ConverterGroupIdToFunc[T][1]>[]
} >

type ConverterPage<TInput, TOutput> = Readonly<{
  id: string
  title: string
  subtitle?: string
  converters: ConverterComponent<TInput, TOutput>[]
}>

type ConverterComponent<TInput, TOutput> = Readonly<{
  name: string;
  convertFunc: (s: TInput) => TOutput | Promise<TOutput>;
}>

type MarketingConfig = {
  mainNav: MainNavItem[]
}

type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

type UnionOfGeneric<TUnion extends ConverterGroupId> = { [K in TUnion]: ConverterGroup<K> }[TUnion]
