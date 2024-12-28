
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { HamburgerIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
const NavbarDrawer = () => {
    return (
        <DrawerRoot>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <HamburgerIcon h={6} w={6} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Shop Categories</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Text>Handbags</Text>
                    <Text>Pants</Text>
                    <Text>Shirts</Text>
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}
export default NavbarDrawer
