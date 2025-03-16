"use client";

import { theme } from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { Header, Navigation } from "@/components";

export default function Home() {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "calc(100vh - 112px)", // 56 header + 56 nav
            overflowY: "auto",
            border: "1px solid red",
          }}
        >
          main content
        </Box>
        <Navigation />
      </Box>
    </ThemeProvider>
  );
}
