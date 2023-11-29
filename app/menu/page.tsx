import { DayMenu } from "@/components/day-menu"
import { mockedMenus } from "../utils/mockedData"


const MenuPage = () => {
  return (
    <div>
      {mockedMenus.map((menu) => (
        <DayMenu key={menu.weekDay} {...menu} />
      ))}
    </div>
  )
}

export default MenuPage
