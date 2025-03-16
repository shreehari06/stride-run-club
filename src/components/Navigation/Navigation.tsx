import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import RegisterIcon from "@mui/icons-material/HowToReg";
import Announcements from "@mui/icons-material/Campaign";
import { STRINGS } from "@/strings";

export enum NAVIGATION_PAGE {
  "Home",
  "Register",
  "Announcements",
}

const Navigation = ({
  onChange,
}: {
  onChange?: (newValue: NAVIGATION_PAGE) => void;
}) => {
  const [value, setValue] = React.useState<NAVIGATION_PAGE>(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: 2,
      }}
      onChange={(_event, newValue) => {
        setValue(newValue);
        onChange?.(newValue);
      }}
    >
      <BottomNavigationAction label={STRINGS.nav.home} icon={<HomeIcon />} />
      <BottomNavigationAction
        label={STRINGS.nav.register}
        icon={<RegisterIcon />}
      />
      <BottomNavigationAction
        label={STRINGS.nav.announcements}
        icon={<Announcements />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
