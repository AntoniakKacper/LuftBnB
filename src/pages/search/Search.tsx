import React, { useContext, useState } from 'react';
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
import { SearchActions, SearchContext } from "../../context/SearchProvider";
import Button from "@mui/material/Button";

interface SearchProps {
}


export const Search: React.FC<SearchProps> = ({}) => {
  const { state, dispatch } = useContext(SearchContext);
  const { isLoading: loadingCities, data: cities } = useQuery('cities', fetchCities);
  let offerParams = {
    city: "",
    people: 1,
    startDate: "",
    endDate: "",
  }

  const { isFetching: loadingOffers, data: offers, refetch } = useQuery(['offers', offerParams],
    () => fetchOffers(offerParams), {
      enabled: false
    });

  //console.log(new Date()state.startDate.toISOString().split('T')[0]);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const onChange = (startDate: Date, endDate: Date) => {
    dispatch({ type: SearchActions.setStartDate, payload: startDate });
    dispatch({ type: SearchActions.setEndDate, payload: endDate });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, actionType: SearchActions) => {
    dispatch({ type: actionType, payload: event.target.value });
  };

  const onCityInputChange = (event: React.SyntheticEvent<Element, Event>, city: string | null) =>{
    city && dispatch({ type: SearchActions.setCity, payload: city });
  }

  const searchButtonClick = () => {
    offerParams = {
      city: state.city,
      people: state.people,
      startDate: state.startDate.toISOString().split('T')[0],
      endDate: state.endDate.toISOString().split('T')[0],
    }
    console.log(offerParams)
    refetch();
  }
  
  return (
    <main className="search">
      {loadingCities ? <LoadingIndicator/> : <>
        <div className="search__input">
          <ChevronLeftIcon className="search__icon" onClick={() => navigate(-1)}/>
          <Autocomplete
            value={state.city}
            onChange={(event, newInputValue) => onCityInputChange(event, newInputValue)}
            className="search__autocomplete"
            disablePortal
            id="combo-box-demo"
            options={cities?.data}
            renderInput={
              (params) =>
                <TextField {...params} value={state.city} label="Wybierz miasto"/>
            }
          />
          <DrawerComponent drawerIcon={<FilterListIcon className="search__icon"/>}
                           drawerContent={<MoreFilters setVisible={setVisible} visible={visible}/>}
                           setVisible={setVisible} visible={visible}/>
        </div>
        <div className="search__filters">
          <TextField type="number" variant="outlined" label="Ilość osób" value={state.people}
                     inputProps={{ min: "1", max: "10", step: "1" }} sx={{ width: 150 }}
                     onChange={(event) => onInputChange(event, SearchActions.setPeople)}/>
          <CalendarPopover buttonLabel="Wybierz datę"
                           popoverContent={<Calendar startDate={state.startDate} endDate={state.endDate}
                                                     onChange={onChange}/>}/>
        </div>
        <Button className="search__button" variant="contained" onClick={searchButtonClick}>Wyszukaj</Button>
      </>
      }
      <div className="divider"/>
      <section className="search__display-offers">
        {loadingOffers ? <LoadingIndicator/>
          : offers?.data.map((offer: Offer) => (<OfferTile key={offer.id} offer={offer}/>))
        }
      </section>
    </main>
  );
}