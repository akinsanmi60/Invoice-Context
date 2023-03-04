import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
