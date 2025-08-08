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
} from "@chakra-ui/react";
import { FiActivity, FiCalendar, FiUsers } from "react-icons/fi";

export function HomePage() {
  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack gap={6} align="stretch">
        {/* Welcome Header */}
        <Box textAlign="center" py={8}>
          <Heading size="xl" mb={4} color="blue.500">
            Welcome to Stride
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
            Your running community in Bengaluru
          </Text>
        </Box>

        {/* Quick Stats */}
        <HStack gap={4} justify="space-between">
          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            flex={1}
          >
            <Card.Body textAlign="center">
              <FiActivity size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                12
              </Text>
              <Text fontSize="sm" color="gray.600">
                Runs Completed
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            flex={1}
          >
            <Card.Body textAlign="center">
              <FiUsers size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                156
              </Text>
              <Text fontSize="sm" color="gray.600">
                Members
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            flex={1}
          >
            <Card.Body textAlign="center">
              <FiCalendar size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                3
              </Text>
              <Text fontSize="sm" color="gray.600">
                Upcoming
              </Text>
            </Card.Body>
          </Card.Root>
        </HStack>

        {/* Recent Activity */}
        <Box>
          <Heading size="md" mb={4}>
            Recent Activity
          </Heading>
          <VStack gap={3} align="stretch">
            <Card.Root
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            >
              <Card.Body>
                <HStack justify="space-between">
                  <VStack align="start" gap={1}>
                    <Text fontWeight="bold">Morning Run at Cubbon Park</Text>
                    <Text fontSize="sm" color="gray.600">
                      23 runners participated
                    </Text>
                  </VStack>
                  <Badge colorPalette="green">Completed</Badge>
                </HStack>
              </Card.Body>
            </Card.Root>

            <Card.Root
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            >
              <Card.Body>
                <HStack justify="space-between">
                  <VStack align="start" gap={1}>
                    <Text fontWeight="bold">Lake Hopping Adventure</Text>
                    <Text fontSize="sm" color="gray.600">
                      This Saturday 6:00 AM
                    </Text>
                  </VStack>
                  <Badge colorPalette="blue">Upcoming</Badge>
                </HStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Box>

        {/* Quick Actions */}
        <Box>
          <Heading size="md" mb={4}>
            Quick Actions
          </Heading>
          <VStack gap={3}>
            <Button colorPalette="blue" size="lg" w="100%">
              Join Next Run
            </Button>
            <Button variant="outline" size="lg" w="100%">
              View All Events
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
