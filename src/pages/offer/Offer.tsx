import React from "react";
import {Offer as OfferModel} from "models/Offer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useNavigate} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import {Calendar} from './components/OfferCalendar/Calendar';
import {OfferReservation} from "./components/OfferReservation/OfferReservation";
import {OfferOpinions} from "./components/OfferOpinions/OfferOpinions";


interface OfferProps {
    offer: OfferModel;
}

const Offer: React.FC<OfferProps> = ({offer}) => {
    const navigate = useNavigate();
    return (
        <main className="offer">
            <nav className="offer__nav">
                <ChevronLeftIcon onClick={() => navigate(-1)}/>
                <FavoriteBorderIcon/>
            </nav>
            <img className="offer__image"
                 src="https://images.unsplash.com/photo-1639975721105-98fc58c37822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt="zdjecie"/>

            <section className="offer__content">
                <h1 className="offer__title">
                    {offer.title}
                </h1>

                <article className="offer__info">
                    <span className="offer__ratings">
                        <StarIcon/>
                        <p>4,86</p>
                        <p className="offer--clickable-text">(22 recenzje)</p>
                    </span>
                    <p className="offer--clickable-text">Śluza, Polska</p>
                </article>

                <div className="offer__divider"/>

                <article className="offer__info">
                    <div className="offer__host-info">
                        <div>
                            <p>Mały domek</p>
                            <p>Gospodarz: Tom</p>
                        </div>
                        <Avatar alt="Remy Sharp"
                                src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>

                    </div>

                </article>
                <div className="offer__divider"/>
                <article className="offer__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, doloribus earum,
                        explicabo fugit impedit libero maxime obcaecati optio quia quibusdam quidem quos ratione
                        similique totam unde vero vitae voluptatem!</p>
                </article>
                <div className="offer__divider"/>
                <article className="offer__reservation">
                    <Calendar/>
                    <OfferReservation/>
                </article>

                <div className="offer__divider"/>
                <article className="offer__opinions">
                    <OfferOpinions/>
                </article>

            </section>


        </main>
    );
};

export default Offer;
