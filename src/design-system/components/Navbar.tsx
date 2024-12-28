"use client"
import { Flex, Heading } from '@chakra-ui/react'
import NavbarDrawer from "../components/NavbarDrawer"
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const Navbar = () => {
  return (
    <Flex backgroundColor="#e5e7e7" p={2} width="100%" justifyContent="space-between" >
      <Flex border="2px solid red" justifyContent="center" alignItems="center">
        <NavbarDrawer />
        <Heading>Shop Easy</Heading>
      </Flex>
      <Flex border="2px solid red" justifyContent="center" alignItems="center"></Flex>
      <Flex border="2px solid red" justifyContent="center" alignItems="center">
        <MoonIcon />
        <SunIcon />
        <Image
          src=""
          alt=" your-cart" />
      </Flex>
    </Flex>
  )
}

export default Navbar