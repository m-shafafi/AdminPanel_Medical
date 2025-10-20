import ProductForm from "pages/Pages/Products/ProductForm";
import Layout from "./Layout";
import Home from "./pages/Pages/Home";

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductsList from "pages/Pages/Products/ProductsList";
import NewsList from "pages/Pages/News/NewsList";
import NewsArticleForm from "pages/Pages/News/NewsForm";


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
        path: "/news",
        element: < NewsList />,
      },
      {
        index: true,
        path: "/Setnews",
        element: < NewsArticleForm />,
      },
      {
        index: true,
        path: "/products",
        element: < ProductForm />,
      },
      {
        index: true,
        path: "/productsList",
        element: < ProductsList />,
      },
    ],
  },
]);
