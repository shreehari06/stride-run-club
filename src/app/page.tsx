"use client";

import { theme } from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { Header, Navigation, NAVIGATION_PAGE } from "@/components";

export default function Home() {
  const handleNavigationChange = (page: NAVIGATION_PAGE) => {
    console.log("🚀 ~ handleNavigationChange ~ page:", page);
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
        }}
      >
        <Header />

        {/* Main content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "calc(100vh - 112px)", // 56 header + 56 nav
            overflowY: "auto",
          }}
        >
          main content
        </Box>
        {/* Main content end*/}

        <Navigation onChange={handleNavigationChange} />
      </Box>
    </ThemeProvider>
  );
}
