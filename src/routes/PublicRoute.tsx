import { Navigate } from "react-router-dom";
import React from "react";
//import { RootState } from "store";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  //const { authenticated } = useSelector((state: RootState) => state.auth);
  const authenticated = false;
  console.log(authenticated);

  if (authenticated) {
    return <Navigate to="/home" />;
  }
  return children;
};
