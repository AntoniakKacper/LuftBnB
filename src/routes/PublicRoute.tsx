import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context/AuthProvider";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { state } = useContext(UserContext);

  if (state.authenticated) {
    return <Navigate to="/home" />;
  }
  return children;
};
