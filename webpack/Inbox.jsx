import { ChakraProvider, Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const { userId } = useParams();

  // Retrieve messages from a PostgreSQL database
  try{
    useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/inbox/${userId}`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setMessages([{
          content: "There are no messages.",
          sender_id: ' ',
          recipient_id: ' '
        }])
      }
    };
    fetchMessages();
  }, []);} catch(error){
    console.error(error);
  }
  
  if(messages.length === 0 || messages.every((message) => message.content === "There are no messages.")){
      return (
          <Box
            height="100vh"
            overflowY="scroll"
            p={4}
            backgroundColor="blue.200"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text>There are no messages.</Text>
        </Box>
      );
  }
  //Create onclick that routes to specific usermessage

  return (
      <Box
        height="100vh"
        overflowY="scroll"
        p={4}
        backgroundColor="blue.200"
        borderRadius="md"
      >
        {messages.map((message) => (
          <Flex alignItems="flex-start" flexDirection="column" justifyContent="center">
              <Button
              key={message.recipient_id}
              variant="outline"
              borderRadius="md"
              mb={2}
              w="100%"
              h="10vh"
              _hover={{ bg: "gray.200" }}
              _active={{ bg: "gray.300" }}
              onClick={() => console.log(message)}
            >
                <Text fontWeight="bold">{message.sender_id} chat with {message.recipient_id}</Text>
                <Text>{message.content}</Text>
            </Button>
          </Flex>
        ))}
      </Box>
  );
};
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
      <Inbox />
  </ChakraProvider>
);