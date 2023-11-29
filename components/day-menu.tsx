/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7i0yRHOlEYs
 */
import { CardTitle, Card } from "@/components/ui/card"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconPlusTwo, IconChevronright } from "./ui/icons"

type DayMenuProps = {
  weekDay: string
  monthDay: string
  menu: {
    name: string
    type: string
  }[]
}

export const DayMenu = (props: DayMenuProps) => {
  const { weekDay, monthDay, menu } = props
  const title = `${weekDay} ${monthDay}`
  return (
    <div key="1" className="w-full py-1 md:py-2 lg:py-2">
      <div className="grid gap-4 px-4 text-center md:gap-8 md:px-6 lg:text-left xl:gap-10">
        <Card className="w-full">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between space-x-2 p-4 cursor-pointer border-b w-full">
              <CardTitle className="text-2xl">{title}</CardTitle>
              <IconChevronright className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid w-full gap-10 grid-cols-3 divide-x">
                {menu && menu.map((item) => (
                  <div key={item.name} className="flex flex-row justify-between items-center p-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge className="text-gray-500 bg-transparent text-base">{item.type}</Badge>
                    </div>
                    <Button size="icon" variant="ghost">
                      <IconPlusTwo className="h-6 w-6" />
                    </Button>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      </div>
    </div>
  )
}
