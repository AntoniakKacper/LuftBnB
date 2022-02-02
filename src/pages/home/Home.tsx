import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { SearchDrawer } from "./SearchDrawer";
import SearchIcon from "@mui/icons-material/Search";


interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <main>
      <div className="home">
        <h1>Wybierz swoje wymarzone miejsce na podróż</h1>
        <button onClick={toggle} className="home__button">
          <SearchIcon fontSize="medium" className="home__search-icon" />
          Dokąd chcesz pojechać?
        </button>
      </div>
      <Drawer open={visible} onClose={toggle} anchor="top">
        <SearchDrawer />
      </Drawer>
    </main>
  );
};
