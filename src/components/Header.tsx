import { Box, HStack, Text, IconButton, Avatar } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

interface HeaderProps {
  readonly onProfileClick: () => void;
}

export function Header({ onProfileClick }: HeaderProps) {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      _dark={{ bg: "gray.800", borderColor: "gray.700" }}
      px={4}
      py={3}
      zIndex={1000}
      boxShadow="0 2px 10px rgba(0,0,0,0.1)"
    >
      <HStack justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold" color="blue.500">
          Stride
        </Text>

        <IconButton
          aria-label="Profile"
          variant="ghost"
          size="md"
          onClick={onProfileClick}
          _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
          borderRadius="full"
        >
          <Avatar.Root size="sm" colorPalette="blue">
            <Avatar.Fallback>
              <FiUser />
            </Avatar.Fallback>
          </Avatar.Root>
        </IconButton>
      </HStack>
    </Box>
  );
}
