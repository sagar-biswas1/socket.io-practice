import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Highlight,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate= useNavigate()
  const submitHandler = () => {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          pic,
        }),
      };
      fetch("http://localhost:4000/api/v1/user/register", config)
        .then((res) => res.json())
        .then((data) => {
          
          if (data?.data?.token) {
            localStorage.setItem("user_data", JSON.stringify(data.data))
            setSuccessMessage("User registered");
            navigate('/chats')
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <VStack spacing="5px" color="black">
      {successMessage && (
       
       <Highlight
         query={successMessage}
         styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.200' }}
       >
       {successMessage}
       </Highlight>
    
      )}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="photo-url" isRequired>
        <FormLabel>Photo url</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setPic(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
