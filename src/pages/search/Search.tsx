import React from 'react';
import { CalendarPopover } from "./components/CalendarPopover";
import { Calendar } from "../../components/Calendar/Calendar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FilterListIcon from '@mui/icons-material/FilterList';
import {useNavigate} from 'react-router-dom';
import { DrawerComponent } from "../../components/Drawer/DrawerComponent";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { MoreFilters } from "./components/MoreFilters";

interface SearchProps {

}

export const Search: React.FC<SearchProps> = ({}) => {
    const navigate = useNavigate();

    const menuItems = [
        {
            value: "Bialystok",
            label: "Białystok"
        },
        {
            value: "Warszawa",
            label: "Warszawa"
        },
        {
            value: "Szczecin",
            label: "Szczecin"
        },
        {
            value: "Gdansk",
            label: "Gdansk"
        },
        {
            value: "Gdansksssssssssssssssssssssss",
            label: "Gdansksssssssssssssssssssssss"
        },
    ]



    return (<main className="search">
        <div className="search__input">
            <ChevronLeftIcon  className="search__icon" onClick={() => navigate(-1)}/>

            <Autocomplete
                className="search__autocomplete"
                disablePortal
                id="combo-box-demo"
                options={menuItems}
                renderInput={(params) => <TextField {...params} label="Wybierz miasto" />}
            />
            <DrawerComponent drawerIcon={<FilterListIcon className="search__icon"/>} drawerContent={<MoreFilters />} />


        </div>
        <div className="search__filters">
            <TextField type="number" variant="outlined" label="Ilość osób" inputProps={{ min: "1", max: "10", step: "1" }}  sx={{ width: 150 }}/>
            <CalendarPopover buttonLabel="Wybierz datę" popoverContent={<Calendar />}/>
        </div>
        <div className="divider"/>
        <section className="display-offers">

        </section>



    </main>);
};