"use client";
import { Text, Flex, Heading, Container, Button } from "@chakra-ui/react";
import CartItem from "../../design-system/components/CartItem";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "@/design-system/ui-logic/color";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { colorMode } = useColorMode();
  const cardBg = colors[colorMode as "light" | "dark"];
  const router = useRouter();
  const cartProducts = [];

  return (
    <Container
      display="flex"
      flexWrap="wrap"
      flexDir="column"
      p={4}
      justifyContent="start"
      gap={8}
      minHeight="100vh"
      alignItems="center"
    >
      {cartProducts.length > 0 ? (
        <>
          <Heading textAlign="center">Your Cart ({cartProducts.length} items)</Heading>
          <Flex
            justifyContent="space-around"
            w="100%"
            p={4}
            borderBottom={`2px solid ${cardBg.navbarBg}`}
          >
            <Text>Items</Text>
            <Text>Price</Text>
            <Text>Quantity</Text>
            <Text>Total</Text>
          </Flex>
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </>
      ) : (
        <>
          <Text textAlign="center" fontSize="xl" fontWeight={700}>No items in your Cart</Text>
          <Button width="fit-content" onClick={() => router.push("/")}>Continue Shopping</Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
