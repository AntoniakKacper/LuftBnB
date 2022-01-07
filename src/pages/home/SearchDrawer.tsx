import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface SearchDrawerProps {}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({}) => {
  return (
    <section>
      <div className="search-drawer">
        <div>
          <IconButton aria-label="delete">
            <ChevronLeftIcon />
          </IconButton>

          <input
            type="text"
            className="search-drawer__input"
            placeholder="Dokąd chcesz pojechać?"
          />
        </div>
        <p>W DOWOLNYM MIEJSCU, W DOWOLNYM CZASIE</p>
      </div>

      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          paddingBottom: "20px",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Sopot" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Szczecin" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Suwałki" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Świnoujście" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </section>
  );
};
