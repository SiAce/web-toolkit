import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConverterProps } from "./text/converter";

export interface TabbedConverterProps {
  converterPageId: string
  converterNames: string[]
  ConverterFC: React.FC<ConverterProps>
}

export function TabbedConverter({ converterPageId, converterNames, ConverterFC }: TabbedConverterProps) {
  return (
    <Tabs defaultValue={converterNames[0]} className="flex flex-col justify-evenly gap-7 m-7">
      <TabsList className="w-min flex self-center">
        {
          converterNames.map((converterName, index) => (
            <TabsTrigger key={index} value={converterName}>{converterName}</TabsTrigger>
          ))
        }
      </TabsList>
      {
        converterNames.map((converterName, index) => (
          <TabsContent key={index} value={converterName}>
            <ConverterFC converterPageId={converterPageId} converterName={converterName}></ConverterFC>
          </TabsContent>
        ))
      }
    </Tabs>
  )
}