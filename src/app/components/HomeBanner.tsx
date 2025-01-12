import useMedia from "@/design-system/ui-logic/hooks/useMedia";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const HomeBanner = () => {
  const { getImageUrl } = useMedia();
  return (
    <Container>
      <Flex mt={8} mb={8}>
        <Image
          src={getImageUrl("home-banner.avif")}
          alt="home-banner"
          width="100%"
          height="500px"
          objectFit="cover"
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading width="50%" fontSize="7xl" fontWeight={600} lineHeight="70px">
          Simple Unique / <br /> Simple Better
        </Heading>
        <Text width="50%" fontSize="xl" fontWeight={500}>
          Shop Easy is a gift & clothes store based in HCMC,
          <br />
          India. Est since 2019.
        </Text>
      </Flex>
    </Container>
  );
};

export default HomeBanner;
