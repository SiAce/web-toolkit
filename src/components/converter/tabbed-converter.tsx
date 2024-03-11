import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Converter } from "./converter";

export interface TabbedConverterProps {
  items: {
    name: string
    convertFunc: (s: string) => string;
  }[]
}

export function TabbedConverter({ items }: TabbedConverterProps) {
  return (
    <Tabs defaultValue={items[0].name} className="flex flex-col justify-evenly gap-7 m-7">
      <TabsList className="w-min flex self-center">
        {
          items.map((item, index) => (
            <TabsTrigger key={index} value={item.name}>{item.name}</TabsTrigger>
          ))
        }
      </TabsList>
      {
        items.map((item, index) => (
          <TabsContent key={index} value={item.name}>
            <Converter {...item}></Converter>
          </TabsContent>
        ))
      }
    </Tabs>
  )
}