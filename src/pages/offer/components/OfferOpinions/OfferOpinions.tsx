import React from 'react';
import StarIcon from '@mui/icons-material/Star';

interface OfferOpinionsProps {

}

export const OfferOpinions: React.FC<OfferOpinionsProps> = ({}) => {

    return (<section>
        <div className="opinions-title">
            <p>Recenzje</p>
            <span className="offer__ratings">
                        <StarIcon/>
                        <p>4,86</p>
                        <p className="offer--clickable-text">(22 recenzje)</p>
                    </span>
        </div>
        <div className="opinion">
            <div className="opinion__author">
                <div>
                    <p>Danielek</p>
                    <p className="opinion__post-date">wrzesień 2021</p>
                </div>
                <div className="opinion__rating">4/5 <StarIcon /></div>
            </div>
            <p className="opinion__comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur id ipsum iure nulla rem vero
                voluptate, voluptatibus. Beatae cumque, fugiat labore magnam odit porro possimus ut? Aut natus optio
                quam?
            </p>
        </div>
        <div className="opinion">
            <div className="opinion__author">
                <div>
                    <p>Kacperek</p>
                    <p className="opinion__post-date">wrzesień 2021</p>
                </div>
                <div className="opinion__rating">3/5 <StarIcon /></div>
            </div>
            <p className="opinion__comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur id ipsum iure nulla rem vero
                voluptate, voluptatibus. Beatae cumque, fugiat labore magnam odit porro possimus ut? Aut natus optio
                quam?
            </p>
        </div>
    </section>);
};