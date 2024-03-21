import { getMetadataFromConverterParams, getStaticParams } from "@/lib/page-utils";
import { Metadata } from "next";
import { GeneralConverterPage } from "../../../../components/converter/general-converter-page";


export interface TextConverterPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: TextConverterPageProps): Metadata {
  return getMetadataFromConverterParams("text", params.slug);
}

export function generateStaticParams() {
  return getStaticParams("text");
}

export default function TextConverterPage({ params }: TextConverterPageProps) {
  return <GeneralConverterPage converterGroupId="text" converterPageId={params.slug} />
}


