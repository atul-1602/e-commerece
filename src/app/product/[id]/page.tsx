"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { Rating } from "@/components/ui/rating";
import { colors } from "@/design-system/ui-logic/color";
import useMedia from "@/design-system/ui-logic/hooks/useMedia";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { useParams } from "next/navigation"; // Use useRouter for better handling of dynamic routes

const ProductPage = () => {
  const { id } = useParams();
  const { getImageUrl } = useMedia();
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
    ];    

  const product = products.find((product) => product.id == id);

  if (!id) return <Text>Product not found</Text>;

  return (
    <Flex p={4} justifyContent="center" gap={8} minHeight="100vh">
      <Flex borderRadius="xl" width="30%">
        <Image
          src={getImageUrl(product?.image)}
          alt={product?.name}
          width="100%"
          height={600}
          borderRadius="xl"
        />
      </Flex>
      <Flex flexDir="column" p={4} width="30%" gap={4}>
        <Text fontWeight={700} fontSize="xl">
          {product?.name}
        </Text>
        <Rating
          colorPalette="yellow"
          readOnly
          size="lg"
          defaultValue={product?.rating}
        />
        <Text fontSize="lg">{product?.brand}</Text>
        <Text>Descripton</Text>
        <Box bgColor={cardBg?.navbarBg} p={4} borderRadius="xl" mt={4}>
          <Text fontWeight={700} fontSize="xl">
            Price: {product?.price}
          </Text>
          <Text fontSize="xl">Status: Unavailable</Text>
        </Box>
        <Flex justifyContent="space-around" mt={5}>
          <Button>Buy Now</Button>
          <Button>Add to cart</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductPage;
