import "App.scss";
//import { RootState } from "store";
import { BottomNavbar, Navbar } from "components";
import { SignIn } from "pages/auth/SignIn";
import { SignUp } from "pages/auth/SignUp";
import Offer from "pages/offer/Offer";
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Wishlist } from "../pages/wishlist/Wishlist";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Search } from "../pages/search/Search";
import { AddOffer } from "pages/addOffer/AddOffer";
import { UserContext } from "../context/AuthProvider";


interface RoutesProps {
}

export const RoutesConfig: React.FC<RoutesProps> = () => {
  //const { user, authenticated } = useSelector((state: RootState) => state.auth);

  const fakeOffer = {
    id: 1,
    title: "\"New Forest 1\" sielski relaks na Kaszubach",
    city: "Choroszcz",
    maxPeople: 10,
    dailyPrice: 25,
    mainImage: "",
    owner: {},
    opinions: {}
  };

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route
          path="/"
          element={
              <Home/>
          }
        />
        <Route
          path="/home"
          element={
            <Home/>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp/>
            </PublicRoute>

          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn/>
            </PublicRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={

              <Search/>

          }
        />
        <Route
          path="/offer/:id"
          element={
            <ProtectedRoute>
              <Offer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/addOffer"
          element={
            <ProtectedRoute>
              <AddOffer/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <BottomNavbar/>
    </Router>
  );
};
