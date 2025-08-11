import Layout from "./Layout";
import Home from "./pages/Pages/Home";
import AboutSection from "./pages/Pages/AboutSection";
import Services from "./pages/Pages/Services";
import PageNotFound from "./pages/Pages/PageNotFound";
import Contact from "./pages/Pages/Contacts";
import NewsAndArticlesPage from "./pages/Pages/NewsAndArticlesPage";
import Education from "./pages/Pages/Education";
import GalleryPage from "./pages/Pages/Gallery";
import Testimonials from "./pages/Pages/Testimonials";
import Products from "./pages/Pages/Products";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CatalogPage from "./pages/Pages/Catalogs";

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
        element: <Products />,
      },
      {
        index: true,
        path: "/about",
        element: <AboutSection />,
      },
      {
        index: true,
        path: "/service",
        element: <Services />,
      },
      {
        index: true,
        path: "/404",
        element: <PageNotFound />,
      },
      {
        index: true,
        path: "/contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/NewsAndArticlesPage",
        element: <NewsAndArticlesPage />,
      },
      {
        index: true,
        path: "/education",
        element: <Education />,
      },
      {
        index: true,
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        index: true,
        path: "/catalogs",
        element: <CatalogPage />,
      },
      {
        index: true,
        path: "/pageNotFound",
        element: <PageNotFound />,
      },
      {
        index: true,
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);
