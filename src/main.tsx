import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
