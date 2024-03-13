import { converterConfig } from "@/config/converter";
import { ClientConverterPage } from "../../../components/converter/ClientConverterPage";

export interface ConverterPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(converterConfig.pages).map((slug) => { slug })
}

export default function ConverterPage({ params }: ConverterPageProps) {
  return <ClientConverterPage converterId={params.slug} />
}
