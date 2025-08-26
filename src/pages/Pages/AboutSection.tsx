import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../Components/Topbar";
import React from "react";

type menu = {
  url: string;
  desc: string;
};
const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.png'
        txtTitleBanner={t("navigation.about")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-img pb-5 ps-5 position-relative">
                <img
                  src="https://zhubinshahyad.com/media/Files/img/About/Banner.jpg"
                  className="img-fluid rounded w-100"
                  style={{ objectFit: "cover" }}
                  alt="About 1"
                />
                <div className="about-img-inner position-absolute top-0 start-0 w-50 h-50">
                  <img
                    src="https://zhubinshahyad.com/media/Files/img/About/Banner.jpg"
                    className="img-fluid rounded-circle w-100 h-100"
                    alt="About 2"
                  />
                </div>
                <span className="about-experience position-absolute  start-0   bg-primary text-white p-2 rounded">
                  {t('about.yearsOfExperience')}
                </span>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
              <div className="section-title 
               mb-5">
                <h4 className="sub-title pe-3 mb-0">{t("navigation.about")}</h4>
                <h1 className="display-3 mb-4">
                  {t("about.title")}
                </h1>
                <p className="mb-4">{t("about.description")}</p>
                {/* <div className="mb-4">
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2"></i> Refresing
                    to get such a personal touch.
                  </p>
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2"></i> Duis aute
                    irure dolor in reprehenderit in voluptate.
                  </p>
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2"></i> Velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div> */}
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                >
                  {t('button.discoverMore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
