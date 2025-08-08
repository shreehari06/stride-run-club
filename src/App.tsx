import { useState } from "react";
import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { BottomNavigation } from "./components/BottomNavigation";
import { SwipeablePages } from "./components/SwipeablePages";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { ChatPage } from "./pages/ChatPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { ProfilePage } from "./pages/ProfilePage";

const pages = [
  { key: "home", component: HomePage },
  { key: "events", component: EventsPage },
  { key: "chat", component: ChatPage },
  { key: "leaderboard", component: LeaderboardPage },
  { key: "profile", component: ProfilePage },
];

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
        {/* Main content area - account for bottom nav */}
        <Box pb="80px" h="100vh" overflow="hidden">
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
      </Box>
    </ChakraProvider>
  );
}

export default App;
