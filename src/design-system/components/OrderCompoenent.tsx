import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../ui-logic/color';
import { useColorMode } from '@/components/ui/color-mode';

const OrderCompoenent = ({ orderItem } : any) => {
    const { colorMode } = useColorMode();
      const currentColors = colors[colorMode as "light" | "dark"];
    
  return (
    <Container backgroundColor={currentColors?.navbarBg} mt={8} mb={8} p={8} borderRadius="lg">
      <Flex flexDirection="row" width="100%"  justifyContent="space-between">
        <Flex flexDirection="column">
        <Text fontWeight={600}>Product name : {orderItem.name}</Text>
        <Text>Quantity : {orderItem.quantity}</Text>
        </Flex>
        <Flex flexDirection="column">
        <Text>Price : {orderItem.price}</Text>
        <Text>warranty : {orderItem.warranty_period}</Text>
        </Flex>
      </Flex>
    </Container>
  )
}

export default OrderCompoenent
