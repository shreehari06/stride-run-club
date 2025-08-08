import { Drawer, Portal, Container, Text, CloseButton } from "@chakra-ui/react";

interface ProfileDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(details) => !details.open && onClose()}
      placement="end"
      size="md"
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Profile</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Container maxW="container.sm" py={4}>
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                  User profile information will be displayed here
                </Text>
              </Container>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
