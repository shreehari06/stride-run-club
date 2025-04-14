import { Box } from "@mui/material";
import React from "react";

import { config } from "@/config";

const Registration = () => {
  return (
    <Box sx={{ height: "100%", overflow: "hidden" }}>
      <iframe
        src={config.formLink}
        width="100%"
        height="100%"
        title="Registration Form"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default Registration;
