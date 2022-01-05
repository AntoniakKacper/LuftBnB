import React from 'react';
import Button from '@mui/material/Button';

interface OfferReservationProps {

}

export const OfferReservation: React.FC<OfferReservationProps> = ({}) => {
    const handleClick = () => {

    };
    return (
        <div className="reservation">

            <div>
                <h1 className="reservation__title">Rezerwuj</h1>

                <p>290 / noc</p>
                <p><u>8 sty – 15 sty</u></p>
            </div>
            <div>
                <p>Łącznie: <u>997$</u></p>
                <Button variant="contained" className="reservation__button" onClick={handleClick}>Rezerwuj</Button>
            </div>
        </div>
    );
};