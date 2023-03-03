import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import FetchDataApp from "./fetch-data/FetchDataApp";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="fetch-data" element={<FetchDataApp />} />
    </>
  )
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  rootElement
);
