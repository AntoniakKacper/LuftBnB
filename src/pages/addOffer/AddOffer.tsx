import { CustomSelect } from 'components';
import React, { useContext, useState } from 'react';
import { UserActions, UserContext } from "context/AuthProvider";

interface AddOfferProps {

}

const propertyTypes = [
  {
    value: "house",
    label: "Dom"
  }
]

export const AddOffer: React.FC<AddOfferProps> = () => {
  const [property, setProperty] = useState('');
  const {dispatch} = useContext(UserContext);

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
    <button onClick={() => dispatch({type: UserActions.logout, payload: ''})}>Wyloguj się</button>
  </main>);
};