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
import { useQuery } from "react-query";
import { fetchCities } from "../../actions/homePageActions";
import { LoadingIndicator } from 'components';
import Button from "@mui/material/Button";


interface SearchDrawerProps {
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({}) => {
  const { isLoading, data, isError, refetch } = useQuery('cities', fetchCities);

  return (
    <section>
      <div className="search-drawer">
        <div>
          <IconButton aria-label="delete">
            <ChevronLeftIcon/>
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


          {isLoading ? <LoadingIndicator/> :
            <List>
              {data && data.data.map((city: string) => (<ListItem disablePadding key={city}>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon/>
                  </ListItemIcon>
                  <ListItemText primary={city}/>
                </ListItemButton>
              </ListItem>))
              }
            </List>
          }
          {
            isError && <div className="search-drawer__refresh-wrapper">
              <Button className="search-drawer__refresh-button" onClick={() => refetch()}>Załaduj ponownie</Button>
            </div>
          }

        </nav>
      </Box>
    </section>
  );
};
