import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Badge,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSend, FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const mockChats = [
  {
    eventId: "1",
    eventName: "Morning Run at Cubbon Park",
    lastMessage: "See you all at 6 AM sharp!",
    timestamp: new Date("2024-08-09T18:30:00"),
    unreadCount: 3,
  },
  {
    eventId: "2",
    eventName: "Lake Hopping Adventure",
    lastMessage: "Weather looks perfect for Saturday",
    timestamp: new Date("2024-08-09T15:20:00"),
    unreadCount: 0,
  },
  {
    eventId: "3",
    eventName: "Decathlon Collaboration",
    lastMessage: "Bring your own water bottles",
    timestamp: new Date("2024-08-09T12:15:00"),
    unreadCount: 1,
  },
];

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Implement Firebase message sending
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (selectedChat) {
    // Chat Detail View
    const chat = mockChats.find((c) => c.eventId === selectedChat);

    return (
      <Container
        maxW="container.lg"
        py={6}
        h="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Chat Header */}
        <HStack
          mb={4}
          pb={4}
          borderBottom="1px"
          borderColor="gray.200"
          _dark={{ borderColor: "gray.700" }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedChat(null)}
          >
            ← Back
          </Button>
          <VStack align="start" gap={0} flex={1}>
            <Heading size="md">{chat?.eventName}</Heading>
            <Text fontSize="sm" color="gray.600">
              5 participants
            </Text>
          </VStack>
        </HStack>

        {/* Messages Area */}
        <VStack flex={1} gap={3} align="stretch" overflowY="auto" mb={4} px={2}>
          {/* Mock messages */}
          <HStack>
            <Box
              bg="blue.500"
              color="white"
              px={3}
              py={2}
              borderRadius="lg"
              maxW="70%"
            >
              <Text fontSize="sm">
                Hey everyone! Excited for tomorrow's run
              </Text>
              <Text fontSize="xs" opacity={0.8}>
                9:30 AM
              </Text>
            </Box>
          </HStack>

          <HStack justify="flex-end">
            <Box
              bg="gray.100"
              _dark={{ bg: "gray.700" }}
              px={3}
              py={2}
              borderRadius="lg"
              maxW="70%"
            >
              <Text fontSize="sm">Same here! Weather looks perfect</Text>
              <Text fontSize="xs" opacity={0.8}>
                9:32 AM
              </Text>
            </Box>
          </HStack>

          <HStack>
            <Box
              bg="blue.500"
              color="white"
              px={3}
              py={2}
              borderRadius="lg"
              maxW="70%"
            >
              <Text fontSize="sm">See you all at 6 AM sharp! 🏃‍♂️</Text>
              <Text fontSize="xs" opacity={0.8}>
                6:30 PM
              </Text>
            </Box>
          </HStack>
        </VStack>

        {/* Message Input */}
        <InputGroup>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <InputRightElement>
            <Button
              size="sm"
              colorPalette="blue"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <FiSend />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Container>
    );
  }

  // Chat List View
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack gap={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="xl" mb={2}>
            Chat
          </Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            Connect with your running community
          </Text>
        </Box>

        {/* Chat List */}
        <VStack gap={3} align="stretch">
          {mockChats.map((chat) => (
            <Card.Root
              key={chat.eventId}
              bg="white"
              _dark={{ bg: "gray.800" }}
              borderColor="gray.200"
              _dark={{ borderColor: "gray.700" }}
              cursor="pointer"
              _hover={{ shadow: "md" }}
              onClick={() => setSelectedChat(chat.eventId)}
            >
              <Card.Body>
                <HStack justify="space-between" align="start">
                  <HStack gap={3} flex={1}>
                    <Box
                      bg="blue.100"
                      _dark={{ bg: "blue.900" }}
                      p={2}
                      borderRadius="full"
                    >
                      <FiMessageCircle color="#3182ce" />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Text fontWeight="bold" fontSize="md">
                        {chat.eventName}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.300" }}
                      >
                        {chat.lastMessage}
                      </Text>
                    </VStack>
                  </HStack>

                  <VStack gap={1} align="end">
                    <Text fontSize="xs" color="gray.500">
                      {formatTime(chat.timestamp)}
                    </Text>
                    {chat.unreadCount > 0 && (
                      <Badge colorPalette="red" borderRadius="full">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </VStack>
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </VStack>

        {/* Empty State */}
        {mockChats.length === 0 && (
          <Box textAlign="center" py={12}>
            <FiMessageCircle size={48} color="gray" />
            <Text mt={4} color="gray.600">
              No active chats
            </Text>
            <Text fontSize="sm" color="gray.500">
              Join an event to start chatting with other runners
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
