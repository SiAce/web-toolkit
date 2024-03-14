import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Converter } from "./converter";

export interface TabbedConverterProps {
  page: string
  converters: {
    name: string
  }[]
}

export function TabbedConverter({ page, converters }: TabbedConverterProps) {
  return (
    <Tabs defaultValue={converters[0].name} className="flex flex-col justify-evenly gap-7 m-7">
      <TabsList className="w-min flex self-center">
        {
          converters.map((converter, index) => (
            <TabsTrigger key={index} value={converter.name}>{converter.name}</TabsTrigger>
          ))
        }
      </TabsList>
      {
        converters.map((converter, index) => (
          <TabsContent key={index} value={converter.name}>
            <Converter page={page} converterName={converter.name}></Converter>
          </TabsContent>
        ))
      }
    </Tabs>
  )
}