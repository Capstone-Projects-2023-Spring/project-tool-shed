import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { useParams } from "react-router-dom";
import { ChakraProvider, Box, Button, Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";

function UserMessaging({messages: _messages, recipientId}) {
    const [messages, setMessages] = useState(_messages);  
	
    useEffect(() => {
	const url = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + `/websocket/inbox/${recipientId}`;
        let s = new WebSocket(url);
	s.addEventListener('message', ({data}) => {
		const msg = JSON.parse(data);
		setMessages(ms => [...ms, msg]);
	});
    }, []);

    const [content, setContent] = useState("");

    const handleMessageChange = (event) => {
      setContent(event.target.value);
    }

    const handleSendMessage = async () => {
        try {
          const {message} = await fetch(`/inbox/${recipientId}/send.json`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
          }).then(x => x.json());
	  setMessages(ms => [...ms, message]);
          setContent("");
    } catch (error) {
      console.error(error);
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleTimeString()}`;
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
      <Box
          backgroundColor="white"
          w="100%"
          h="75vh"
          overflowY="scroll"
          px={6}
          py={4}
          borderRadius={8}
          boxShadow="md"
        >
          {messages.map(({ content, createdAt, sender_id, recipient_id }, index) => {
            const recipients = Object.values({ recipient_id });
            const contents = Object.values({ content });
            const creations = Object.values({ createdAt });
            const senders = Object.values({ sender_id });

            return (
              <Flex
                key={index}
                justifyContent={recipients.toString() === recipientId ? "flex-end" : "flex-start"}
                mb={2}
                flexWrap="wrap"
              >
                <><Flex flexDirection="column">
                  <Text
                  key={index}
                  backgroundColor={recipients.toString() === recipientId ? "blue.200" : "gray.200"}
                  borderRadius={8}
                  p={3}
                  color={recipients.toString() === recipientId ? "white" : "black"}
                  mb={0}
                  maxWidth={500}
                >
                  {contents}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  {formatDate(creations)}
                </Text>
                </Flex></>
              </Flex>
            );
          })}
        </Box>
        <Flex w="100%" alignItems="center">
          <Input backgroundColor="white" color="black" placeholder="Type your message here" value={content} onChange={handleMessageChange} flex="1" />
          <Button colorScheme="blue" onClick={handleSendMessage} ml="2">Send</Button>
        </Flex>
      </VStack>
    </Flex>
  );
}


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
      <UserMessaging
      messages={window._messages}
      recipientId={window._recipientId} />
  </ChakraProvider>
);
