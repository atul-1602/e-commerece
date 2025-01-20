import RecentOrders from "@/design-system/components/RecentOrders";
import { Tabs } from "@chakra-ui/react"
import { BsCartCheckFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

interface TabType{
    tab1: string,
    tab2:string,
    recentOrders: React.ReactNode,
    allOrders: React.ReactNode
}
const OrderHistory = ({tab1, tab2, recentOrders, allOrders} : TabType) => {
  return (
    <Tabs.Root defaultValue="members" variant="plain">
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="members">
        <MdShoppingCart />
          {tab1}
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
        <BsCartCheckFill />
          {tab2}
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members">{recentOrders}</Tabs.Content>
      <Tabs.Content value="projects">{allOrders}</Tabs.Content>
    </Tabs.Root>
  )
}

export default OrderHistory