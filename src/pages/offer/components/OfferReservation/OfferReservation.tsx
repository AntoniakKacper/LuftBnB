import React from 'react';
import Button from '@mui/material/Button';

interface OfferReservationProps {
  dailyPrice: number;
}

export const OfferReservation: React.FC<OfferReservationProps> = ({dailyPrice}) => {
    const handleClick = () => {

    };
    const daysCount = 7;

    const calculateTotalPrice = (daysCount: number) => {
      return dailyPrice*daysCount;
    }
    return (
        <div className="reservation">

            <div>
                <h1 className="reservation__title">Rezerwuj</h1>

                <p>{dailyPrice}zł / noc</p>
                <p><u>8 sty – 15 sty</u></p>
            </div>
            <div>
                <p>Łącznie: <u>{calculateTotalPrice(daysCount)}zł</u></p>
                <Button variant="contained" className="reservation__button" onClick={handleClick}>Rezerwuj</Button>
            </div>
        </div>
    );
};