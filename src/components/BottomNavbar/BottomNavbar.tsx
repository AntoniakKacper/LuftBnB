import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface BottomNavbarProps {}

interface ButtonType {
  label: string;
  path: string;
  icon: JSX.Element;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({}) => {
  const listOfActions: ButtonType[] = [
    {
      label: "Wyszukaj",
      path: "search",
      icon: <SearchIcon />,
    },
    {
      label: "Lista życzeń",
      path: "wishlist",
      icon: <FavoriteBorderIcon />,
    },
    {
      label: "Zaloguj się",
      path: "signup",
      icon: <AccountCircleIcon />,
    },
  ];
  const [value, setValue] = useState("search");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        className="bottom-navbar"
      >
        {listOfActions.map((action: ButtonType) => (
          <BottomNavigationAction
            key={action.path}
            label={action.label}
            icon={action.icon}
            value={action.path}
            component={Link}
            to={`/${action.path}`}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavbar;
