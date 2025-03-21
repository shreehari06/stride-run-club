import { agbalumoFont } from "@/fonts";
import { STRINGS } from "@/strings";
import { Box, Button } from "@mui/material";
import React from "react";

import Image from "next/image";

const Header = ({ onClick }: { onClick?: () => void }) => {
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
      onClick={onClick}
    >
      <Image src={"/stride.jpeg"} width={36} height={36} alt="Stride logo" />
      <Box sx={{ typography: "title" }}> {STRINGS.title}</Box>
      <Button variant="text">{STRINGS.buttons.joinUs}</Button>
    </Box>
  );
};

export default Header;
