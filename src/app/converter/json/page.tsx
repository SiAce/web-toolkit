import { Converter } from "@/components/converter/converter";
import { JSONMinifier } from "@/components/converter/json/json-minifier";
import { JSONPrettifier } from "@/components/converter/json/json-prettifier";
import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";


export default function JSONPage() {
  const converters = [
    {
      name: "JSON Minify",
      element: <JSONMinifier/>,
      url: "#json-minify",
    },
    {
      name: "JSON Prettify",
      element: <JSONPrettifier/>,
      url: "#json-prettify",
    },
  ];

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          JSON Converter
        </h1>
        <TabbedConverter
          items={converters.map((converter) => ({
            name: converter.name,
            element: converter.element,
          }))}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: converters.map((converter) => ({
                title: converter.name,
                url: converter.url,
              })),
            }}
          />
        </div>
      </div>
    </main>
  );
}
