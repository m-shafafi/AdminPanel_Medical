import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../Components/Topbar";
import React from "react";
import i18n from "i18n";

const AboutSection = () => {
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        txtTitleBanner={t("navigation.about")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
        textAlignTxt="center"
        height="400px"
      />

      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            {/* تصویر */}
            <div className="col-12 col-lg-5">
              <div className="position-relative">
                <img
                  src="https://zhubinshahyad.com/media/Files/img/About/Banner.jpg"
                  className="img-fluid rounded w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                  alt="About"
                />
                {/* مثال برای عنصر اضافی روی تصویر */}
                {/* <span className="position-absolute start-0 top-0 bg-primary text-white p-2 rounded">
                  {t('about.yearsOfExperience')}
                </span> */}
              </div>
            </div>

            {/* متن */}
            <div className="col-12 col-lg-7">
              <div className="section-title mb-4">
                <h1 className="display-5 mb-3" style={{textAlign : isRtl ? "right" : "left"}}>{t("about.title")}</h1>
                <p className="text-dark mb-3" style={{ fontWeight: "600", textAlign : isRtl ? "right" : "left"}}>
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
