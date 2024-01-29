import { URLDecoder } from "@/components/converter/url/url-decoder";
import { URLEncoder } from "@/components/converter/url/url-encoder";
import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";

export default function URLPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          URL Converter
        </h1>
        <TabbedConverter
          items={[
            { name: "URL Encoder", element: <URLEncoder /> },
            { name: "URL Decoder", element: <URLDecoder /> },
          ]}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: [
                { title: "URL Encoder", url: "#url-encoder" },
                { title: "URL Decoder", url: "#url-decoder" },
              ],
            }}
          />
        </div>
      </div>
    </main>
  );
}
