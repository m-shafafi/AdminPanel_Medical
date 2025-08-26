
import Topbar from "../Components/Topbar";
import Navbar from "pages/Components/navbar/Navbar";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.png'

        title={t("navigation.pageNotFound")}
        txtTitleBanner={t("navigation.pageNotFound")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />
      <div className="container-fluid py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <Link to="/index" className="nav-item nav-link active">
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
