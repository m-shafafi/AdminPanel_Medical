import React from 'react';
import { useTranslation } from 'react-i18next';
const Topbar= () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <a href="#" className="text-light me-4">
              <i className="fas fa-map-marker-alt text-primary me-2"></i>
              {t('FindLocation')}
            </a>
            <a href="#" className="text-light me-4">
              <i className="fas fa-phone-alt text-primary me-2"></i>
              +01234567890
            </a>
            <a href="#" className="text-light me-0">
              <i className="fas fa-envelope text-primary me-2"></i>
              Example@gmail.com
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
