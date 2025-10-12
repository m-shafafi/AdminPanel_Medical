import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../Components/Topbar";
import React from "react";
import i18n from "i18n";
import useIsMobile from "pages/useIsMobile";

const AboutSection = () => {
  const { t } = useTranslation();
  const IsMobile = useIsMobile();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <>
      <Topbar />
      <Navbar />
      <Header claasNameTitleBanner={
        IsMobile ? "absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0"
          : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0"
      }


        imgBannerClassName="w-full l object-cover [mask-image:linear-gradient(to_right,transparent,black)] [mask-repeat:no-repeat]"
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner2.jpg"
        txtTitleBanner={t("navigation.about")}
        menu={[{ url: "/", desc: t("navigation.home") }, { url: "/contact", desc: t("navigation.contact") },]}
        textAlignTxt="center" height="400px" />

      <div className="container-fluid bg-light  pr-5">
        <div className="container">
          <div className="row g-7 align-items-center">
            {/* تصویر */}
            <div className="col-12 col-lg-5">
              <div className="position-relative">
                {/* <img
                  src="https://zhubinshahyad.com/media/Files/img/About/Banner2.jpg"
                  className="img-fluid rounded w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                  alt="About"
                /> */}
                {/* مثال برای عنصر اضافی روی تصویر */}
                {/* <span className="position-absolute start-0 top-0 bg-primary text-white p-2 rounded">
                  {t('about.yearsOfExperience')}
                </span> */}
              </div>
            </div>

            {/* متن */}
            <div
              className={`col-12 col-lg-6 z-10`}
              style={
                !IsMobile
                  ? { marginRight: "42rem" }
                  : undefined
              }
            >

              <div className="section-title">
                <h1 className="display-6 mb-4" style={{ textAlign: "center" }}>{t("about.title")}</h1>
                <p className="text-dark mb-3" style={{ fontWeight: "600", textAlign: isRtl ? "right" : "left" }}>
                  {t("about.description")}
                </p>

                {/* لیست ویژگی‌ها یا آیکون‌ها */}
                {/* <ul className="list-unstyled text-secondary">
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Refresing to get such a personal touch.
                  </li>
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Duis aute irure dolor in reprehenderit.
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
