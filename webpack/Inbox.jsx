import { ChakraProvider, Box, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  // Retrieve messages from a PostgreSQL database
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/inbox/:user_id");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, []);

  //Create onclick that routes to specific usermessage

  return (
    <Box
      height="100vh"
      overflowY="scroll"
      p={4}
      backgroundColor="gray.50"
      borderRadius="md"
    >
      {messages.map((message) => (
        <Button
          key={message.id}
          variant="outline"
          borderRadius="md"
          mb={2}
          w="100%"
          h="10vh"
          onClick={() => console.log(message)}
        >
          <Text fontWeight="bold">{message.username}</Text>
          <Text>{message.title}</Text>
        </Button>
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