"use client";

import { theme } from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import {
  Announcements,
  Header,
  Landing,
  Navigation,
  NAVIGATION_PAGE,
  Registration,
  SwipeContainer,
} from "@/components";
import { ReactNode, useState } from "react";
import SwipeableViews from "react-swipeable-views";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<NAVIGATION_PAGE>(
    NAVIGATION_PAGE.Announcements
  );

  const handleNavigationChange = (page: NAVIGATION_PAGE) => {
    if (page === NAVIGATION_PAGE.Announcements) setCurrentPage(page);
  };

  const handleSwipeChange = (index: number) => {
    if (index === NAVIGATION_PAGE.Announcements)
      setCurrentPage(index as NAVIGATION_PAGE);
  };

  const Components: Record<NAVIGATION_PAGE, ReactNode> = {
    [NAVIGATION_PAGE.Home]: <Landing />,
    [NAVIGATION_PAGE.Register]: <Registration />,
    [NAVIGATION_PAGE.Announcements]: <Announcements />,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          width: "100%",
          height: "100svh",
          boxShadow: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Header
          onClick={() => handleNavigationChange(NAVIGATION_PAGE.Register)}
        />

        <SwipeableViews
          index={currentPage}
          onChangeIndex={handleSwipeChange}
          style={{ height: "calc(100vh - 112px)" }} // 56 header + 56 nav
          containerStyle={{
            display: "flex",
            height: "100%",
          }}
        >
          {Object.keys(NAVIGATION_PAGE).map((key) => (
            <SwipeContainer key={key}>
              {Components[Number(key) as NAVIGATION_PAGE]}
            </SwipeContainer>
          ))}
        </SwipeableViews>

        <Navigation onChange={handleNavigationChange} value={currentPage} />
      </Box>
    </ThemeProvider>
  );
}
