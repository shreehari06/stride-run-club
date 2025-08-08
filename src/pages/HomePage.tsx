import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <Box>
        <Heading size="xl" mb={4}>
          Home
        </Heading>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          Welcome to Stride App
        </Text>
      </Box>
    </Container>
  );
}
