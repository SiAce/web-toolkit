import { Base64Decoder } from "@/components/converter/base64/base64-decoder";
import { Base64Encoder } from "@/components/converter/base64/base64-encoder";
import { TabbedConverter } from "@/components/converter/tabbed-converter";

export default function Home() {
  return (
    <main className="flex flex-col justify-evenly gap-10">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Home Page
      </h1>
    </main>
  );
}
