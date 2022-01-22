import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useQuery } from "react-query";
import { getOfferOpinions } from "../../../../actions/offerPageActions";
import { Opinion } from "../../../../models/Offer";

interface OfferOpinionsProps {
    rateCount: number;
    opinionsCount: number;
    opinions: Opinion[];
}

export const OfferOpinions: React.FC<OfferOpinionsProps> = ({rateCount, opinionsCount, opinions}) => {

    return (<section>
        <div className="opinions-title">
            <p>Recenzje</p>
            <span className="offer__ratings">
                        <StarIcon/>
                        <p>{rateCount.toFixed(2)}</p>
                        <p className="offer--clickable-text">(Ilość recenzji: {opinionsCount})</p>
                    </span>
        </div>
        {
            opinions.map((opinion) => (
              <div className="opinion">
                  <div className="opinion__author">
                      <div>
                          <p>{opinion.author.firstName}</p>
                          <p className="opinion__post-date">{opinion.date}</p>
                      </div>
                      <div className="opinion__rating">{opinion.rate}/5 <StarIcon /></div>
                  </div>
                  <p className="opinion__comment">
                      {opinion.content}
                  </p>
              </div>
            ))
        }
    </section>);
};