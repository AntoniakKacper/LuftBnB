import React from 'react';
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

interface CalendarPopoverProps {
    buttonLabel: string;
    popoverContent: JSX.Element;
}

export const CalendarPopover: React.FC<CalendarPopoverProps> = ({buttonLabel, popoverContent}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                {buttonLabel}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >

                <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
            </Popover>
        </>
        );
};