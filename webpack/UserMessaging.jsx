import React, { useState, useEffect } from "react";
import renderComponent from './util/renderComponent';
import { Box, Button, Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";

function formatDate(dateString) {
	const date = new Date(dateString);
	return `${date.toLocaleTimeString()}`;
}

const WEBSOCKET_URL = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + `/websocket/inbox`;

function UserMessaging({messages: _messages, recipientId, listingId, authUser}) {
	const [messages, setMessages] = useState(_messages);
	const [text, setText] = useState("");
	const [useListingId, setUseListingId] = useState(!!listingId);
	
	useEffect(() => {
		const s = new WebSocket(WEBSOCKET_URL);
		s.addEventListener('message', ({data}) => {
			setMessages(ms => [...ms, JSON.parse(data)]);
			// TODO: scroll to bottom
		});
	}, []);

	if (authUser.id === recipientId) {
		return "it's me";
	}

	const handleMessageChange = e => setText(e.target.value);

	const handleSendMessage = async () => {
		const {message} = await fetch(`/inbox/${recipientId}/send.json`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(useListingId ? { listingId, content: text } : {content: text}),
		}).then(x => x.json());
		setUseListingId(false);
		setMessages(ms => [...ms, message]);
		setText("");
	}

	return (
		<Flex justify="flex-end" align="flex-start" paddingTop="20px" minH="100vh" w="50vw" bg="blue.100">
			<VStack spacing={4} w={["100%", "80%", "70%"]} mx="auto" alignItems="flex-start">
			<Box backgroundColor="white" w="100%" h="75vh" overflowY="scroll" px={6} py={4} borderRadius={8} boxShadow="md">
				{messages.map(({ content, createdAt, sender_id, recipient_id, listing }, index) => {
					const isToOther = parseInt(recipient_id) === parseInt(recipientId);
					return (
						<Flex
						key={index}
						justifyContent={isToOther ? "flex-end" : "flex-start"}
						mb={2}
						flexWrap="wrap">
							<Flex flexDirection="column">
								<Text
									backgroundColor={isToOther ? "blue.200" : "gray.200"}
									borderRadius={8}
									p={3} mb={0}
									color={isToOther ? "white" : "black"}
									maxWidth={500}>{content}</Text>
								<Text fontSize="xs" color="gray.400">
									{formatDate(createdAt)}
								</Text>
								{listing && <>
								<Text fontSize="xs" color="gray.500"><a href={`/listing/${listing.id}/details`}>Sent about {listing.tool.name}</a></Text>
								</>}
							</Flex>
						</Flex>
						);
					})}
				</Box>
				<Flex w="100%" alignItems="center">
					<Input backgroundColor="white" color="black" placeholder="Type your message here" value={text} onChange={handleMessageChange} flex="1" />
					<Button colorScheme="blue" onClick={handleSendMessage} ml="2">Send</Button>
				</Flex>
			</VStack>
		</Flex>
	);
}

renderComponent('#root', <UserMessaging {...window._UserMessagingProps} />);

