import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface OfferCarouselProps {
    images: [];
}

const OfferCarousel: React.FC<OfferCarouselProps> = ({images}) => {

    const imageItems = images.map((image, key) => (
        <img key={image} src={image} alt={`zdjęcie${key}`}/>
    ));


    return (
        <Carousel className="offer-carousel" showArrows showStatus={false} dynamicHeight={true} showThumbs={false}>
            <img className="offer-carousel__image"
                 src="https://images.unsplash.com/photo-1639570478578-d8ccf810ea80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80"
                 alt="photo1"
            />

            <img className="offer-carousel__image"
                 src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
                 alt="photo1"
            />
            <img className="offer-carousel__image"
                 src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                 alt="photo1"
            />

            {/*<div style={{*/}
            {/*  height: "100%",*/}
            {/*  backgroundImage: `url(https://images.unsplash.com/photo-1639570478578-d8ccf810ea80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80)`,*/}
            {/*  backgroundPosition: 'center',*/}
            {/*  backgroundRepeat: 'no-repeat',*/}
            {/*  backgroundSize: "cover",*/}
            {/*}}/>*/}
            {/*<div style={{*/}
            {/*  height: "100%",*/}
            {/*  backgroundImage: `url(https://images.unsplash.com/photo-1640694646609-9deff0f4b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,*/}
            {/*  backgroundPosition: 'center',*/}
            {/*  backgroundRepeat: 'no-repeat',*/}
            {/*  backgroundSize: "auto 60vh",*/}
            {/*}}/>*/}
            {/*<div style={{*/}
            {/*  height: "100%",*/}
            {/*  backgroundImage: `url(https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,*/}
            {/*  backgroundPosition: 'center',*/}
            {/*  backgroundRepeat: 'no-repeat',*/}
            {/*  backgroundSize: "100%",*/}
            {/*}}/>*/}
            {/*<div style={{*/}
            {/*  height: "60vh%",*/}
            {/*  backgroundImage: `url(https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80)`,*/}
            {/*  backgroundPosition: 'center',*/}
            {/*  backgroundRepeat: 'no-repeat',*/}
            {/*  backgroundSize: "100%",*/}
            {/*}}/>*/}
            {/*<img*/}
            {/*  src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"*/}
            {/*  alt="photo2"*/}
            {/*/>*/}
            {/*<img*/}
            {/*  src="https://images.unsplash.com/photo-1640694646609-9deff0f4b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"*/}
            {/*  alt="photo3"*/}
            {/*/>*/}
        </Carousel>
    );
};

export default OfferCarousel;