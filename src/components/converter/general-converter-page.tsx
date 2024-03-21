import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";
import { converterConfig } from "@/config/converter";
import { ConverterGroupId } from "@/types";


export interface GeneralConverterPageProps {
  converterGroupId: ConverterGroupId;
  converterPageId: string;
}

export function GeneralConverterPage({ converterGroupId, converterPageId }: GeneralConverterPageProps) {
  const converterGroup = converterConfig.converterGroups.find(converterGroup => converterGroup.id === converterGroupId);
  const converterFC = converterGroup?.converterFC;
  const converterPage = converterGroup?.pages?.find((converterPage) => converterPage.id === converterPageId);
  const { title, subtitle, converters } = converterPage ?? {};
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl font-sans">
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <TabbedConverter
          converterPageId={converterPageId}
          converterNames={converters?.map(converter => converter.name)!}
          ConverterFC={converterFC!}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: converters?.map(({ name }) => ({
                title: name,
                url: `#${name.toLowerCase().split(' ').join('-')}`,
              })),
            }} />
        </div>
      </div>
    </main>
  );
}
