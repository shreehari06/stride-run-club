import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  Badge,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiActivity, FiCalendar, FiUsers } from "react-icons/fi";

export function HomePage() {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack spacing={6} align="stretch">
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
        <HStack spacing={4} justify="space-between">
          <Card bg={bg} borderColor={borderColor} flex={1}>
            <CardBody textAlign="center">
              <FiActivity size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                12
              </Text>
              <Text fontSize="sm" color="gray.600">
                Runs Completed
              </Text>
            </CardBody>
          </Card>

          <Card bg={bg} borderColor={borderColor} flex={1}>
            <CardBody textAlign="center">
              <FiUsers size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                156
              </Text>
              <Text fontSize="sm" color="gray.600">
                Members
              </Text>
            </CardBody>
          </Card>

          <Card bg={bg} borderColor={borderColor} flex={1}>
            <CardBody textAlign="center">
              <FiCalendar size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                3
              </Text>
              <Text fontSize="sm" color="gray.600">
                Upcoming
              </Text>
            </CardBody>
          </Card>
        </HStack>

        {/* Recent Activity */}
        <Box>
          <Heading size="md" mb={4}>
            Recent Activity
          </Heading>
          <VStack spacing={3} align="stretch">
            <Card bg={bg} borderColor={borderColor}>
              <CardBody>
                <HStack justify="space-between">
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Morning Run at Cubbon Park</Text>
                    <Text fontSize="sm" color="gray.600">
                      23 runners participated
                    </Text>
                  </VStack>
                  <Badge colorScheme="green">Completed</Badge>
                </HStack>
              </CardBody>
            </Card>

            <Card bg={bg} borderColor={borderColor}>
              <CardBody>
                <HStack justify="space-between">
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Lake Hopping Adventure</Text>
                    <Text fontSize="sm" color="gray.600">
                      This Saturday 6:00 AM
                    </Text>
                  </VStack>
                  <Badge colorScheme="blue">Upcoming</Badge>
                </HStack>
              </CardBody>
            </Card>
          </VStack>
        </Box>

        {/* Quick Actions */}
        <Box>
          <Heading size="md" mb={4}>
            Quick Actions
          </Heading>
          <VStack spacing={3}>
            <Button colorScheme="blue" size="lg" w="100%">
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
