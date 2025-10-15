import ProductForm from "pages/Pages/Products/ProductForm";
import Layout from "./Layout";
import Home from "./pages/Pages/Home";

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductsList from "pages/Pages/Products/ProductsList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        // path: "/index",
        element: <Home />,
      },
      {
        index: true,
        path: "/products",
        element: < ProductForm />,
      },
      {
        index: true,
        path: "/products",
        element: < ProductsList />,
      },
    ],
  },
]);
