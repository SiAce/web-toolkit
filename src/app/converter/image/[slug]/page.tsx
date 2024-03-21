import { GeneralConverterPage } from "@/components/converter/general-converter-page";
import { getMetadataFromConverterParams, getStaticParams } from "@/lib/page-utils";
import { Metadata } from "next";



export interface ImageConverterPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: ImageConverterPageProps): Metadata {
  return getMetadataFromConverterParams("image", params.slug);
}

export function generateStaticParams(): ImageConverterPageProps['params'][] {
  return getStaticParams("image");
}


export default function ImageConverterPage({ params }: ImageConverterPageProps) {
  return <GeneralConverterPage converterGroupId="image" converterPageId={params.slug} />
}
