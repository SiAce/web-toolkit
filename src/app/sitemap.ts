
import { converterConfig } from '@/config/converter'
import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return converterConfig.sidebarNav.map(
    (sidebarGroup) => sidebarGroup.items!.map(
      (sidebarItem) => ({
        url: `${siteConfig.url}${sidebarItem.href}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as "weekly",
        priority: 1
      })
    )
  ).flat()
}