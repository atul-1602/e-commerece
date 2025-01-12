'use client'
import { useColorMode } from '@/components/ui/color-mode'
import { colors } from '@/design-system/ui-logic/color'
import useMedia from '@/design-system/ui-logic/hooks/useMedia'
import { Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Service {
  icon: string // Assuming it's a URL to an image
  title: string
  description: string
}

const WhyUs = () => {
    const { colorMode } = useColorMode();
    const { getIconUrl } = useMedia()
      const currentColors = colors[colorMode as "light" | "dark"];
  const services: Service[] = [
    { icon: getIconUrl('free-shipping.png'), title: 'Free Shipping', description: 'Order above $200' },
    { icon: getIconUrl('money-back.png'), title: 'Money Back', description: '30 days guarantee' },
    { icon: getIconUrl('secure-payments.png'), title: 'Secure Payments', description: 'Secured by google' },
    { icon: getIconUrl('call-support.png'), title: '24/7 Customer Support', description: 'Phone and Email support' },
  ]

  return (
    <Container>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {services.map((item) => {
          return (
            <GridItem
              key={item.title}
              backgroundColor={currentColors?.navbarBg}
              borderRadius={2}
              p={6}
              height={180}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={2}
            >
              <Image src={item.icon} alt={item.title} boxSize="50px" objectFit="contain" />
              <Text fontWeight={700}>{item.title}</Text>
              <Text>{item.description}</Text>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
  )
}

export default WhyUs
