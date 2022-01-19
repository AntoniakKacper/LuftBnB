import React from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "@mui/material/Slider";
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';



interface MoreFiltersProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
}

function valuetext(value: number) {
    return `${value} $`;
}

const minDistance = 10;

export const MoreFilters: React.FC<MoreFiltersProps> = ({setVisible, visible}) => {
    const [price, setPrice] = React.useState<number[]>([100, 700]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    return (<div className="more-filters">
            <div className="more-filters__header">
                <IconButton onClick={() => setVisible(!visible)}>
                    <CloseIcon />
                </IconButton>
                <h2>Więcej filtrów</h2>
                <div></div>
            </div>
        <div className="more-filters__container">

            <div className="more-filters__price">
                <h2>
                    Cena za noc

                </h2>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={price}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    max={1000}
                    min={20}
                />
                <div className="more-filters__price__inputs">
                    <TextField
                        label="Cena minimalna"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '15ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">zł</InputAdornment>,
                        }}
                        value={price[0]}
                    />
                    <h2>-</h2>
                    <TextField
                        label="Cena maksymalna"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '15ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">zł</InputAdornment>,
                        }}
                        value={price[1]}
                    />
                </div>
            </div>
            <div className="more-filters__property-type">
                <h2>
                    Rodzaj nieruchomości
                </h2>
                <div>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Dom" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Apartament" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Hostel" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Hotel" />
                </div>
            </div>

            <div className="more-filters__facilities">
                <h2>
                    Palenie
                </h2>
                <FormControlLabel control={<Switch />} label={<SmokingRoomsIcon />} />
            </div>
        </div>

    </div>);
};