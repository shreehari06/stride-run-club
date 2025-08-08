import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function EventsPage() {
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <Box>
        <Heading size="xl" mb={4}>
          Events
        </Heading>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          Running events will be displayed here
        </Text>
      </Box>
    </Container>
  );
}
