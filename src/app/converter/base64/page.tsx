import { Base64Decoder } from "@/components/converter/base64/base64-decoder";
import { Base64Encoder } from "@/components/converter/base64/base64-encoder";
import { TabbedConverter } from "@/components/converter/tabbed-converter";
import { DashboardTableOfContents } from "@/components/toc";

export default function Base64Page() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Base64 Converter
        </h1>
        <TabbedConverter
          items={[
            { name: "Base64 Encoder", element: <Base64Encoder /> },
            { name: "Base64 Decoder", element: <Base64Decoder /> },
          ]}
        ></TabbedConverter>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents
            toc={{
              items: [
                { title: "Base64 Encoder", url: "#base64-encoder" },
                { title: "Base64 Decoder", url: "#base64-decoder" },
              ],
            }}
          />
        </div>
      </div>
    </main>
  );
}
