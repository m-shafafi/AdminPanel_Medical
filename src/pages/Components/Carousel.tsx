
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Carousel=() => {
  return (
    <OwlCarousel
      className="header-carousel owl-theme"
      loop
      margin={10}
      nav
      items={1}
      autoplay
    >
      {[1, 2].map((item) => (
        <div key={item} className="header-carousel-item">
          <img
            src={`img/carousel-${item}.jpg`}
            className="img-fluid w-100"
            alt={`carousel-${item}`}
          />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3">
              <h5
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: '3px' }}
              >
                Physiotherapy Center
              </h5>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Best Solution For Painful Life
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
              <a
                className="btn btn-primary rounded-pill text-white py-3 px-5"
                href="#"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carousel;
