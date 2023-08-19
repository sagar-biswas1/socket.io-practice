import {
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = () => {
    console.log("hello");
  };
  return (
    <VStack spacing="5px" color="black">
      
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;