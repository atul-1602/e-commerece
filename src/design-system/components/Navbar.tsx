'use client'
import React, { useEffect } from 'react';
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import NavbarDrawer from "../components/NavbarDrawer";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "../ui-logic/color";
import DropDownMenu from "../../design-system/components/DropDownMenu";
import { useRouter } from "next/navigation";
import useMedia from '../ui-logic/hooks/useMedia';
import Image from 'next/image';
import getUser from "../components/getUser"
const Navbar = () => {
  const { getIconUrl } = useMedia();
  const { colorMode, toggleColorMode } = useColorMode();
  const currentColors = colors[colorMode as "light" | "dark"];
  const router = useRouter();
  const { user } = getUser()

  const handleLogOut=()=>{
    localStorage.removeItem('token');
    router.push("/")
  }
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
        {user === null ? (
          <>
            <Button
              variant="outline"
              fontWeight={700}
              _hover={{ backgroundColor: currentColors?.hover }}
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </Button>
            <Button
              variant="outline"
              fontWeight={700}
              _hover={{ backgroundColor: currentColors?.hover }}
              onClick={() => router.push("/login")}
            >
              Log In
            </Button>
          </>
        ) : (
          <>
            <Avatar name={user} onClick={() => router.push(`/profile/${user}`)} />
            <Button
              variant="outline"
              fontWeight={700}
              _hover={{ backgroundColor: currentColors?.hover }}
              onClick={handleLogOut}
            >
              Log out
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
