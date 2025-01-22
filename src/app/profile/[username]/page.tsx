"use client";
import { Container, defineStyle, Flex, Text } from "@chakra-ui/react";
// import { Avatar } from "@/components/ui/avatar";
import React from "react";
import getUser from "@/design-system/ui-logic/hooks/useGetUser";
import OrderHistory from "@/app/components/OrderHistory";
import RecentOrders from "@/design-system/components/RecentOrders";
import AllOrders from "@/design-system/components/AllOrders";
import { useParams } from "next/navigation";
import NotFoundPage from "@/design-system/components/NotFound";

const ringCss = defineStyle({
  outlineWidth: "10px",
  outlineColor: "colorPalette.500",
  outlineOffset: "8px",
  outlineStyle: "solid",
});

const Profile = () => {
  const { user } = getUser();
  const { username } = useParams()
  if(user?.username !== username ) return <NotFoundPage/>
  
  return (
    <Container minH="100vh">
      <Flex mt={8} mb={8}>
        <Flex width="20%" justifyContent="center" mr={2} p={8} alignItems="center" height={250}  border="10px solid blue" rounded="full">
          {/* <Avatar
        name="Random"
        colorPalette="blue"
        src="https://randomuser.me/api/portraits/men/42.jpg"
        css={ringCss}
        height={250}
        width={250}
      /> */}
          <Text textAlign="center" fontWeight={700} fontSize="2xl" textTransform="uppercase">{user?.username?.charAt(0)}</Text>
        </Flex>
        <Flex
          width="80%"
          flexDir="column"
          justifyContent="center"
          p={8}
          gap={8}
        >
          <Flex flexDir="column">
            <Text fontSize="2xl" fontWeight={700}>
              {user?.username?.charAt(0).toUpperCase() +
                user?.username?.slice(1)}
            </Text>
            <Text fontSize="lg" fontWeight={600}>
              {user?.email}
            </Text>
          </Flex>
          <Flex flexDir="column">
            <Text>Number of orders : 43</Text>
          </Flex>
        </Flex>
      </Flex>
      <OrderHistory
        tab1="Recent Orders"
        tab2="All Orders"
        recentOrders={<RecentOrders />}
        allOrders={<AllOrders />}
      />
    </Container>
  );
};

export default Profile;
