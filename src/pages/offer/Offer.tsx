import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, useParams } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Calendar } from 'components/Calendar/Calendar';
import { OfferReservation } from "./components/OfferReservation/OfferReservation";
import { OfferOpinions } from "./components/OfferOpinions/OfferOpinions";
import OfferCarousel from "./components/OfferCarousel/OfferCarousel";
import { useQuery, UseQueryResult } from "react-query";
import { fetchCities } from "../../actions/homePageActions";
import { LoadingIndicator } from "components";
import { getOfferById, getOfferOpinions, getOfferOwner, getOfferReservations } from "actions/offerPageActions";
import { Offer as OfferModel } from "../../models/Offer";
import Button from "@mui/material/Button";
import { User } from "../../models/Authentication";

interface OfferProps {

}

const Offer: React.FC<OfferProps> = () => {
  const { isFetching, data: cityData, error } = useQuery('cities', fetchCities);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: offer,
    isFetching: isOfferFetching
  }: UseQueryResult<OfferModel> = useQuery(['offer', id], () => getOfferById(id!));
  const { data: offerOwner, isFetching: isOfferOwnerFetching }: UseQueryResult<User> =
    useQuery(['offerOwner', id], () => getOfferOwner(id!));
  const { data: offerReservations, isFetching: isOfferReservationsLoading } =
    useQuery(['offerReservations', id], () => getOfferReservations(id!));
  const {
    data: offerOpinions,
    isFetching: isOfferOpinionsLoading,
    refetch: opinionsRefetch
  } =
    useQuery(['offerOpinions', id], () => getOfferOpinions(id!), { enabled: false });

  if (isOfferFetching) {
    return <LoadingIndicator/>;
  }
  return (
    <main className="offer">
      <nav className="offer__nav">
        <ChevronLeftIcon onClick={() => navigate(-1)}/>
        <FavoriteBorderIcon/>
      </nav>
      <OfferCarousel images={offer?.images.map(image => image.url)}/>

      <section className="offer__content">
        <h1 className="offer__title">
          {offer?.title}
        </h1>

        <article className="offer__info">
                    <span className="offer__ratings">
                        <StarIcon/>
                        <p>{Number(offer?.ratings.rateCount).toFixed(2)}</p>
                        <p className="offer--clickable-text">(Ilość rezenzji: {offer?.ratings.opinionsCount})</p>
                    </span>
          <p className="offer--clickable-text">{offer?.city}</p>
        </article>

        <div className="offer__divider"/>

        <article className="offer__info">
          <div className="offer__host-info">
            <p>Mały domek</p>
            <p>Gospodarz: {offerOwner?.firstName}</p>
            <p>Email: {offerOwner?.email}</p>
          </div>

        </article>
        <div className="offer__divider"/>
        <article className="offer__description">
          <p>{offer?.description}</p>
        </article>
        <div className="offer__divider"/>
        <article className="offer__reservation">
          <Calendar/>
          <OfferReservation dailyPrice={offer!.dailyPrice}/>
        </article>

        <div className="offer__divider"/>
        {!offerOpinions && !isOfferOpinionsLoading
          ? <div className="offer__opinion-fetch-wrapper">
            <Button className="offer__opinion-refresh-button" onClick={() => opinionsRefetch()}>Załaduj opinie</Button>
          </div>
          :  isOfferOpinionsLoading
            ? <LoadingIndicator/>
            : <article className="offer__opinions">
              <OfferOpinions rateCount={Number(offer?.ratings.rateCount)}
                             opinionsCount={Number(offer?.ratings.opinionsCount)}
              />
            </article>
        }
      </section>
    </main>
  );
};

export default Offer;
