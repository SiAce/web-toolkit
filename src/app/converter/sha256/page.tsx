import ConverterPage from "@/components/converter/converter-page";
import { SHA256HashConverter } from "@/components/converter/sha256/sha256-hash";

export default function SHA256Page() {
  return (
    <ConverterPage pageName={"SHA256 Hash"} converterConfigs={[
      {
        name: "SHA256 Hash",
        url: "#sha256-hash",
        element: <SHA256HashConverter/>
      }
    ]} />
  );
}