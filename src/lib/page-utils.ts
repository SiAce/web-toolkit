import { converterConfig } from "@/config/converter";
import { siteConfig } from "@/config/site";
import { ConverterGroupId } from "@/types";


export function getMetadataFromConverterParams(converterGroupId: ConverterGroupId, converterPageId: string) {
  const pages = converterConfig.converterGroups.find(converterGroup => converterGroup.id === converterGroupId)!.pages;
  const page = pages.find(converterPage => converterPage.id === converterPageId);
  const title = page?.title;
  return {
    title,
    description: `${siteConfig.description}${title}`,
  };
}
export function getStaticParams(converterGroupId: ConverterGroupId) {
  const pages = converterConfig.converterGroups.find(converterGroup => converterGroup.id === converterGroupId)!.pages;
  return pages.map(page => ({ slug: page.id }));
}
