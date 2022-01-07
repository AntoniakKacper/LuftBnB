import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

interface WishlistProps {}

export const Wishlist: React.FC<WishlistProps> = ({}) => {
  const authenticated = false;
  return (
    <main className="wishlist">
      <section className="wishlist__content">
        <h1>Listy życzeń</h1>
        <h3>Zaloguj się, by przejrzeć swoje listy życzeń</h3>
        <p>
          Listy życzeń możesz tworzyć, wyświetlać lub edytować po zalogowaniu.
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
