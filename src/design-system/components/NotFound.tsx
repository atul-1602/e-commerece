'use client'
import { Button, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useMedia from "../ui-logic/hooks/useMedia";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const { getImageUrl } = useMedia();
  const router = useRouter()
  
  return (
    <Container minH="100dvh" display= "flex" justifyContent="center" alignItems="center" height="auto">
      <Flex flexDir="column">
        <Image src={getImageUrl("not-found.svg")} alt="not found" height={400} width={400}/>
        <Button width="auto" onClick={()=> router.push("/")}>Back to Home Page</Button>
      </Flex>
    </Container>
  );
};

export default NotFoundPage;
