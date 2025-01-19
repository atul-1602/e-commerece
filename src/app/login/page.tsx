"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "@/design-system/ui-logic/color";
import useLogin from "../../design-system/ui-logic/hooks/useLogIn"
import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { colorMode } = useColorMode();
  const borderColor = colors[colorMode as "light" | "dark"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { error, fetchData } = useLogin({ username, password });
  
  const handleLogIn = () => {
    fetchData();
    router.push("/");
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
        <Heading mb={6}>Log In</Heading>

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
        <Button onClick={handleLogIn} colorScheme="teal">
          Log In
        </Button>

        {error && <Text color="red.500" mt={4}>{error.message}</Text>}
      </Flex>
    </Flex>
  );
};

export default Login;
