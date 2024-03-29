import { ChakraProvider, Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Inbox = ({ conversations, senderId }) => {

  //Initial Receiver - person that receives first message
  //Initial Sender - person that sent the first message
  //SenderId - current screens user ID
  const handleClick = (initialReceiver, initialSender) => {
    const chatId = senderId === initialSender ? initialReceiver : initialSender;
    console.log(chatId)
    window.location.href = `/inbox/${chatId}`;
  };
  console.log(senderId);
  return (
    <Box height="100vh" overflowY="scroll" p={4} backgroundColor="blue.200" borderRadius="md">
      {conversations.length === 0 ? (
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Text fontSize="lg">There are no conversations.</Text>
        </Flex>
      ) : (
        conversations.map((conversation) => {
          const { user, messages } = conversation;
          const intialSender = messages[0].sender_id;
          const initialReciever = messages[0].recipient_id;
          const lastMessage = messages[messages.length - 1];
          console.log(user); 

          return (
            <Flex
              key={lastMessage.id}
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="center"
            >
              <Button
                variant="outline"
                borderRadius="md"
                mb={2}
                w="100%"
                h="10vh"
                _hover={{ bg: "gray.200" }}
                _active={{ bg: "gray.300" }}
                onClick={() => handleClick(initialReciever, intialSender)}
              >
                <Text fontWeight="bold">
                  Chat with {lastMessage.sender_id === senderId ? lastMessage.recipient_id : lastMessage.sender_id}
                </Text>
                {/* <Text color="gray.500">{'\n'}{lastMessage.content}</Text> */}
              </Button>
            </Flex>
          );
        })
      )}
    </Box>
  );
};


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <Inbox conversations={_conversations}
    senderId={_senderId} />
  </ChakraProvider>
); 
