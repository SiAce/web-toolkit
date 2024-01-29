import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface TabbedConverterProps {
  items: {
    name: string
    element: React.ReactElement
  }[]
}

export function TabbedConverter({items}: TabbedConverterProps) {
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
            <TabsContent key={index} value={item.name}>{item.element}</TabsContent>
          ))
        }
    </Tabs>
  )
}