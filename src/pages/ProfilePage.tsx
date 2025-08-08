import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Button,
  Avatar,
  Badge,
  SimpleGrid,
  useColorMode,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {
  FiMoon,
  FiSun,
  FiEdit3,
  FiSettings,
  FiLogOut,
  FiActivity,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 98765 43210",
  bio: "Passionate runner from Bangalore. Love early morning runs and exploring new routes around the city.",
  joinedAt: new Date("2024-01-15"),
  profilePicture: null,
  role: "member" as const,
  stats: {
    runsCompleted: 12,
    totalDistance: 85.4,
    eventsHosted: 0,
    currentStreak: 5,
  },
};

export function ProfilePage() {
  const { colorMode, toggleColorMode } = useColorMode();

  const formatJoinDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack gap={6} align="stretch">
        {/* Header with Theme Toggle */}
        <HStack justify="space-between" align="center">
          <Heading size="xl">Profile</Heading>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>

        {/* Profile Card */}
        <Card.Root
          bg="white"
          borderColor="gray.200"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        >
          <Card.Body>
            <VStack gap={4} align="center">
              {/* Avatar and Basic Info */}
              <Box position="relative">
                <Avatar
                  size="2xl"
                  name={mockUser.name}
                  src={mockUser.profilePicture || undefined}
                />
                <IconButton
                  aria-label="Edit profile picture"
                  icon={<FiEdit3 />}
                  size="sm"
                  position="absolute"
                  bottom={0}
                  right={0}
                  borderRadius="full"
                  colorPalette="blue"
                />
              </Box>

              <VStack gap={1} textAlign="center">
                <Heading size="lg">{mockUser.name}</Heading>
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                  {mockUser.email}
                </Text>
                <Badge colorPalette="blue" variant="outline">
                  {mockUser.role}
                </Badge>
              </VStack>

              {/* Bio */}
              {mockUser.bio && (
                <Text
                  textAlign="center"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}
                  maxW="md"
                >
                  {mockUser.bio}
                </Text>
              )}

              {/* Member Since */}
              <Text fontSize="sm" color="gray.500">
                Member since {formatJoinDate(mockUser.joinedAt)}
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Stats Grid */}
        <Box>
          <Heading size="md" mb={4}>
            Your Stats
          </Heading>
          <SimpleGrid columns={2} gap={4}>
            <Card.Root
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            >
              <Card.Body textAlign="center">
                <FiActivity size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.runsCompleted}
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
            >
              <Card.Body textAlign="center">
                <FiMapPin size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.totalDistance.toFixed(1)}km
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Total Distance
                </Text>
              </Card.Body>
            </Card.Root>

            <Card.Root
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            >
              <Card.Body textAlign="center">
                <FiCalendar size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.currentStreak}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Current Streak
                </Text>
              </Card.Body>
            </Card.Root>

            <Card.Root
              bg="white"
              borderColor="gray.200"
              _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            >
              <Card.Body textAlign="center">
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.eventsHosted}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Events Hosted
                </Text>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </Box>

        {/* Contact Information */}
        <Box>
          <Heading size="md" mb={4}>
            Contact Information
          </Heading>
          <Card.Root
            bg="white"
            borderColor="gray.200"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          >
            <Card.Body>
              <VStack gap={3} align="stretch">
                <HStack justify="space-between">
                  <Text fontWeight="medium">Email</Text>
                  <Text color="gray.600" _dark={{ color: "gray.300" }}>
                    {mockUser.email}
                  </Text>
                </HStack>
                <Divider />
                <HStack justify="space-between">
                  <Text fontWeight="medium">Phone</Text>
                  <Text color="gray.600" _dark={{ color: "gray.300" }}>
                    {mockUser.phone}
                  </Text>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        {/* Action Buttons */}
        <VStack gap={3}>
          <Button leftIcon={<FiEdit3 />} colorPalette="blue" size="lg" w="100%">
            Edit Profile
          </Button>

          <Button
            leftIcon={<FiSettings />}
            variant="outline"
            size="lg"
            w="100%"
          >
            Settings
          </Button>

          <Button
            leftIcon={<FiLogOut />}
            colorPalette="red"
            variant="outline"
            size="lg"
            w="100%"
          >
            Sign Out
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
