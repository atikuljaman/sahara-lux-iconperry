import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DrinksPage,
  HomePage,
  MenuPage,
  SpecialsPage,
  EventPage,
  GiftCardsPage,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/drinks",
    element: <DrinksPage />,
  },
  {
    path: "/specials",
    element: <SpecialsPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/gift-cards",
    element: <GiftCardsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
