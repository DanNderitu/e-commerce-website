import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import "./global.css";
import "./index.css";

import store from "./Store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  //
  // <ThemeProvider theme={theme}>
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </ThemeProvider>
);
