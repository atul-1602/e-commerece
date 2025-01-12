"use client";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import NavbarDrawer from "../components/NavbarDrawer";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "../ui-logic/color";
import DropDownMenu from "../../design-system/components/DropDownMenu";
import useMedia from "../ui-logic/hooks/useMedia";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { getIconUrl } = useMedia()
  const { colorMode, toggleColorMode } = useColorMode();
  const currentColors = colors[colorMode as "light" | "dark"];
  const router = useRouter()
  return (
    <Flex
      backgroundColor={currentColors?.navbarBg}
      p={2}
      width="100%"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="auto"
        ml={4}
        gap={4}
      >
        <NavbarDrawer />
        <Heading
        cursor="pointer"
          fontSize="xl"
          onClick={() => {
            router.push("/");
          }}
        >
          Shop Easy
        </Heading>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" width="auto">
        <DropDownMenu items={["All", "Handbags", "Pants", "Shirts"]} />
        <Input
          backgroundColor={currentColors?.inputBg}
          placeholder="search"
          fontSize="lg"
        />
        <Button
          backgroundColor={currentColors?.searchBtn}
          color={currentColors?.text}
          variant="outline"
          _hover={{ backgroundColor: currentColors?.hover }}
        >
          Search
        </Button>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="auto"
        gap={2}
      >
        {colorMode === "light" ? (
          <MoonIcon
            onClick={toggleColorMode}
            aria-label="Switch to dark mode"
            height={6}
            width={6}
          />
        ) : (
          <SunIcon
            onClick={toggleColorMode}
            aria-label="Switch to light mode"
            height={6}
            width={6}
          />
        )}
        <Image
          onClick={() => router.push("/cart")}
          src={getIconUrl("cart.svg")}
          alt="your-cart"
          width={50}
          height={50}
        />
        <Button
          variant="outline"
          fontWeight={700}
          _hover={{ backgroundColor: currentColors?.hover }}
          onClick={() => router.push("/signup")}
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          fontWeight={700}
          _hover={{ backgroundColor: currentColors?.hover }}
          onClick={() => router.push("/login")}
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
