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
import { SearchProvider } from "../context/SearchProvider";
import { UserActions, UserContext } from "../context/AuthProvider";
import { useMutation, useQuery } from "react-query";
import axios from "axios";


interface RoutesProps {
}

export const RoutesConfig: React.FC<RoutesProps> = () => {




  return (
    <Router>
      <Navbar/>

      <Routes>


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
          path="/addOffer"
          element={
            <ProtectedRoute>
              <AddOffer/>
            </ProtectedRoute>
          }
        />
      </Routes>

      <SearchProvider>
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
        </Routes>
      </SearchProvider>
      <BottomNavbar/>
    </Router>
  );
};
