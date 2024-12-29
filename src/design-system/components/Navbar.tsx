"use client";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import NavbarDrawer from "../components/NavbarDrawer";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "./color";
import DropDownMenu from "../../design-system/components/DropDownMenu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const currentColors = colors[colorMode as "light" | "dark"];

  return (
    <Flex
      backgroundColor={currentColors.navbarBg}
      p={2}
      width="100%"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="10%"
        pl={4}
        pr={4}
      >
        <NavbarDrawer />
        <Heading fontSize="xl">Shop Easy</Heading>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" width="auto">
        <DropDownMenu items={["All", "Handbags", "Pants", "Shirts"]} />
        <Input backgroundColor={currentColors.inputBg} placeholder="search" fontSize="lg"/>
        <Button
          backgroundColor={currentColors.searchBtn}
          color={currentColors.text}
          variant="outline"
          _hover={{ backgroundColor: currentColors.hover }}
        >
          Search
        </Button>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="12%"
        pl={4}
        pr={4}
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
          src={
            colorMode === "light"
              ? "/images/light/cart.svg"
              : "/images/dark/cart.svg"
          }
          alt="your-cart"
          width={50}
          height={50}
        />
        <Button
          variant="outline"
          fontWeight={700}
          _hover={{ backgroundColor: currentColors.hover }}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
