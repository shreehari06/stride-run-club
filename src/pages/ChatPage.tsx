import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function ChatPage() {
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <Box>
        <Heading size="xl" mb={4}>
          Chat
        </Heading>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          Chat functionality will be implemented here
        </Text>
      </Box>
    </Container>
  );
}
