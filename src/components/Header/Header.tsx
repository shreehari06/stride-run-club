import { agbalumoFont } from "@/fonts";
import { STRINGS } from "@/strings";
import { Box, Button } from "@mui/material";
import React from "react";
import { PATH_PREFIX } from "@/path";

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
      <img
        src={`${PATH_PREFIX}/stride.jpeg`}
        width={36}
        height={36}
        alt="Stride logo"
        style={{ objectFit: "cover" }}
      />
      <Box sx={{ typography: "title" }}> {STRINGS.title}</Box>
      <Button variant="text">{STRINGS.buttons.joinUs}</Button>
    </Box>
  );
};

export default Header;
