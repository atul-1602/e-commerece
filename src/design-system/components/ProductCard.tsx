'use client'

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from "@/components/ui/rating"
import React from 'react'
import useMedia from '../ui-logic/hooks/useMedia'
import { useColorMode } from '@/components/ui/color-mode'
import { colors } from '../ui-logic/color'

const ProductCard = ({ product, onClick }) => {
  const { getImageUrl } = useMedia()
  const { colorMode } = useColorMode()
  const cardBg = colors[colorMode as "light" | "dark"]

  return (
    <Flex 
      flexDir="column" 
      borderRadius="xl" 
      overflow="hidden" 
      onClick={onClick} 
      cursor="pointer" 
    >
      <Box>
        <Image 
          src={getImageUrl(product?.image)} 
          alt={product?.name} 
          height={350} 
          width="100%" 
          objectFit="cover" 
        />
      </Box>
      <Flex flexDir="column" p={4} backgroundColor={cardBg?.navbarBg}>
        <Text fontWeight={700} fontSize="xl">{product?.name}</Text>
        <Rating colorPalette="yellow" readOnly size="lg" defaultValue={product?.rating} />
        <Text fontSize="lg">{product?.brand}</Text>
        <Text fontWeight={700} fontSize="xl">{product?.price}</Text>
      </Flex>
    </Flex>
  )
}

export default ProductCard