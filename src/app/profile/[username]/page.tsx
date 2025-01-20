"use client";
import { Container, defineStyle, Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

import { useParams } from "next/navigation";
import React from "react";
import getUser from "@/design-system/components/getUser";
import { colors } from "@/design-system/ui-logic/color";
import { useColorMode } from "@/components/ui/color-mode";
import OrderHistory from "@/app/components/OrderHistory";
import RecentOrders from "@/design-system/components/RecentOrders";
import AllOrders from "@/design-system/components/AllOrders";

const ringCss = defineStyle({
  outlineWidth: "10px",
  outlineColor: "colorPalette.500",
  outlineOffset: "8px",
  outlineStyle: "solid",
});

const Profile = () => {
  const params = useParams();
  const { user, email } = getUser();
  const { colorMode } = useColorMode();
  const currentColors = colors[colorMode as "light" | "dark"];
  
  
  return (
    <Container>
      <Flex mt={8} mb={8}>
        <Flex width="20%" justifyContent="center" mr={2} p={8}>
        <Avatar
        name="Random"
        colorPalette="blue"
        src="https://randomuser.me/api/portraits/men/42.jpg"
        css={ringCss}
        height={250}
        width={250}
      />
        </Flex>
        <Flex width="80%" flexDir="column" justifyContent="center" p={8} gap={8}>
          <Flex flexDir="column">
          <Text fontSize="2xl" fontWeight={700}>{user.charAt(0).toUpperCase() + user.slice(1)}</Text>
          <Text fontSize="lg" fontWeight={600}>{email}</Text>
          </Flex>
          <Flex flexDir="column">
            <Text>Number of orders : 43</Text>
          </Flex>
        </Flex>
      </Flex>
      <OrderHistory tab1="Recent Orders" tab2="All Orders" recentOrders={<RecentOrders/>} allOrders={<AllOrders/>} />
    </Container>
  );
};

export default Profile;
