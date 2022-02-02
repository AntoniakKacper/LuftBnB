import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import BedIcon from '@mui/icons-material/Bed';

interface BottomNavbarProps {}

interface ButtonType {
  label: string;
  path: string;
  icon: JSX.Element;
}

const BottomNavbar: React.FC<BottomNavbarProps> = () => {
  const authenticated = true;
  const listOfActions: ButtonType[] = [
    {
      label: "Wyszukaj",
      path: "search",
      icon: <SearchIcon />,
    },
    {
      label: "Rezerwacje",
      path: "myReservations",
      icon: <BedIcon />,
    },

    authenticated ? {
      label: "Dodaj ofertę",
      path: "addOffer",
      icon: <AddCircleOutlineIcon />,
    } : {
    label: "Zaloguj się",
      path: "signup",
      icon: <AccountCircleIcon />,
  },
    authenticated && {
      label: "Ustawienia",
      path: "settings",
      icon: <SettingsIcon />,
    }
  ];
  const [value, setValue] = useState("search");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //TODO ustawienia, moje oferty

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
