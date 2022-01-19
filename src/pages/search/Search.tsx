import React, { useEffect, useState } from 'react';
import { CalendarPopover } from "./components/CalendarPopover";
import { Calendar } from "../../components/Calendar/Calendar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import { DrawerComponent } from "../../components/Drawer/DrawerComponent";
import { MoreFilters } from "./components/MoreFilters";
import { OfferTile } from "./components/OfferTile";
import { useQuery } from "react-query";
import { fetchCities } from "../../actions/homePageActions";
import { fetchOffers } from "../../actions/searchPageActions";
import { LoadingIndicator } from "components";
import { Offer } from "models/Offer";

interface SearchProps {
}


export const Search: React.FC<SearchProps> = ({}) => {
  const { isLoading: loadingCities, data: cities } = useQuery('cities', fetchCities);
  const offerParams = {
    city: "Warka",
    people: 5,
    startDate: "2021-03-12",
    endDate: "2021-03-14",
  };
  const { isFetching: loadingOffers, data: offers } = useQuery(['offers', offerParams],
    () => fetchOffers(offerParams), {
      enabled: !!offerParams
    });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  console.log(offers);

  console.log(new Date().toString());

  const menuItems = cities?.data.map((city: string) => ({
    value: city,
    label: city,
  }));

  return (<main className="search">
    {loadingCities ? <LoadingIndicator/> : <>
      <div className="search__input">
        <ChevronLeftIcon className="search__icon" onClick={() => navigate(-1)}/>
        <Autocomplete
          className="search__autocomplete"
          disablePortal
          id="combo-box-demo"
          options={menuItems}
          renderInput={(params) => <TextField {...params} label="Wybierz miasto"/>}
        />
        <DrawerComponent drawerIcon={<FilterListIcon className="search__icon"/>}
                         drawerContent={<MoreFilters setVisible={setVisible} visible={visible}/>}
                         setVisible={setVisible} visible={visible}/>
      </div>
      <div className="search__filters">
        <TextField type="number" variant="outlined" label="Ilość osób"
                   inputProps={{ min: "1", max: "10", step: "1" }} sx={{ width: 150 }}/>
        <CalendarPopover buttonLabel="Wybierz datę" popoverContent={<Calendar/>}/>
      </div>
    </>
    }
    <div className="divider"/>
    <section className="search__display-offers">
      {loadingOffers ? <LoadingIndicator/>
        : offers?.data.map((offer: Offer) => (<OfferTile key={offer.id} offer={offer}/>))
      }
    </section>


  </main>);
};