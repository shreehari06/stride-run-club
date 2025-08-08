import {
  Box,
  HStack,
  VStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCalendar,
  FiMessageCircle,
  FiUser,
  FiTrendingUp,
} from "react-icons/fi";

interface NavItem {
  icon: any;
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
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function BottomNavigation({
  currentPage,
  setCurrentPage,
}: BottomNavigationProps) {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("blue.500", "blue.300");
  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg={bg}
      borderTop="1px"
      borderColor={borderColor}
      px={2}
      py={2}
      zIndex={1000}
      boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
    >
      <HStack justify="space-around" align="center">
        {navItems.map((item) => (
          <VStack
            key={item.label}
            spacing={1}
            cursor="pointer"
            onClick={() => setCurrentPage(item.index)}
            opacity={currentPage === item.index ? 1 : 0.7}
            color={currentPage === item.index ? activeColor : inactiveColor}
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
