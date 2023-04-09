/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./context/AppContext";
import { ApiProvider } from "./context/clientDataContext";
import { InvoiceProvider } from "./context/invoiceDataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ApiProvider>
          <InvoiceProvider>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </InvoiceProvider>
        </ApiProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
