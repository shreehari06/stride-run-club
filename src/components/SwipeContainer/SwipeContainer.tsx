import { Box } from "@mui/material";
import React from "react";

const SwipeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        flex: "0 0 100%",
        overflowY: "auto",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default SwipeContainer;
