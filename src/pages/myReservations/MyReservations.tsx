import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { UserContext } from "../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "utils/axiosInstance";
import { OfferTile } from "../search/components/OfferTile";
import { UserReservation } from "../../models/Offer";
import { ReservationTile } from "./components/ReservationTile/ReservationTile";
import { LoadingIndicator } from "../../components";

interface MyReservationsProps {
}

export const MyReservations: React.FC<MyReservationsProps> = ({}) => {
  const { userState } = useContext(UserContext);

  const { isFetching, data: userReservations, refetch } = useQuery('myReservations', async () => {
    const result = await axios.get(`./user/reservation`);
    return result;
  });


  if (userState.authenticated)
    return (
      <main className="my-reservations">
        {isFetching
          ? <LoadingIndicator/>
          : <section className="my-reservations__content">
            <h1>Moje rezerwacje</h1>
            <div>
              {userReservations?.data.map((reservation: UserReservation) =>
                <div key={reservation.id}>
                  <OfferTile offer={reservation.offer}/>
                  <ReservationTile totalPrice={reservation.price} startDate={reservation.startDate}
                                   endDate={reservation.endDate} reservationId={reservation.id} onDelete={refetch}/>
                </div>
              )}
            </div>
          </section>
        }
      </main>
    );

  return (
    <main className="my-reservations">
      <section className="my-reservations__content">
        <h1>Moje rezerwacje</h1>
        <h3>Zaloguj się, by przejrzeć swoje rezerwacje</h3>
        <p>
          Swoje rezerwacje możesz tworzyć, wyświetlać lub edytować po zalogowaniu.
        </p>
        <Link to="/signin">
          <Button type="submit" variant="contained">
            Zaloguj się
          </Button>
        </Link>
      </section>
    </main>
  );
};
