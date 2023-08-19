import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" color="black">
          {" "}
          Chat-buddy
        </Text>
      </Box>
      <Box bg="white" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
      <Tabs variant='soft-rounded' colorScheme="green" >
  <TabList mb='1em'>
    <Tab width='50%'>LOGIN</Tab>
    <Tab width='50%'>SIGN-UP</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      
   <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Home;
