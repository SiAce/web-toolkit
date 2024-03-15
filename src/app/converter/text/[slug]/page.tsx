import { TabbedTextConverter } from "@/components/converter/text/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";
import { converterConfig } from "@/config/converter";
import { siteConfig } from "@/config/site";


export interface ConverterPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: ConverterPageProps) {
  const slug = params.slug;
  const { title } = converterConfig.textPages[slug];
  return {
    title,
    description: `${siteConfig.description}${title}`,
  }
}

export function generateStaticParams() {
  return Object.keys(converterConfig.textPages).map((slug) => { slug })
}

export default function ConverterPage({ params }: ConverterPageProps) {
  const slug = params.slug;
  const { title, subtitle, converters } = converterConfig.textPages[slug];

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl font-sans">
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <TabbedTextConverter
          page={slug}
          converters={converters.map(({ name }) => ({
            name,
          }))}
        ></TabbedTextConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: converters.map(({ name }) => ({
                title: name,
                url: `#${name.toLowerCase().split(' ').join('-')}`,
              })),
            }} />
        </div>
      </div>
    </main>
  );
}
