import { agbalumoFont } from "@/fonts";
import { strings } from "@/strings";
import { Box, Button } from "@mui/material";
import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "56px",
        paddingInline: 2,
        borderBottom: 1,
        borderColor: "divider",
        "& img": {
          borderRadius: "50%",
        },
      }}
      className={agbalumoFont.className}
    >
      <Image src={"/stride.jpeg"} width={36} height={36} alt="Stride logo" />
      <Box sx={{ typography: "title" }}> {strings.title}</Box>
      <Button variant="text">{strings.buttons.joinUs}</Button>
    </Box>
  );
};

export default Header;
