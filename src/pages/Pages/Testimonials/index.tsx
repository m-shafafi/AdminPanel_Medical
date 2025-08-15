import { useTranslation } from "react-i18next";
import Header from "../../Components/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import i18n from "../../../i18n";
import React from "react";

const Testimonials = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
            imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.png'

        title={t("navigation.testimonials")}
        txtTitleBanner={t("navigation.testimonials")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white px-3 mb-0">
                {t("navigation.contact")}
              </h4>
            </div>
            <p className="mb-0 text-black-50">{t("contact.Text")}</p>
          </div>
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              {/* <h2 className="display-5 text-white mb-2">Get in Touch</h2>
            <p className="mb-4 text-white">
              The contact form is currently inactive. Get a functional and working
              contact form with Ajax & PHP in a few minutes. Just copy and paste the
              files, add a little code and you're done.{' '}
              <a className="text-dark fw-bold" href="https://htmlcodex.com/contact-form">
                Download Now
              </a>
            </p> */}
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white "
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">{t("contact.CustomerName")}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent border border-white"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">
                        {t("contact.CustomerEmail")}
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control bg-transparent border border-white"
                        id="phone"
                        placeholder={t("contact.MobileTitle")}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label htmlFor="phone">{t("contact.MobileTitle")}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="project"
                        placeholder={t("contact.CustomerProject")}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label htmlFor="project">
                        {t("contact.CustomerProject")}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="subject"
                        placeholder={t("contact.CustomerSubject")}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label htmlFor="subject">
                        {t("contact.CustomerSubject")}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent border border-white"
                        placeholder="Leave a message here"
                        id="message"
                        style={{
                          height: "160px",
                          textAlign: isRTL ? "right" : "left",
                        }}
                      ></textarea>
                      <label htmlFor="message">
                        {t("contact.CustomerMessage")}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light text-primary w-100 py-3">
                      {t("contact.SendMessage")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-2 col-xl-2 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-transparent rounded">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t("contact.addressTitle")}</h4>
                  <p className="mb-0 text-white">
                    {t("contact.addressClinic")}
                  </p>
                  <p className="mb-0 text-white">{t("contact.address")}</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t("contact.MobileTitle")}</h4>
                  <p className="mb-0 text-white">+012 345 67890</p>
                  <p className="mb-0 text-white">+012 345 67890</p>
                </div>

                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-envelope-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t("contact.EmailTitle")}</h4>
                  <p className="mb-0 text-white">info@example.com</p>
                  <p className="mb-0 text-white">info@example.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-xl-5 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="d-flex justify-content-center mb-4">
                <a
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="rounded h-100">
                <iframe
                  className="rounded w-100"
                  style={{ height: "500px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
