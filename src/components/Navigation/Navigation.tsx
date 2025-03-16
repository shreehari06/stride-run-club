import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Navigation = () => {
  return (
    <BottomNavigation
      showLabels
      value={0}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: 2,
      }}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
