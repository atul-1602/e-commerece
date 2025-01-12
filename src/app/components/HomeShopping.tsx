import useMedia from "@/design-system/ui-logic/hooks/useMedia";
import { Container, Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

const HomeShopping = () => {
  const { getImageUrl } = useMedia();
  return (
    <Container mt={12} mb={12}>
      <Grid
        h="600px"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="1fr 1fr"
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={2} overflow="hidden">
          <Box position="relative" className="group">
            <Image
              src={getImageUrl('shirts.avif')}
              alt="Shirts"
              objectFit="cover"
              w="100%"
              h="100%"
              transition="all 0.5s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                filter: "blur(5px)",
              }}
            />
            <Text
              position="absolute"
              bottom="55%"
              left="45%"
              fontSize="2xl"
              fontWeight="bold"
              opacity="0"
              transition="opacity 0.3s ease, transform 0.3s ease"
              _groupHover={{
                opacity: 1,
                transform: "translateY(0)",
              }}
              zIndex={1}
            >
              Shirts
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} overflow="hidden">
          <Box position="relative" className="group">
            <Image
              src={getImageUrl('pants.avif')}
              alt="Pants"
              objectFit="cover"
              w="100%"
              h="100%"
              transition="all 0.5s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                filter: "blur(5px)",
              }}
            />
            <Text
              position="absolute"
              bottom="100%"
              left="45%"
              fontSize="2xl"
              fontWeight="bold"
              opacity="1"
              // transform="translateY(100px)"
              transition="opacity 0.3s ease, transform 0.3s ease"
              _groupHover={{
                opacity: 1,
                transform: "translateY(150px)",
              }}
              zIndex={1}
            >
              Pants
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} overflow="hidden">
        <Box position="relative" className="group">
            <Image
              src={getImageUrl('handbags.avif')}
              alt="Pants"
              objectFit="cover"
              w="100%"
              h="100%"
              transition="all 0.5s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                filter: "blur(5px)",
              }}
            />
            <Text
              position="absolute"
              bottom="100%"
              left="45%"
              fontSize="2xl"
              fontWeight="bold"
              opacity="1"
              transition="opacity 0.3s ease, transform 0.3s ease"
              _groupHover={{
                opacity: 1,
                transform: "translateY(150px)",
              }}
              zIndex={1}
            >
              Handbags
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default HomeShopping;
