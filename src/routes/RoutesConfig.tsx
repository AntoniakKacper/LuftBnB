import "App.scss";
//import { RootState } from "store";
import { BottomNavbar, Navbar } from "components";
import { SignIn } from "pages/auth/SignIn";
import { SignUp } from "pages/auth/SignUp";
import Offer from "pages/offer/Offer";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Wishlist } from "../pages/wishlist/Wishlist";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Search } from "../pages/search/Search";

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
        owner: {},
        opinions: {}
    }

  useEffect(() => {
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
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
                  <PublicRoute>
                      <Search/>
                  </PublicRoute>
              }
          />
        <Route
          path="/offer"
          element={
            <ProtectedRoute>
              <Offer offer={fakeOffer}/>
            </ProtectedRoute>
          }
        />

        {/*<Route*/}
        {/*  path="/home"*/}
        {/*  element={*/}
        {/*    <ProtectedRoute>*/}
        {/*      <Home />*/}
        {/*      /!*  <SignIn />*!/*/}
        {/*      /!*<SignUp />*!/*/}
        {/*    </ProtectedRoute>*/}
        {/*  }*/}
        {/*/>*/}
      </Routes>

      <BottomNavbar/>
    </Router>
  );
};
