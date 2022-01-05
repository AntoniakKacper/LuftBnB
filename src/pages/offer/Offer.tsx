import React from "react";
import {Offer as OfferModel} from "models/Offer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useNavigate} from 'react-router-dom';
import {Carousel} from "react-responsive-carousel";
import OfferCarousel from './components/OfferCarousel/OfferCarousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';

interface OfferProps {
    offer: OfferModel;
}

const Offer: React.FC<OfferProps> = ({offer}) => {
    const navigate = useNavigate();

    return (
        <main className="offer">
            <nav className="offer__nav">
                <ChevronLeftIcon onClick={() => navigate(-1)}/>
                <FavoriteBorderIcon />
            </nav>
                <img className="offer__image" src="https://images.unsplash.com/photo-1639975721105-98fc58c37822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="zdjecie"/>
            <section className="offer__content">
                <h1 className="offer__title">
                    {offer.title}
                </h1>

                <div className="offer__info">
                    <span className="offer__ratings">
                    <StarIcon />
                    <p>4,86</p>
                    <p className="offer__clickable-text">(22 recenzje)</p>
                </span>
                    <p className="offer__clickable-text">Śluza, Polska</p>
                </div>

                <div className="offer__divider"/>

                <div className="offer__info">
                    <div className="offer__host-info">
                        <div>
                            <p>Mały domek</p>
                            <p>Gospodarz: Tom</p>
                            <div className="offer__apartment-info">
                                <span>4 gości</span>
                                <span>2 sypialnie</span>
                                <span>4 łóżka</span>
                                <span>1 łazienka</span>

                            </div>
                        </div>
                        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />

                    </div>

                </div>
                <div className="offer__divider"/>
                <div className="offer__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, doloribus earum, explicabo fugit impedit libero maxime obcaecati optio quia quibusdam quidem quos ratione similique totam unde vero vitae voluptatem!</p>
                </div>
                <div className="offer__divider"/>
                <div>kalendarz</div>
                <div className="offer__divider"/>
                <div>rezenzje</div>


                {/*<OfferCarousel images={[]}/>*/}
            </section>


        </main>
    );
};

export default Offer;
