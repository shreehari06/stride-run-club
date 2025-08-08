import { Box, HStack, VStack, Icon, Text } from "@chakra-ui/react";
import {
  FiHome,
  FiCalendar,
  FiMessageCircle,
  FiUser,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface NavItem {
  icon: IconType;
  label: string;
  index: number;
}

const navItems: NavItem[] = [
  { icon: FiHome, label: "Home", index: 0 },
  { icon: FiCalendar, label: "Events", index: 1 },
  { icon: FiMessageCircle, label: "Chat", index: 2 },
  { icon: FiTrendingUp, label: "Leaderboard", index: 3 },
  { icon: FiUser, label: "Profile", index: 4 },
];

interface BottomNavigationProps {
  readonly currentPage: number;
  readonly setCurrentPage: (page: number) => void;
}

export function BottomNavigation({
  currentPage,
  setCurrentPage,
}: BottomNavigationProps) {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      borderTop="1px"
      borderColor="gray.200"
      _dark={{ bg: "gray.800", borderColor: "gray.700" }}
      px={2}
      py={2}
      zIndex={1000}
      boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
    >
      <HStack justify="space-around" align="center">
        {navItems.map((item) => (
          <VStack
            key={item.label}
            gap={1}
            cursor="pointer"
            onClick={() => setCurrentPage(item.index)}
            opacity={currentPage === item.index ? 1 : 0.7}
            color={currentPage === item.index ? "blue.500" : "gray.500"}
            _dark={{
              color: currentPage === item.index ? "blue.300" : "gray.400",
            }}
            _hover={{ opacity: 1 }}
            transition="all 0.2s"
            py={2}
            px={3}
            borderRadius="md"
            _active={{ transform: "scale(0.95)" }}
          >
            <Icon as={item.icon} boxSize={6} />
            <Text fontSize="xs" fontWeight="medium">
              {item.label}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}
