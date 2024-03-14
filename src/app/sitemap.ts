
import { converterConfig } from '@/config/converter'
import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return Object.values(converterConfig.pages).map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1
  }))
}