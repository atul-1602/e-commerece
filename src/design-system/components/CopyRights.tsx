'use client'
import { useColorMode } from '@/components/ui/color-mode';
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../ui-logic/color';

const CopyRights = () => {
    const { colorMode } = useColorMode();
    const currentTheme= colors[colorMode as "light" | "dark"];
  return (
    <Flex height={50} justifyContent="center" bgColor={currentTheme?.navbarBg} alignItems="center">
      <Text fontWeight={500} fontSize='lg'>Copyright © 2024 - All rights reserved by Shop Easy</Text>
    </Flex>
  )
}

export default CopyRights
