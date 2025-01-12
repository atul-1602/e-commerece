"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "@/design-system/ui-logic/color";
import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const SignUp = () => {
  const { colorMode } = useColorMode();
  const borderColor = colors[colorMode as "light" | "dark"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Flex justifyContent="center" alignItems="center" minH="89vh">
      <Flex
        direction="column"
        border={`1px solid ${borderColor?.navbarBg}`}
        p={8}
        borderRadius={8}
        boxShadow="lg"
        height={400}
        width={400}
      >
        <Heading mb={6}>Sign Up</Heading>

        <Text mb={2}>Username</Text>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={4}
        />
        <Text mb={2}>Password</Text>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={6}
        />
        <Button onClick={handleSignUp} colorScheme="teal">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignUp;
