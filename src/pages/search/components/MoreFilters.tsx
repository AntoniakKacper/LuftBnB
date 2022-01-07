import React from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "@mui/material/Slider";
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


interface MoreFiltersProps {

}

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 10;
export const MoreFilters: React.FC<MoreFiltersProps> = ({}) => {
    const [value1, setValue1] = React.useState<number[]>([20, 37]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    return (<div>
        <IconButton aria-label="delete">
            <CloseIcon />
        </IconButton>
        <h1>Więcej filtrów</h1>
        <p>
            Cena za noc

        </p>
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
        <p>
            Rodzaj nieruchomości
        </p>
        <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="1 rodzaj" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="2 rodzaj" />
        </div>
        <p>
            Palenie
        </p>
        <FormControlLabel control={<Switch />} label="Palenie" />

    </div>);
};