import React from "react";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid bg-dark px-3 py-2">
      <div className="row gx-0 align-items-center">
        {/* اطلاعات تماس */}
        <div className="col-12 col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
            <a href="#" className="text-light me-3 small">
              <i className="fas fa-map-marker-alt text-primary me-1"></i>
              {t("FindLocation")}
            </a>
            <a href="tel:+01234567890" className="text-light me-3 small">
              <i className="fas fa-phone-alt text-primary me-1"></i>
              +01234567890
            </a>
            <a href="mailto:Example@gmail.com" className="text-light small">
              <i className="fas fa-envelope text-primary me-1"></i>
              Example@gmail.com
            </a>
          </div>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="col-12 col-lg-4 text-center text-lg-end mt-2 mt-lg-0">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <a href="#" className="btn btn-light btn-sm btn-square border rounded-circle me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-light btn-sm btn-square border rounded-circle me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-light btn-sm btn-square border rounded-circle me-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-light btn-sm btn-square border rounded-circle">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
