import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Stack, Typography, Button, Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { theme } from "../../theme"; // Import the theme
import { NAVIGATION_PAGE } from "../Navigation";

const Landing = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<NAVIGATION_PAGE>>;
}) => {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleBackgroundClick = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 300);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('/content/splash.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
      onClick={handleBackgroundClick} // Add click handler for background
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          padding: 3,
          margin: 3,
          mt: 8,
          borderRadius: 3,
          boxShadow: 6,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: 2,
            color: theme.palette.primary.main,
          }}
        >
          Welcome to Stride
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 4,
          }}
        >
          Join Bangalore&apos;s premier run club for weekly runs and events.
        </Typography>
        <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPage(NAVIGATION_PAGE.Register)}
            sx={{
              padding: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Register Now
          </Button>
        </Stack>
      </Box>

      {/* Floating Instagram Button */}
      <Fab
        color="secondary"
        href="https://instagram.com/stride_runclub_bengaluru"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 3,
          backgroundColor: isFlashing ? "#FF69B4" : "#E1306C", // Flashing effect
          transition: "background-color 0.3s ease", // Smooth transition
          "&:hover": {
            backgroundColor: "#C13584",
          },
        }}
      >
        <InstagramIcon
          sx={{
            color: "white",
            stroke: "white",
          }}
        />
      </Fab>
    </Box>
  );
};

export default Landing;
