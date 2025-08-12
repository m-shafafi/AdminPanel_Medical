import React from 'react';
import { useTranslation } from 'react-i18next';

const Topbar = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <a href="#" className="text-light me-4" aria-label={t('FindLocation')}>
              <i className="fas fa-map-marker-alt text-primary me-2" aria-hidden="true"></i>
              {t('FindLocation')}
            </a>
            <a href="tel:+01234567890" className="text-light me-4" aria-label="+01234567890">
              <i className="fas fa-phone-alt text-primary me-2" aria-hidden="true"></i>
              +01234567890
            </a>
            <a href="mailto:Example@gmail.com" className="text-light me-0" aria-label="Example@gmail.com">
              <i className="fas fa-envelope text-primary me-2" aria-hidden="true"></i>
              Example@gmail.com
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
