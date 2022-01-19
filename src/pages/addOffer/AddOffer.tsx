import { CustomSelect } from 'components';
import React, { useState } from 'react';

interface AddOfferProps {

}

const propertyTypes = [
  {
    value: "house",
    label: "Dom"
  }
]

export const AddOffer: React.FC<AddOfferProps> = ({}) => {
  const [property, setProperty] = useState('');

  return (<main>
    <h1>Add Offer</h1>
    <div>
      <h2>Rodzaj nieruchomości</h2>
      <CustomSelect menuItems={propertyTypes} value={property} setValue={setProperty} label="Wybierz nieruchomość"/>
    </div>
    <div>
      cena
      opis
      miasto
      ilosc gosci
      palenie
    </div>
  </main>);
};