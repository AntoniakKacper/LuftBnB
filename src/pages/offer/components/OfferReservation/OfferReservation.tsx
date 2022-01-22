import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { SearchContext } from "context/SearchProvider";
import { useMutation } from "react-query";
import { Offer } from "models/Offer";
import { signInData } from "../../../../models/Authentication";
import axios from "../../../../utils/axiosInstance";
import { UserActions } from "../../../../context/AuthProvider";

interface OfferReservationProps {
  dailyPrice: number;
  offerId: number;
}

export const OfferReservation: React.FC<OfferReservationProps> = ({dailyPrice, offerId}) => {
  const {state} = useContext(SearchContext);
  const {startDate, endDate} = state;
  const { data, isLoading, mutate } = useMutation(async () => {
    const fData = new FormData();

    fData.append('startDate', startDate.toISOString().split('T')[0]);
    fData.append('endDate', endDate.toISOString().split('T')[0]);
    fData.append('offer', offerId.toString())

    const response = await axios.post('./reservation', fData);

    return response;
  }, {
    onSuccess: (data) => {
      console.log(data, 'przeszlo');
    }
  });

  const handleClick = () => {
    mutate();
  };

  const countDays = (first: Date, second: Date) => {
    const difference = Math.abs(first.getTime() - second.getTime());
    const daysCount = Math.ceil(difference / (1000 * 3600 * 24) + 1);
    return daysCount
  }

  const calculateTotalPrice = (daysCount: number) => {
    return dailyPrice*daysCount;
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short', day: 'numeric'
    }

    return new Intl.DateTimeFormat("pl-PL", options).format(new Date(date));
  }
  return (
    <div className="reservation">
      <div>
          <h1 className="reservation__title">Rezerwuj</h1>
          <p>{dailyPrice}zł / noc</p>
          <p><u>{formatDate(startDate)} – {formatDate(endDate)}</u></p>
      </div>
      <div>
          <p>Łącznie: <u>{calculateTotalPrice(countDays(startDate, endDate))}zł</u></p>
          <Button variant="contained" className="reservation__button" onClick={handleClick}>Rezerwuj</Button>
      </div>
    </div>
  );
};