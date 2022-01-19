import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Link } from "react-router-dom";
import { Offer } from "models/Offer";

interface OfferTileProps {
    offer: Offer
}

export const OfferTile: React.FC<OfferTileProps> = ({offer}) => {
    // const offer = {
    //     id: 1,
    //     imgUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consectetur, consequatur ",
    //     totalPrice: 1515,
    //     pricePerDay: 169,
    //     reviews: {
    //         avgRating: 4.86,
    //         review_count: 22
    //     },
    //   location: "Warka"
    // }
    const offerImg = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    return (
        <Link to={`/offer/${offer.id}`}>
            <div className="tile-offer">
                <div className="tile-offer__image">
                    <img src={offer.mainImage.url} alt="obrazek"/>
                    <FavoriteTwoToneIcon className="tile-offer__icon" />

                </div>
                <div className="tile-offer__description">
                    <p><u>Lokalizacja:</u> {offer.city}</p>
                    <p>description</p>
                    <p className="tile-offer__description__price-per-day"><strong>{offer.dailyPrice} zł</strong> / noc</p>
                </div>
            </div>
        </Link>
    );
};