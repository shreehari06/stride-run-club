import { useState } from "react";
import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { BottomNavigation } from "./components/BottomNavigation";
import { Header } from "./components/Header";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { SwipeablePages } from "./components/SwipeablePages";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { ChatPage } from "./pages/ChatPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";

const pages = [
  { key: "home", component: HomePage },
  { key: "events", component: EventsPage },
  { key: "chat", component: ChatPage },
  { key: "leaderboard", component: LeaderboardPage },
];

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
        {/* Header */}
        <Header onProfileClick={handleProfileClick} />

        {/* Main content area - account for header and bottom nav */}
        <Box pt="72px" pb="80px" h="100vh" overflow="hidden">
          <SwipeablePages
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </Box>

        {/* Bottom Navigation */}
        <BottomNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* Profile Drawer Overlay */}
        <ProfileDrawer isOpen={showProfile} onClose={handleCloseProfile} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
