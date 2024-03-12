import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./containers/AppContainer";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="personalWebsite">
      <ToastContainer />
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>
);
