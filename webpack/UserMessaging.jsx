import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Button, Flex, Input, Textarea, VStack } from "@chakra-ui/react";

function UserMessaging() {
  
    const [message, setMessage] = useState("");
    const [sentMessage, setSentMessage] = useState("");

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    }

    const handleSendMessage = async () => {
        //Set up sending to socket
        setSentMessage(message);
        try {
          const response = await fetch(`/new/message/${userId}/send`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
          });
          const data = await response.json();
          setMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Flex
      justify="flex-end"
      align="flex-start"
      paddingTop="20px"
      minH="100vh"
      w="50vw"
      bg="blue.100"
    >
      <VStack spacing={4} w={["100%", "80%", "70%"]} mx="auto" alignItems="flex-start">
      <Textarea backgroundColor="white" color="black" value={sentMessage} w="100%" h="75vh" />
        <Flex w="100%" alignItems="center">
          <Input backgroundColor="white" color="black" placeholder="Type your message here" value={message} onChange={handleMessageChange} flex="1" />
          <Button colorScheme="blue" onClick={handleSendMessage} ml="2">Send</Button>
        </Flex>
      </VStack>
    </Flex>
  );
}
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
      <UserMessaging />
  </ChakraProvider>
);
