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
  SimpleGrid,
} from "@chakra-ui/react";
import { FiMapPin, FiClock, FiUsers } from "react-icons/fi";

const mockEvents = [
  {
    id: "1",
    title: "Morning Run at Cubbon Park",
    description:
      "Join us for a refreshing 5K run through the green heart of Bangalore",
    date: new Date("2024-08-10T06:00:00"),
    location: "Cubbon Park, Bangalore",
    registrations: ["user1", "user2", "user3"],
    maxParticipants: 25,
    type: "run",
  },
  {
    id: "2",
    title: "Lake Hopping Adventure",
    description: "Explore multiple lakes around Bangalore with scenic routes",
    date: new Date("2024-08-12T06:30:00"),
    location: "Ulsoor Lake, Bangalore",
    registrations: ["user1", "user4"],
    maxParticipants: 15,
    type: "lake-hopping",
  },
  {
    id: "3",
    title: "Collaboration with Decathlon",
    description: "Special running workshop with professional trainers",
    date: new Date("2024-08-15T07:00:00"),
    location: "Decathlon Store, Whitefield",
    registrations: ["user2", "user3", "user5"],
    maxParticipants: 30,
    type: "collaboration",
  },
];

export function EventsPage() {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "run":
        return "blue";
      case "lake-hopping":
        return "teal";
      case "collaboration":
        return "purple";
      default:
        return "gray";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack gap={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="xl" mb={2}>
            Events
          </Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            Discover and join upcoming runs and activities
          </Text>
        </Box>

        {/* Events Grid */}
        <SimpleGrid columns={1} gap={4}>
          {mockEvents.map((event) => (
            <Card.Root
              key={event.id}
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
              shadow="md"
            >
              <Card.Body>
                <VStack align="stretch" gap={4}>
                  {/* Event Header */}
                  <HStack justify="space-between" align="start">
                    <VStack align="start" gap={1} flex={1}>
                      <Heading size="md">{event.title}</Heading>
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.300" }}
                      >
                        {event.description}
                      </Text>
                    </VStack>
                    <Badge colorPalette={getEventTypeColor(event.type)}>
                      {event.type.replace("-", " ")}
                    </Badge>
                  </HStack>

                  {/* Event Details */}
                  <VStack align="stretch" gap={2}>
                    <HStack>
                      <FiClock />
                      <Text fontSize="sm">{formatDate(event.date)}</Text>
                    </HStack>
                    <HStack>
                      <FiMapPin />
                      <Text fontSize="sm">{event.location}</Text>
                    </HStack>
                    <HStack>
                      <FiUsers />
                      <Text fontSize="sm">
                        {event.registrations.length}/{event.maxParticipants}{" "}
                        registered
                      </Text>
                    </HStack>
                  </VStack>

                  {/* Action Button */}
                  <Button
                    colorPalette="blue"
                    size="sm"
                    disabled={
                      event.registrations.length >= event.maxParticipants
                    }
                  >
                    {event.registrations.length >= event.maxParticipants
                      ? "Full"
                      : "Register"}
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Create Event Button (for admins) */}
        <Button colorPalette="green" size="lg" w="100%" variant="outline">
          Create New Event
        </Button>
      </VStack>
    </Container>
  );
}
