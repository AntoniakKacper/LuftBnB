import React from "react";
import "./App.scss";
import "./styles/global.scss";
import { RoutesConfig } from "./routes/RoutesConfig";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        },


    },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>

      <RoutesConfig />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StyledEngineProvider>
  );
}

export default App;
