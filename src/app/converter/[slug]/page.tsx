'use client'

import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";
import { converterConfig } from "@/config/converter";


export interface ClientConverterPageProps {
  params: {
    slug: string
  }
}

export default function ClientConverterPage({ params }: ClientConverterPageProps) {
  const {pageName, converters} = converterConfig.pages[params.slug]

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl font-sans">
          {pageName}
        </h1>
        <TabbedConverter
          items={converters.map(({ name, convertFunc }) => ({
            name,
            convertFunc,
          }))}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: converters.map(({ name, url }) => ({
                title: name,
                url,
              })),
            }}
          />
        </div>
      </div>
    </main>
  );
}