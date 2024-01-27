import { TabbedConverter } from "@/components/converter/tabbed-converter";

export default function Home() {
  return (
    <main>
      <div className="flex justify-evenly">
        <div className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
        </div>
        <div className="flex flex-col justify-evenly gap-10">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Base64 Converter
          </h1>
          <TabbedConverter></TabbedConverter>
        </div>
        <div className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
        </div>
      </div>
    </main>
  );
}
