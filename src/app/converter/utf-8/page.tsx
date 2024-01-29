import { UTF8Decoder } from "@/components/converter/utf-8/utf-8-decoder";
import { UTF8Encoder } from "@/components/converter/utf-8/utf-8-encoder";
import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";

export default function UTF8Page() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          UTF-8 Converter (Into Hex Bytes)
        </h1>
        <TabbedConverter
          items={[
            { name: "UTF8 Encoder", element: <UTF8Encoder /> },
            { name: "UTF8 Decoder", element: <UTF8Decoder /> },
          ]}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: [
                { title: "UTF8 Encoder", url: "#utf8-encoder" },
                { title: "UTF8 Decoder", url: "#utf8-decoder" },
              ],
            }}
          />
        </div>
      </div>
    </main>
  );
}
