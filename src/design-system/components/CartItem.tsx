'use client'
import { Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useMedia from "../ui-logic/hooks/useMedia";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "../ui-logic/color";

const CartItem = ({ product }: any) => {
  const { getImageUrl } = useMedia();
  const [quantity,setQuantity] = useState(1);
  const { colorMode } = useColorMode()
  const cardBg = colors[colorMode as "light" | "dark"]
  
  return (
    <Container display="flex" justifyContent="space-between" borderBottom={`2px solid ${cardBg.navbarBg}`} pb={4}>
      <Flex borderRadius="xl" width="30%">
        <Image
          src={getImageUrl(product?.image)}
          alt={product?.name}
          width={200}
          height={200}
          borderRadius="xl"
        />
        <Text fontWeight={700} fontSize="xl">
          {product?.name}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight={700} fontSize="xl">
          Price: {product?.price}
        </Text>
      </Flex>
      <Flex>
        <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
        <Input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </Flex>
        <Flex>
        <Text fontWeight={700} fontSize="xl">
          {`$${product?.price * quantity}`}
        </Text>
      </Flex>
    </Container>
  );
};

export default CartItem;