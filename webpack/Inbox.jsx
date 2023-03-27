import { ChakraProvider, Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Inbox = ({ conversations }) => {
  // Create onclick that routes to specific usermessage
  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <Box
      height="100vh"
      overflowY="scroll"
      p={4}
      backgroundColor="blue.200"
      borderRadius="md"
    >
      {conversations.map((conversation) => (
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
          key={conversation.messages.id}
        >
          <Button
            variant="outline"
            borderRadius="md"
            mb={2}
            w="100%"
            h="10vh"
            _hover={{ bg: "gray.200" }}
            _active={{ bg: "gray.300" }}
            onClick={() => handleClick(conversation.messages)}
          >
            <Text fontWeight="bold">
              Chat with {conversation.recipient_id}
            </Text>
          </Button>
        </Flex>
      ))}
    </Box>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <Inbox conversations={_conversations} />
  </ChakraProvider>
); 
