import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function ProfilePage() {
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <Box>
        <Heading size="xl" mb={4}>
          Profile
        </Heading>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          User profile information will be displayed here
        </Text>
      </Box>
    </Container>
  );
}
