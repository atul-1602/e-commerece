import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  // DrawerCloseTrigger,
  DrawerHeader,
  DrawerBody,
} from "../../components/ui/drawer" 
import { Flex, Text } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const NavbarDrawer = () => {
  return (
    <DrawerRoot placement="left">
      <DrawerTrigger asChild>
      <HamburgerIcon h={6} w={6} />
      </DrawerTrigger>
      <DrawerContent>
        {/* <DrawerCloseTrigger /> */}
        <DrawerHeader>
          <Text fontSize="xl" fontWeight="bold">
            Categories
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Flex direction="column" gap={4} p={4}>
            <Text>Handbags</Text>
            <Text>Pants</Text>
            <Text>Shirt</Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  )
}

export default NavbarDrawer
