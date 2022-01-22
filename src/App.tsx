import React from "react";
import "./App.scss";
import "./styles/global.scss";
import { RoutesConfig } from "./routes/RoutesConfig";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from "./context/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
});


function App() {

  return (
    <AuthProvider>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <RoutesConfig/>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </StyledEngineProvider>
    </AuthProvider>
  );

}

export default App;
