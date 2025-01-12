"use client";
import { Text, Flex, Heading, Container } from "@chakra-ui/react";
import CartItem from "../../design-system/components/CartItem";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "@/design-system/ui-logic/color";

const ProductPage = () => {
  const { colorMode } = useColorMode()
  const cardBg = colors[colorMode as "light" | "dark"]
  const products = [
    {
      id: "1",
      name: "Amazing Shirt",
      price: 50, // Converted to number
      brand: "H&M",
      image: "handbags.avif",
      rating: 3,
    },
    {
      id: "2",
      name: "Stylish Pants",
      price: 60, // Converted to number
      brand: "Zara",
      image: "pants.avif",
      rating: 4,
    },
    {
      id: "3",
      name: "Cool Jacket",
      price: 80, // Converted to number
      brand: "Nike",
      image: "shirts.avif",
      rating: 5,
    },
    {
      id: "4",
      name: "Amazing Shirt",
      price: 50, // Converted to number
      brand: "H&M",
      image: "handbags.avif",
      rating: 3,
    },
    {
      id: "5",
      name: "Stylish Pants",
      price: 60, // Converted to number
      brand: "Zara",
      image: "pants.avif",
      rating: 4,
    },
    {
      id: "6",
      name: "Cool Jacket",
      price: 80, // Converted to number
      brand: "Nike",
      image: "shirts.avif",
      rating: 5,
    },
    {
      id: "7",
      name: "Stylish Pants",
      price: 60, // Converted to number
      brand: "Zara",
      image: "pants.avif",
      rating: 4,
    },
    {
      id: "8",
      name: "Cool Jacket",
      price: 80, // Converted to number
      brand: "Nike",
      image: "shirts.avif",
      rating: 5,
    },
  ].slice(0, 4);

  return (
    <Container display="flex" flexWrap="wrap" flexDir="column" p={4} justifyContent="center"  gap={8} minHeight="100vh">
      <Heading textAlign="center">Your Cart {"{4 items}"}</Heading>
      <Flex justifyContent="space-around" w="100%" p={4} borderBottom={`2px solid ${cardBg.navbarBg}`} pb={4}>
        <Text>Items</Text>
        <Text>Price</Text>
        <Text>Quantity</Text>
        <Text>Price</Text>
      </Flex>
      {products.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </Container>
  )
}

export default ProductPage;
