"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { Rating } from "@/components/ui/rating";
import { colors } from "@/design-system/ui-logic/color";
import useProducts from "@/design-system/ui-logic/hooks/getProducts";
import useMedia from "@/design-system/ui-logic/hooks/useMedia";
import { Box, Text, Image, Flex, Button, Spinner } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const { getImageUrl } = useMedia();
  const { colorMode } = useColorMode();
  const cardBg = colors[colorMode as "light" | "dark"];
  const { products, loading, error } = useProducts();

  // Handle loading state
  if (loading) {
    return <Spinner size="xl" />;
  }

  // Handle error state
  if (error) {
    return <Text color="red.500">Error loading products: {error.message}</Text>;
  }

  const product = products?.find((product) => product.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Flex p={4} justifyContent="center" gap={8} minHeight="100vh">
      <Flex borderRadius="xl" width="30%">
        <Image
          src={getImageUrl(product?.image)} 
          alt={product.name}
          width="100%"
          height={600}
          borderRadius="xl"
        />
      </Flex>
      <Flex flexDir="column" p={4} width="30%" gap={4}>
        <Text fontWeight={700} fontSize="xl">
          {product.name}
        </Text>
        <Rating
          colorPalette="yellow"
          readOnly
          size="lg"
          defaultValue={product?.rating}
        />
        <Text fontSize="lg">{product?.brand}</Text>
        <Text>Description</Text>
        <Box bgColor={cardBg?.navbarBg} p={4} borderRadius="xl" mt={4}>
          <Text fontWeight={700} fontSize="xl">
            Price: {product.price}
          </Text>
          <Text fontSize="xl">Status: {product?.available ? 'Available' : 'Unavailable'}</Text>
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
