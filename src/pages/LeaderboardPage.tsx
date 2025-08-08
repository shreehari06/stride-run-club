import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Badge,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiTrophy, FiActivity, FiMapPin } from "react-icons/fi";

const mockLeaderboard = [
  {
    id: "1",
    name: "Rahul Kumar",
    runsCompleted: 24,
    totalDistance: 156.8,
    rank: 1,
    avatar: null,
  },
  {
    id: "2",
    name: "Priya Sharma",
    runsCompleted: 22,
    totalDistance: 142.3,
    rank: 2,
    avatar: null,
  },
  {
    id: "3",
    name: "Arjun Patel",
    runsCompleted: 20,
    totalDistance: 138.9,
    rank: 3,
    avatar: null,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    runsCompleted: 18,
    totalDistance: 125.4,
    rank: 4,
    avatar: null,
  },
  {
    id: "5",
    name: "Vikram Singh",
    runsCompleted: 16,
    totalDistance: 112.7,
    rank: 5,
    avatar: null,
  },
];

const mockStats = {
  totalRuns: 156,
  totalMembers: 89,
  totalDistance: 2847.5,
  avgDistance: 18.2,
};

export function LeaderboardPage() {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "yellow.400";
      case 2:
        return "gray.400";
      case 3:
        return "orange.400";
      default:
        return "gray.300";
    }
  };

  const getRankIcon = (rank: number) => {
    return rank <= 3 ? "🏆" : "🏃‍♂️";
  };

  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack gap={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="xl" mb={2}>
            Leaderboard
          </Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            See how you rank among fellow runners
          </Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={2} gap={4}>
          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          >
            <Card.Body textAlign="center">
              <FiActivity size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                {mockStats.totalRuns}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Total Runs
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          >
            <Card.Body textAlign="center">
              <FiMapPin size={24} color="#3182ce" />
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                {mockStats.totalDistance.toFixed(0)}km
              </Text>
              <Text fontSize="sm" color="gray.600">
                Total Distance
              </Text>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>

        {/* Top 3 Podium */}
        <Box>
          <Heading size="md" mb={4}>
            Top Performers
          </Heading>
          <HStack gap={4} justify="center" mb={6}>
            {mockLeaderboard.slice(0, 3).map((runner, index) => (
              <VStack key={runner.id} gap={2}>
                <Box position="relative">
                  <Avatar
                    size="lg"
                    name={runner.name}
                    bg={getRankColor(runner.rank)}
                  />
                  <Badge
                    position="absolute"
                    top="-2"
                    right="-2"
                    borderRadius="full"
                    fontSize="lg"
                  >
                    {getRankIcon(runner.rank)}
                  </Badge>
                </Box>
                <Text fontWeight="bold" fontSize="sm" textAlign="center">
                  {runner.name}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  {runner.totalDistance.toFixed(1)} km
                </Text>
              </VStack>
            ))}
          </HStack>
        </Box>

        {/* Full Leaderboard */}
        <Box>
          <Heading size="md" mb={4}>
            All Runners
          </Heading>
          <VStack gap={3} align="stretch">
            {mockLeaderboard.map((runner) => (
              <Card.Root
                key={runner.id}
                bg="white"
                borderColor="gray.200"
                _dark={{ bg: "gray.800", borderColor: "gray.700" }}
              >
                <Card.Body>
                  <HStack gap={4} align="center">
                    {/* Rank */}
                    <Box
                      bg={
                        runner.rank <= 3
                          ? getRankColor(runner.rank)
                          : "gray.100"
                      }
                      _dark={{
                        bg:
                          runner.rank <= 3
                            ? getRankColor(runner.rank)
                            : "gray.700",
                      }}
                      color={runner.rank <= 3 ? "white" : "black"}
                      _dark={{ color: runner.rank <= 3 ? "black" : "white" }}
                      w={10}
                      h={10}
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                    >
                      {runner.rank}
                    </Box>

                    {/* Avatar and Name */}
                    <HStack flex={1}>
                      <Avatar size="md" name={runner.name} />
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold">{runner.name}</Text>
                        <Text fontSize="sm" color="gray.600">
                          {runner.runsCompleted} runs completed
                        </Text>
                      </VStack>
                    </HStack>

                    {/* Distance */}
                    <VStack align="end" gap={0}>
                      <Text fontWeight="bold" fontSize="lg">
                        {runner.totalDistance.toFixed(1)} km
                      </Text>
                      <Text fontSize="xs" color="gray.600">
                        Total Distance
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </VStack>
        </Box>

        {/* Your Rank Card */}
        <Card.Root
          bg="blue.50"
          _dark={{ bg: "blue.900" }}
          borderColor="blue.200"
        >
          <Card.Body>
            <HStack justify="space-between">
              <VStack align="start" gap={1}>
                <Text
                  fontWeight="bold"
                  color="blue.600"
                  _dark={{ color: "blue.300" }}
                >
                  Your Current Rank
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Keep running to climb the leaderboard!
                </Text>
              </VStack>
              <VStack align="end" gap={0}>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="blue.600"
                  _dark={{ color: "blue.300" }}
                >
                  #12
                </Text>
                <Text fontSize="sm" color="gray.600">
                  45.2 km
                </Text>
              </VStack>
            </HStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Container>
  );
}
