import { Navigate, useLocation } from "react-router-dom";
import React from "react";
//import { RootState } from "store";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //const { authenticated } = useSelector((state: RootState) => state.auth);
  const authenticated = true;
  //   if (loading) {
  //     return <p>Checking authenticaton..</p>;
  //   }

  if (authenticated) {
    return children;
  }

  return <Navigate to="/signin" />;
};
