import React from "react";
import "./App.scss";
import "./styles/global.scss";
import { SignIn } from "./pages/auth/SignIn";
import { RoutesConfig } from "./routes/RoutesConfig";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RoutesConfig />
    </StyledEngineProvider>
  );
}

export default App;
