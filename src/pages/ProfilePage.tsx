import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  Button,
  Avatar,
  Badge,
  SimpleGrid,
  useColorModeValue,
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
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const formatJoinDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Container maxW="container.lg" py={6} h="100%" overflowY="auto">
      <VStack spacing={6} align="stretch">
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
        <Card bg={bg} borderColor={borderColor}>
          <CardBody>
            <VStack spacing={4} align="center">
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
                  colorScheme="blue"
                />
              </Box>

              <VStack spacing={1} textAlign="center">
                <Heading size="lg">{mockUser.name}</Heading>
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                  {mockUser.email}
                </Text>
                <Badge colorScheme="blue" variant="outline">
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
          </CardBody>
        </Card>

        {/* Stats Grid */}
        <Box>
          <Heading size="md" mb={4}>
            Your Stats
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Card bg={bg} borderColor={borderColor}>
              <CardBody textAlign="center">
                <FiActivity size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.runsCompleted}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Runs Completed
                </Text>
              </CardBody>
            </Card>

            <Card bg={bg} borderColor={borderColor}>
              <CardBody textAlign="center">
                <FiMapPin size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.totalDistance.toFixed(1)}km
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Total Distance
                </Text>
              </CardBody>
            </Card>

            <Card bg={bg} borderColor={borderColor}>
              <CardBody textAlign="center">
                <FiCalendar size={24} color="#3182ce" />
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.currentStreak}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Current Streak
                </Text>
              </CardBody>
            </Card>

            <Card bg={bg} borderColor={borderColor}>
              <CardBody textAlign="center">
                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                  {mockUser.stats.eventsHosted}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Events Hosted
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* Contact Information */}
        <Box>
          <Heading size="md" mb={4}>
            Contact Information
          </Heading>
          <Card bg={bg} borderColor={borderColor}>
            <CardBody>
              <VStack spacing={3} align="stretch">
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
            </CardBody>
          </Card>
        </Box>

        {/* Action Buttons */}
        <VStack spacing={3}>
          <Button leftIcon={<FiEdit3 />} colorScheme="blue" size="lg" w="100%">
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
            colorScheme="red"
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
