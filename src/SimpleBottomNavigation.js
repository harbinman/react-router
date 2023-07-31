import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChecklistIcon from "@mui/icons-material/Checklist";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", bottom: "0px", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="List" icon={<ChecklistIcon />} />
        <BottomNavigationAction label="Add" icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction label="About" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
