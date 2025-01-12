'use client'

import ProductCard from "@/design-system/components/ProductCard";
import { Container, Grid, Text, Spinner, Center, Box } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import useProducts from "@/design-system/ui-logic/hooks/getProducts";

const LatestProducts = () => {
  const router = useRouter();
  const { products, loading, error } = useProducts();

  const productPage = (product: { id: string }) => {
    router.push(`/product/${product.id}`);
  };

  const topProducts = useMemo(() => {
    return products?.slice(0, 8) || [];
  }, [products]);

  if (loading) {
    return (
      <Center mt={12}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt={12}>
        <Box>
          <Text fontSize="lg" color="red.500">Failed to load products. Please try again later.</Text>
        </Box>
      </Center>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Center mt={12}>
        <Text fontSize="lg" color="gray.500">No products available at the moment.</Text>
      </Center>
    );
  }

  return (
    <Container mt={12} mb={12}>
      <Text fontSize="4xl" fontWeight={700}>Top Products</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {topProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => productPage(product)} 
          />
        ))}
      </Grid>
    </Container>
  );
};

export default LatestProducts;
