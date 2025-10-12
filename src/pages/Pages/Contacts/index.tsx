
import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import i18n from "../../../i18n";
import React from "react";

const Contact = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        claasNameTitleBanner="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:-translate-x-0"
        imgBannerClassName="w-full  object-cover [mask-image:linear-gradient(to_right,transparent,black)] [mask-repeat:no-repeat]"
        textAlignTxt="center"
        imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.png'
        txtTitleBanner={t('navigation.contact')}
        menu={[
          { url: '/', desc: t('navigation.home') },
          { url: '/contact', desc: t('navigation.contact') }
        ]}
      />

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style mb-4">
              <h1 className="sub-title text-white px-3 mb-0">{t('navigation.contact')}</h1>
            </div>
            <h1 className="mb-0 text-black-50">
              {t('contact.locationTitle')}
            </h1>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 col-xl-5 contact-form wow fadeInLeft" data-wow-delay="0.1s">
              {/* <h2 className="display-5 text-white mb-2">Get in Touch</h2>
            <p className="mb-4 text-white">
              The contact form is currently inactive. Get a functional and working
              contact form with Ajax & PHP in a few minutes. Just copy and paste the
              files, add a little code and you're done.{' '}
              <a className="text-dark fw-bold" href="https://htmlcodex.com/contact-form">
                Download Now
              </a>
            </p> */}
              <div className="rounded h-100">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3989317884325!2d51.404501!3d35.7164062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010076dc9523%3A0x99e63359f7b72bd4!2z2LTYsdqp2Kog2KrYrNmH24zYstin2Kog2b7Ysti02qnbjCDamNmI2KjbjNmGINi02YfbjNin2K8!5e0!3m2!1sen!2s!4v1760246580277!5m2!1sen!2s"
                 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3989317884325!2d51.404501!3d35.7164062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010076dc9523%3A0x99e63359f7b72bd4!2z2LTYsdqp2Kog2KrYrNmH24zYstin2Kog2b7Ysti02qnbjCDamNmI2KjbjNmGINi02YfbjNin2K8!5e0!3m2!1sen!2s!4v1760246580277!5m2!1sen!2s"
                  className="rounded w-100"
                  style={{ height: '500px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-transparent rounded">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '90px', height: '90px', borderRadius: '50px' }}
                  >
                    <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t('contact.addressTitle')}</h4>
                  <p className="mb-0 text-white br">{t('contact.addressClinic')}</p>

                  <p className="mb-0 text-white">{t('contact.addressCompany')}</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '90px', height: '90px', borderRadius: '50px' }}
                  >
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t('contact.MobileTitle')}</h4>
                  <p className="mb-0 text-white" style={{ direction: "ltr" }}>{t("contacts_sales_contact")}</p>
                  <p className="mb-0 text-white" style={{ direction: "ltr" }}>{t("contacts_sales_phone")}</p>

                  <p className="mb-0 text-white" style={{ direction: "ltr" }}>{t("contacts_support_contact")}</p>
                  <p className="mb-0 text-white" style={{ direction: "ltr" }}>{t("contacts_support_phone")}</p>
                </div>

                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '90px', height: '90px', borderRadius: '50px' }}
                  >
                    <i className="fa fa-envelope-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">{t('contact.EmailTitle')}</h4>
                  <p className="mb-0 text-white">info@zhubinshahyad.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 wow fadeInRight" data-wow-delay="0.3s">
              <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="name">{t('contact.CustomerName')}</label>
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white "
                        id="name"
                        placeholder="Your Name"
                      />

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
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="email">{t('contact.CustomerEmail')}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control bg-transparent border border-white"
                        id="phone"
                        placeholder={t('contact.MobileTitle')}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="phone">{t('contact.MobileTitle')}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="project"
                        placeholder={t('contact.CustomerProject')}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="project">{t('contact.CustomerProject')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="subject"
                        placeholder={t('contact.CustomerSubject')}
                        style={{ textAlign: isRTL ? "right" : "left" }}
                      />
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="subject">{t('contact.CustomerSubject')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent border border-white"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '160px', textAlign: isRTL ? "right" : "left" }}
                      ></textarea>
                      <label style={isRTL ? { right: 0 } : { left: 0 }} htmlFor="message">{t('contact.CustomerMessage')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light text-primary w-100 py-3">{t('contact.SendMessage')}</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
