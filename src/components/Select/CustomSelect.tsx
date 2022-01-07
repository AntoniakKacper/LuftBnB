import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from "@mui/material";

interface Item {
    value: string;
    label: string;
}

interface CustomSelectProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    variant?: "filled" | "outlined" | "standard";
    label?: string;
    menuItems: Item[];
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, setValue, variant, label, menuItems, placeholder }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <FormControl>
            <InputLabel id="simple-select-label">{label}</InputLabel>
            <Select
                id="simple-select"
                labelId="simple-select-label"
                value={value}
                onChange={handleChange}
                variant={variant}
                label={label}
                placeholder={placeholder}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {menuItems.map((menuItem) => (<MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;