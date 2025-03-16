"use client";

import { theme } from "@/theme";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { Agbalumo } from "next/font/google";
import Image from "next/image";

const agbalumoFont = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-agbalumo",
});

export default function Home() {
  const strings = {
    title: "stride run club",
    buttons: {
      joinUs: "Join us",
    },
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
        }}
      >
        {/* header */}
        <Box
          sx={{
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "52px",
            paddingInline: 2,
            "& img": {
              borderRadius: "50%",
            },
          }}
          className={agbalumoFont.className}
        >
          <Image
            src={"/stride.jpeg"}
            width={36}
            height={36}
            alt="Stride logo"
          />
          <Box sx={{ typography: "title" }}> {strings.title}</Box>
          <Button variant="text">{strings.buttons.joinUs}</Button>
        </Box>
        {/* header end  */}

        {/* main */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
            height: "calc(100vh - 52px)",
            border: "1px solid red",
            overflowY: "auto",
          }}
        >
          main
        </Box>
      </Box>
    </ThemeProvider>
  );
}
