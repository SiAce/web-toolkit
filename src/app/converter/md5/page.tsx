import ConverterPage from "@/components/converter/converter-page";
import { MD5HashConverter } from "@/components/converter/md5/md5-hash";

export default function MD5Page() {
  return (
    <ConverterPage pageName={"MD5 Hash"} converterConfigs={[
      {
        name: "MD5 Hash",
        url: "#md5-hash",
        element: <MD5HashConverter/>
      }
    ]} />
  );
}