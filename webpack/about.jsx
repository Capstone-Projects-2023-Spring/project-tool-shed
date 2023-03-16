import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Heading, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';

function About() {
  return (
    <Box maxW="600px" mx="auto" p="4">
      <Heading as="h1" mb="4">About Us</Heading>
      <Text mb="4">
        Welcome to ShareMyToolshed.com! We are a platform dedicated to making tool-sharing more accessible, affordable, and sustainable. Our mission is to reduce waste, save money, and build stronger connections within our communities by providing a platform for users to connect and share tools.
      </Text>
      <Text mb="4">
        The ShareMyToolshed.com platform was created by a team of students as part of their capstone project. We're constantly working to improve the platform and welcome contributions from anyone who is interested in helping us achieve our mission.
      </Text>
      <Text mb="8">
        Thank you for joining us in our mission to make tool-sharing more accessible and sustainable!
      </Text>
      <UnorderedList mb="8">
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/about/faqs">FAQs</Link>
        </ListItem>
        <ListItem>
          <Link href="/about/terms_of_use">Terms of Use</Link>
        </ListItem>
        <ListItem>
          <Link href="/about/avoiding_scams">Avoiding Scams</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <About />
  </ChakraProvider>
);

